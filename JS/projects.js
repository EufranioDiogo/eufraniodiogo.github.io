function formatPage() {
    const projectName = document.querySelector('.project-name');
    projectName.innerText = project.name;
    const aboutSection = document.querySelector('.about-section');
    aboutSection.innerHTML = '<p class="u--text">' + project.desc + "</p>";
    const projectImg = document.querySelector('.project-img');
    projectImg.src = '../' + project.img;
}


const projectId = window.location.href.toString().split('?')[1].split('=')[1];
console.log(projectId)
let project;

fetch('../projects.json').then((response) => response.json()).then((data) => {
    project = data[projectId];
    formatPage();
});

const tabs = document.querySelectorAll('.tab');
const menuItens = document.querySelectorAll('.menu-list .menu-item');
let previousActiveTab = document.querySelector('.tab');

for(let i = 0; i < menuItens.length; i++) {
    let item = menuItens[i];

    item.addEventListener('click', (event) => {
            previousActiveTab.classList.remove('active');
            event.target.classList.add('active');
            previousActiveTab = event.target;
            
            for (const tab of tabs) {
                tab.classList.remove('active-tab');
            }
            tabs[i].classList.add('active-tab');
    });
}

