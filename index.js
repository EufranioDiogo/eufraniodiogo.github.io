let preloader = document.querySelector('.preloader-main-container');
preloader.style.display = 'none';

function getProjectsDatas() {
    fetch('projects.json')
    .then(response => response.json())
    .then((data) => {
        projects = data;
        showMoreProjects();
    });
}

function showMoreProjects() {
    const preloader = document.querySelector('.preloader-waiting-projects-container .preloader');

    if (actualProjectIndex >= projects.length) {
        preloader.style.display = 'none';
        preloader.style.opacity = '0';
    } else {
        preloader.style.display = 'block';

        setTimeout(() => {
            preloader.style.opacity = '1';
        })
    }

    setTimeout(() => {
        if (actualProjectIndex < projects.length) {
            let quantProjectsToShowMore = projects.length - actualProjectIndex > 3 ? 3 : projects.length - actualProjectIndex;

            let divProjectContainer;
            projectsShowed += quantProjectsToShowMore;
            let projectDescription;
            let projectMainDetails;
            let projectTitleLink;
            let projectTitle;
            let projectSpecificDescription;
            let linkVisitSite;
            let projectImgLink;
            let projectImg;
            let projectNumber;
            let project;
            let techList;
            let techListItem;

            while (quantProjectsToShowMore > 0) {
                project = projects[actualProjectIndex];

                divProjectContainer = document.createElement('div');
                divProjectContainer.classList.add('project-container');
                projectDescription = document.createElement('div');
                projectMainDetails = document.createElement('div');
                projectTitleLink = document.createElement('a');
                projectTitle = document.createElement('h1');
                projectSpecificDescription = document.createElement('p');
                linkVisitSite = document.createElement('a');
                projectImgLink = document.createElement('a');
                projectImg = document.createElement('img');
                projectNumber = document.createElement('h2');
                techList = document.createElement('ul');

                projectDescription.classList.add('project-description');
                projectMainDetails.classList.add('project-main-details');
                projectTitleLink.target = '_blank';
                projectTitle.classList.add('project-title');
                projectTitle.classList.add('u--heading1');
                projectSpecificDescription.classList.add('project-explanation');
                projectSpecificDescription.classList.add('u--paragraph');
                linkVisitSite.target = '_blank';
                linkVisitSite.classList.add('btn-visit-site');
                projectImgLink.target = '_blank';
                projectImg.classList.add('project-img');
                techList.classList.add('tech-list-used');

                projectNumber.classList.add('project-number');
                projectNumber.classList.add('u--heading2');

                projectTitle.innerText = project.name;
                projectTitleLink.href = project.link;
                projectTitleLink.appendChild(projectTitle);

                projectSpecificDescription.innerText = project.desc;

                linkVisitSite.href = project.link;
                linkVisitSite.innerText = 'De uma olhada!';
                projectMainDetails.appendChild(projectTitleLink);
                projectMainDetails.appendChild(projectSpecificDescription);
                project.techs.forEach(element => {
                    techListItem = document.createElement('li');
                    techListItem.classList.add('tech-list-item');

                    techListItem.innerText = element;

                    if (element == 'html') {
                        techListItem.classList.add('html-pseudo');
                    } else if (element == 'css') {
                        techListItem.classList.add('css-pseudo');
                    } else if (element == 'api') {
                        techListItem.classList.add('api-pseudo');
                    } else if (element == 'database') {
                        techListItem.classList.add('database-pseudo');
                    } else if (element == 'nodejs') {
                        techListItem.classList.add('nodejs-pseudo');
                    } else if (element == 'vue.js') {
                        techListItem.classList.add('vuejs-pseudo');
                    } else if (element == 'python') {
                        techListItem.classList.add('python-pseudo');
                    } else if (element == 'js') {
                        techListItem.classList.add('js-pseudo');
                    } else if (element == 'java') {
                        techListItem.classList.add('java-pseudo');
                    }
                    techList.appendChild(techListItem);
                });
                projectMainDetails.appendChild(techList);
                projectMainDetails.appendChild(linkVisitSite);

                projectImgLink.target = '_blank';
                projectImgLink.href = project.link;

                projectImg.src = project.img;
                projectImg.alt = project.name;

                projectImgLink.appendChild(projectImg);

                projectNumber.innerText = actualProjectIndex <= 9 ? '0' + (actualProjectIndex) : '' + actualProjectIndex;


                projectDescription.appendChild(projectMainDetails);
                projectDescription.appendChild(projectImgLink);
                projectDescription.appendChild(projectNumber);

                divProjectContainer.appendChild(projectDescription);
                divProjectContainer.setAttribute('type', project.type)
                document.querySelector('.sub-row').appendChild(divProjectContainer);
                console.log(divProjectContainer);
                actualProjectIndex++;
                quantProjectsToShowMore--;
            }
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 200)
        }
    }, 2000);
}





getProjectsDatas();

let projects = [];
let projectsShowed = 0;
let actualProjectIndex = 0;
let projectsFlag = true;


window.onscroll = (e) => {
    if (((window.innerHeight + window.scrollY) >= document.body.offsetHeight) && (projectsShowed < projects.length)) {
        if (projectsFlag && projects.length > 0) {
            showMoreProjects();
            projectsFlag = false;
            setTimeout(() => {
                projectsFlag = true;
            }, 1000);
        }
    }
}

if (window.screen.width < 768) {
    document.querySelector('.load-more').style.display = 'block';
    document.querySelector('.load-more').addEventListener('click', ()=> {
        if ((projectsShowed < projects.length)) {
            if (projectsFlag && projects.length > 0) {
                showMoreProjects();
                projectsFlag = false;
                setTimeout(() => {
                    projectsFlag = true;
                }, 1000);
            }
        }
    })
}