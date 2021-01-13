/*setTimeout(() => {
    let preloader = document.querySelector('.preloader-main-container');

    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 600)
}, 2000);*/
let preloader = document.querySelector('.preloader-main-container');
preloader.style.display = 'none';

let actualTheme = window.localStorage.getItem('theme');


if (actualTheme == null) {
    actualTheme = 'dark'

    let components = document.querySelectorAll('.page-theme');

    components[0].setAttribute('href', 'CSS/menu-white-theme.css')
    components[1].setAttribute('href', 'CSS/index-white-theme.css')
    components[2].setAttribute('href', 'CSS/footer-white-theme.csss')
} else {
    if (actualTheme == 'light') {
        let components = document.querySelectorAll('.page-theme');

        components[0].setAttribute('href', 'CSS/menu-white-theme.css')
        components[1].setAttribute('href', 'CSS/index-white-theme.css')
        components[2].setAttribute('href', 'CSS/footer-white-theme.css')
    }
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

const projects = [
    {
        name: '30 Dias de CSS',
        link: 'https://eufraniodiogo.github.io/30diasDeCSS',
        desc: '30 days challenging my CSS skills',
        img: 'http://res.cloudinary.com/drh6wwwtw/image/upload/v1610342239/30DiasCSS_zq1lfu.png',
        type: 'front-end',
        techs: ['html', 'css']
    },
    {
        name: 'Weather App',
        link: 'https://eufraniodiogo.github.io/Weather-App',
        desc: 'I did this game for fun and I really like it, try to play and I think that you will like.',
        img: 'http://res.cloudinary.com/drh6wwwtw/image/upload/v1610342273/WeatherAppProject_ryyotv.jpg',
        type: 'front-end',
        techs: ['html', 'css', 'api', 'js']
    },
    {
        name: 'Image Uploader',
        link: 'https://secret-waters-42028.herokuapp.com/',
        desc: 'A full-stack project that allow you to upload images to a online-server.',
        img: 'http://res.cloudinary.com/drh6wwwtw/image/upload/v1610342314/ImgUploader_wfg14s.png',
        type: 'full-stack',
        techs: ['html', 'css', 'api', 'nodejs', 'database', 'vue.js']
    },
    {
        name: 'My Unsplash',
        link: 'https://evening-fjord-55618.herokuapp.com/',
        desc: 'A full-stack project of a photo library free to share',
        img: 'http://res.cloudinary.com/drh6wwwtw/image/upload/v1610342398/MyUnsplash_rgrlhj.png',
        type: 'full-stack',
        techs: ['html', 'css', 'nodejs', 'database', 'vue.js']
    },
    {
        name: 'Catwiki',
        link: 'https://ancient-bayou-07455.herokuapp.com/',
        desc: 'Cat lovers will love it :)',
        img: 'http://res.cloudinary.com/drh6wwwtw/image/upload/v1610342458/Catwiki_dpscxv.png',
        type: 'full-stack',
        techs: ['html', 'css', 'api', 'nodejs', 'database', 'vue.js']
    },
    {
        name: 'Rock Paper Scissor',
        link: 'https://eufraniodiogo.github.io/Rock-Paper-Scissor',
        desc: 'I did this game for fun and I really like it, try to play and I think that you will like.',
        img: 'http://res.cloudinary.com/drh6wwwtw/image/upload/v1610342503/RockPaperScissorProject_fe2icd.png',
        type: 'front-end',
        techs: ['html', 'css', 'js']
    },
    {
        name: 'Download Organizer',
        link: 'https://github.com/EufranioDiogo/Download-Organizer',
        desc: 'Organize every file that appears at downloads folder and put it in right location.',
        img: 'IMG/pexels-christina-morillo-1181263.jpg',
        type: 'script',
        techs: ['python']
    },
    {
        name: 'Countries Quiz',
        link: 'https://eufraniodiogo.github.io/Countries-Quiz',
        desc: 'A web app that put you updated about geography of the world knowing every countries...',
        img: 'http://res.cloudinary.com/drh6wwwtw/image/upload/v1610342563/Countries-Quiz_tjidr0.png',
        type: 'front-end',
        techs: ['html', 'css', 'vue.js']
    },
    {
        name: 'Awesome Quotes',
        link: 'https://eufraniodiogo.github.io/AwesomeQuotes',
        desc: 'Do you like quotes? Take a look at the best website to get all the your quotes.',
        img: 'http://res.cloudinary.com/drh6wwwtw/image/upload/v1610342615/AwesomeQuotes_zwuyva.png',
        type: 'front-end',
        techs: ['html', 'css', 'vue.js', 'api']
    },
    {
        name: 'Todo',
        link: 'https://eufraniodiogo.github.io/Todo',
        desc: 'A todo app app that I did using data structures.',
        img: 'http://res.cloudinary.com/drh6wwwtw/image/upload/v1610342657/Todo_yhotqg.png',
        type: 'front-end',
        techs: ['html', 'css', 'vue.js']
    },
    {
        name: 'Github Jobs',
        link: 'https://eufraniodiogo.github.io/Github-Jobs',
        desc: 'Do you want to know the jobs opportunities around you? If yes this the best solution',
        img: 'http://res.cloudinary.com/drh6wwwtw/image/upload/v1610342722/Github-Jobs_mtnwxh.png',
        type: 'front-end',
        techs: ['html', 'css', 'vue.js', 'api']
    },
    {
        name: 'Edie HomePage',
        link: 'https://eufraniodiogo.github.io/Edie-Homepage',
        desc: 'Beautiful and Amazing website design!',
        img: 'http://res.cloudinary.com/drh6wwwtw/image/upload/v1610342778/EdieHomePage_b8wahy.png',
        type: 'front-end',
        techs: ['html', 'css']
    },
    {
        name: 'Comandos de git',
        link: 'https://github.com/EufranioDiogo/comandos-git',
        desc: 'Repository created by Taba and I liked so much and I decided to contribuite and I loved because I also use git and it will help me and others hope so.',
        img: 'https://res.cloudinary.com/drh6wwwtw/image/upload/v1610342826/ComandoGit_idwefn.png',
        type: 'contribution',
        techs: []
    },
    {
        name: 'Windbnb',
        link: 'https://eufraniodiogo.github.io/windbnb',
        desc: 'A todo app app that I did using data structures.',
        img: 'http://res.cloudinary.com/drh6wwwtw/image/upload/v1610341869/Windbnb_lftqhz.png',
        type: 'front-end',
        techs: ['html', 'css', 'vue.js']
    },
    {
        name: 'Checkout Form',
        link: 'https://eufraniodiogo.github.io/Checkout-Form',
        desc: 'A todo app app that I did using data structures.',
        img: 'http://res.cloudinary.com/drh6wwwtw/image/upload/v1610343289/CheckoutForm_s7ehxv.png',
        type: 'front-end',
        techs: ['html', 'css']
    },
];
let projectsShowed = 0;
let actualProjectIndex = 0;
let projectsFlag = true;

window.onscroll = (e) => {
    if (((window.innerHeight + window.scrollY) >= document.body.offsetHeight) && (projectsShowed < projects.length)) {
        if (projectsFlag) {
            showMoreProjects();
            projectsFlag = false;
            setTimeout(() => {
                projectsFlag = true;
            }, 1000);
        }
    }
}