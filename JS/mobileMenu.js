const mobileMenu = document.querySelector('#mobile-menu');
const hamburgerMenu = document.querySelector('#btn-menu-extra');
let flagMobileMenuVisible = false;

hamburgerMenu.addEventListener('click', () => {
    if(flagMobileMenuVisible == false){
        flagMobileMenuVisible = true;
        mobileMenu.style.display = 'block';
    } else {
        flagMobileMenuVisible = false;
        mobileMenu.style.display = 'none';
    }
})