function changeProjectsFilter(e){
    app.actualProjectTypeFilter = e.target.value
    document.querySelector('.number-of-projects').innerText = app.projects.filter(project => project.type == e.target.value || e.target.value == 'all').length + 'Projects'
}

//document.getElementById('project-type').addEventListener('change', changeProjectsFilter)