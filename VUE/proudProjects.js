function changeProjectsFilter(e){
    app.actualProjectTypeFilter = e.target.value
    document.querySelector('.number-of-projects').innerText = app.projects.filter(project => project.type == e.target.value || e.target.value == 'all').length + 'Projects'
}

let app = new Vue({
    el: '#main-conteiner',
    data: {
        projects: [
            {
                name: 'Weather App',
                link: 'https://eufraniodiogo.github.io/Weather-App',
                desc: 'I did this game for fun and I really like it, try to play and I think that you will like.',
                img: '../IMG/WeatherAppProject.jpg',
                type: 'front-end'
            },
            {
                name: 'Image Uploader',
                link: 'https://secret-waters-42028.herokuapp.com/',
                desc: 'A full-stack project that allow you to upload images to a online-server.',
                img: '../IMG/ImgUploader.png',
                type: 'full-stack'
            },
            {
                name: 'My Unsplash',
                link: 'https://evening-fjord-55618.herokuapp.com/',
                desc: 'A full-stack project of a photo library free to share',
                img: '../IMG/MyUnsplash.png',
                type: 'full-stack'
            },
            {
                name: 'Rock Paper Scissor',
                link: 'https://eufraniodiogo.github.io/Rock-Paper-Scissor',
                desc: 'I did this game for fun and I really like it, try to play and I think that you will like.',
                img: '../IMG/RockPaperScissorProject.png',
                type: 'front-end'
            },
            {
                name: 'Download Organizer',
                link: 'https://github.com/EufranioDiogo/Download-Organizer',
                desc: 'Organize every file that appears at downloads folder and put it in right location.',
                img: '../IMG/pexels-christina-morillo-1181263.jpg',
                type: 'script'
            },
            {
                name: 'Countries Quiz',
                link: 'https://eufraniodiogo.github.io/Countries-Quiz',
                desc: 'A web app that put you updated about geography of the world knowing every countries...',
                img: '../IMG/Countries-Quiz.png',
                type: 'front-end'
            },
            {
                name: 'Awesome Quotes',
                link: 'https://eufraniodiogo.github.io/AwesomeQuotes',
                desc: 'Do you like quotes? Take a look at the best website to get all the your quotes.',
                img: '../IMG/AwesomeQuotes.png',
                type: 'front-end'
            },
            {
                name: 'Todo',
                link: 'https://eufraniodiogo.github.io/Todo',
                desc: 'A todo app app that I did using data structures.',
                img: '../IMG/Todo.png',
                type: 'front-end'
            },
            {
                name: 'Github Jobs',
                link: 'https://eufraniodiogo.github.io/Github-Jobs',
                desc: 'Do you want to know the jobs opportunities around you? If yes this the best solution',
                img: '../IMG/Github-Jobs.png',
                type: 'front-end'
            },
            {
                name: 'Edie HomePage',
                link: 'https://eufraniodiogo.github.io/Edie-Homepage',
                desc: 'Beautiful and Amazing website design!',
                img: '../IMG/IdeieHomePage.png',
                type: 'front-end'
            },
            {
                name: 'Comandos de git',
                link: 'https://github.com/EufranioDiogo/comandos-git',
                desc: 'Repository created by Taba and I liked so much and I decided to contribuite and I loved because I also use git and it will help me and others hope so.',
                img: '../IMG/ComandoGit.png',
                type: 'contribution'
            },
            {
                name: 'Windbnb',
                link: 'https://eufraniodiogo.github.io/windbnb',
                desc: 'A todo app app that I did using data structures.',
                img: '../IMG/Windbnb.png',
                type: 'front-end'
            },
            {
                name: 'Checkout Form',
                link: 'https://eufraniodiogo.github.io/Checkout-Form',
                desc: 'A todo app app that I did using data structures.',
                img: '../IMG/CheckoutForm.png',
                type: 'front-end'
            },
        ],
        actualProjectTypeFilter: 'all',
        projectsShowed: 0
    }
})

document.getElementById('project-type').addEventListener('change', changeProjectsFilter)