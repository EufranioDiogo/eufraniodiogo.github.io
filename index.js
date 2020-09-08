let btnSeeMyRepos = document.getElementById('see-my-repos')
let flagSeeMyRepos = false;

function toTitle(name){
    name = name.split(' ');

    for(let i = 0; i < name.length; i++){
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
