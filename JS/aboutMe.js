const mytoolkit = [
    {
        techName: 'JavaScript',
        icon: 'fab fa-js',
    },
    {
        techName: 'HTML5',
        icon: 'fab fa-html5',
    },
    {
        techName: 'CSS3',
        icon: 'fab fa-css3-alt',
    },
    {
        techName: 'VUE.js',
        icon: 'fab fa-vuejs',
    },
    {
        techName: 'Node.js',
        icon: 'fab fa-node-js',
    },
    {
        techName: 'Sass',
        icon: 'fab fa-sass',
    },
    {
        techName: 'Java',
        icon: 'fab fa-java',
    },
    {
        techName: 'C',
        icon: 'fab fa-cuttlefish',
    },
    {
        techName: 'git',
        icon: 'fab fa-git',
    },
    {
        techName: 'PHP',
        icon: 'fab fa-php',
    },
    {
        techName: 'Linux',
        icon: 'fab fa-linux',
    }
];

const list = document.querySelector('.i-work-with');

for (let element of mytoolkit) {
    const listItem = document.createElement('li');
    const listItemIcon = document.createElement('i');
    const listItemName = document.createElement('p');

    listItem.setAttribute('class', 'list-item')

    listItemName.setAttribute('class', 'tech-denomination');
    listItemName.innerText = element.techName;
    listItemIcon.setAttribute('class', element.icon);

    listItem.appendChild(listItemIcon);
    listItem.appendChild(listItemName);

    list.appendChild(listItem);
}