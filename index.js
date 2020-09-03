let btnSeeMyRepos = document.getElementById('see-my-repos')
let flagSeeMyRepos = false;

btnSeeMyRepos.addEventListener('click', ()=>{
    if(flagSeeMyRepos == false){
        document.getElementById('my-repos').style.display = 'flex';

        fetch('https://api.github.com/users/EufranioDiogo/repos')
        .then(res => res.json())
        .then(data => {
            for(let i = 0; i < data.length; i++){
                repo = data[i];
                data[i] = {'name': repo.name.replaceAll('-', ' ').replaceAll('_', ' ').toLowerCase() , 'url': repo.html_url, 'icon': '<i class="fas fa-directions directions"></i>'}
            }

            let app = new Vue({
                el: '#my-repos',
                data: {
                    repos: data
                }
            })
        })
        .catch((error) => alert('Cant\'t catch EufranioDiogo repositories'));
        
        flagSeeMyRepos = true;
    }
})