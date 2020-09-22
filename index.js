let btnSeeMyRepos = document.getElementById('see-my-repos')
let flagSeeMyRepos = false;
let actualTheme = window.localStorage.getItem('theme')

if (actualTheme == null) {
    actualTheme = 'dark'

    let components = document.querySelectorAll('.page-theme');

    components[0].setAttribute('href', 'CSS/menu-dark-theme.css')
    components[1].setAttribute('href', 'CSS/index-dark-theme.css')
    components[2].setAttribute('href', 'CSS/footer-dark-theme.css')
} else {
    if(actualTheme == 'light'){
        let components = document.querySelectorAll('.page-theme');

        components[0].setAttribute('href', 'CSS/menu-white-theme.css')
        components[1].setAttribute('href', 'CSS/index-white-theme.css')
        components[2].setAttribute('href', 'CSS/footer-white-theme.css')
    }
}

function toTitle(name) {
    name = name.split(' ');

    for (let i = 0; i < name.length; i++) {
        name[i] = name[i][0].toUpperCase() + name[i].substring(1,);
    }
    name = name.join(' ');
    return name;
}

btnSeeMyRepos.addEventListener('click', () => {
    if (flagSeeMyRepos == false) {
        document.getElementById('my-repos').style.display = 'flex';
        let limitRepo = 0;
        let velocity = 0;
        let paragrafo = document.querySelector('#repo-number');
        paragrafo.innerText = 0;

        fetch('https://api.github.com/users/EufranioDiogo/repos')
            .then(res => res.json())
            .then(data => {
                let name;
                let url;

                for (let i = 0; i < data.length; i++) {
                    repo = data[i];
                    name = repo.name.replaceAll('-', ' ').replaceAll('_', ' ').toLowerCase();

                    name = toTitle(name);
                    url = repo.html_url;

                    data[i] = { 'name': name, 'url': url }
                }

                limitRepo = data.length;
                velocity = limitRepo > 100 ? 0.05 : 50;

                let app = new Vue({
                    el: '#my-repos',
                    data: {
                        repos: data,
                    }
                })
                document.querySelector('.div-repos-quantity').style.display = 'flex';


                function animationReposNumber() {
                    let repoNumber = parseInt(paragrafo.innerText) + 1;
                    if (repoNumber > limitRepo) {
                        clearInterval(intervalID);
                    } else {
                        paragrafo.innerText = repoNumber;
                    }
                }
                let intervalID = setInterval(animationReposNumber, velocity);
                document.querySelector('#see-my-repos').style.display = 'none';
            })
            .catch((error) => {
                document.querySelector('#my-repos > ul > a > li').innerText = 'let\'s go to the repos';
                alert('Sorry, We can\'t access Eufranio\'s repos, click at the link bellow to access');
                document.querySelector('#my-repos > ul > a').setAttribute('href', 'https://github.com/EufranioDiogo?tab=repositories');

            });
        document.querySelector('#see-my-repos').style.display = 'none';
        flagSeeMyRepos = true;
    }
})


let app = new Vue({
    el: '#main-content',
    data: {
        theme: actualTheme,
        levels: {jsLevel: 65, html5Level: 80, vuejsLevel: 50, css3Level: 75}
    },
    methods: {
        lightTheme() {
            let components = document.querySelectorAll('.page-theme');

            components[0].setAttribute('href', 'CSS/menu-white-theme.css')
            components[1].setAttribute('href', 'CSS/index-white-theme.css')
            components[2].setAttribute('href', 'CSS/footer-white-theme.css')
            this.theme = 'light'
            window.localStorage.setItem('theme', 'light')
        },
        darkTheme() {
            let components = document.querySelectorAll('.page-theme');

            components[0].setAttribute('href', 'CSS/menu-dark-theme.css')
            components[1].setAttribute('href', 'CSS/index-dark-theme.css')
            components[2].setAttribute('href', 'CSS/footer-dark-theme.css')
            this.theme = 'dark'
            window.localStorage.setItem('theme', 'dark')

        }
    },
})