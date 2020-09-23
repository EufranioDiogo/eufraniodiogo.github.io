let repos = fetch('https://api.github.com/users/EufranioDiogo/repos')
.then(response => response.json())
.then(data => data);

let app = new Vue({
    el: '#main-conteiner',
    data: {
        projects: [
            {
                name: 'Uija Code',
                link: 'https://eufraniodiogo.github.io/Meu-Web-Site',
                desc: 'Site to teach programming',
                img: '../IMG/UijaCodeProject.png'
            },
            {
                name: 'Rock Paper Scissor',
                link: 'https://eufraniodiogo.github.io/Rock-Paper-Scissor',
                desc: 'I did this game for fun and I really like it, try to play and I think that you will like.',
                img: '../IMG/RockPaperScissorProject.png'
            },
            {
                name: 'Weather App',
                link: 'https://eufraniodiogo.github.io/Weather-App',
                desc: 'I did this game for fun and I really like it, try to play and I think that you will like.',
                img: '../IMG/WeatherAppProject.jpg'
            },
            {
                name: 'Download Organizer',
                link: 'https://github.com/EufranioDiogo/Download-Organizer',
                desc: 'Organize every file that appears at downloads folder and put it in right location.',
                img: '../IMG/pexels-christina-morillo-1181263.jpg'
            },
            {
                name: 'Countries Quiz',
                link: 'https://eufraniodiogo.github.io/Countries-Quiz',
                desc: 'A web app that put you updated about geography of the world knowing every countries...',
                img: '../IMG/Countries-Quiz.png'
            },
            {
                name: 'Github Jobs',
                link: 'https://eufraniodiogo.github.io/Github-Jobs',
                desc: 'Do you want to know the jobs opportunities around you? If yes this the best solution',
                img: '../IMG/Github-Jobs.png'
            },
            {
                name: 'Awesome Quotes',
                link: 'https://eufraniodiogo.github.io/AwesomeQuotes',
                desc: 'Do you like quotes? Take a look at the best website to get all the your quotes.',
                img: '../IMG/AwesomeQuotes.png'
            },
            {
                name: 'Comandos de git',
                link: 'https://github.com/EufranioDiogo/comandos-git',
                desc: 'Repository created by Taba and I liked so much and I decided to contribuite and I loved because I also use git and it will help me and others hope so.',
                img: '../IMG/ComandoGit.png'
            },
            {
                name: 'ToDo App',
                link: 'https://eufraniodiogo.github.io/toDoApp',
                desc: 'A todo app app that I did using data structures.',
                img: '../IMG/toDoApp.png'
            },
            {
                name: 'Edie HomePage',
                link: 'https://eufraniodiogo.github.io/Edie-Homepage',
                desc: 'Beautiful and Amazing website design!',
                img: '../IMG/EdieHomePage.png'
            },
            {
                name: 'Fone Landing Page',
                link: 'https://eufraniodiogo.github.io/Fone-Landing-Page',
                desc: 'A todo app app that I did using data structures.',
                img: '../IMG/FoneProject.png'
            },
            {
                name: 'My Gallery',
                link: 'https://eufraniodiogo.github.io/My-Gallery-App',
                desc: 'A todo app app that I did using data structures.',
                img: '../IMG/MyGallery.png'
            },
            {
                name: 'Pomodoro',
                link: 'https://eufraniodiogo.github.io/Pomodoro',
                desc: 'A todo app app that I did using data structures.',
                img: '../IMG/PomodoroProject.png'
            },
        ]
    }
})