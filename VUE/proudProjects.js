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
                languages: ['HTML', 'CSS', 'JS'],
                objective: 'Minha Startup'
            },
            {
                name: 'Rock Paper Scissor',
                link: 'https://eufraniodiogo.github.io/Rock-Paper-Scissor',
                languages: ['HTML', 'CSS', 'JS'],
                objective: 'I did this game for fun and I really like it, try to play and I think that you will like.'
            },
            {
                name: 'Download Organizer',
                link: 'https://github.com/EufranioDiogo/Download-Organizer',
                languages: ['Python', 'ShellScript'],
                objective: 'Organize every file that appears at downloads folder and put it in right location.'
            },
            {
                name: 'Comandos de git',
                link: 'https://github.com/EufranioDiogo/comandos-git',
                languages: [],
                objective: 'Repository created by Taba and I liked so much and I decided to contribuite and I loved because I also use git and it will help me and others hope so.'
            },
            {
                name: 'DevChallenges',
                link: 'https://github.com/EufranioDiogo/DedvChallenges',
                languages: ['HTML', 'CSS', 'JS'],
                objective: 'Frontend challenges developed by Lorena and collaboratores with a lot of websites to pratice and improve the skills at front-end.'
            },
            {
                name: 'Cheesecake',
                link: 'https://eufraniodiogo.github.io/cheesecake-recipe',
                languages: ['HTML', 'CSS', 'JS'],
                objective: 'One of the most exiceted front-end challenges that I had.'
            },
        ]
    }
})