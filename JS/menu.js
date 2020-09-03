let itenMenu = document.querySelectorAll('.menu-itens');

itenMenu.forEach(element => {
    element.addEventListener('mouseover', (event)=>{
        event.target.nextElementSibling.style.transition = '0.3s';
        event.target.nextElementSibling.style.width = '100%';
    })
    element.addEventListener('mouseout', (event)=>{
        event.target.nextElementSibling.style.transition = '0.3s';
        event.target.nextElementSibling.style.width = '0%';
    })
})
