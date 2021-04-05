const mobileMenu = document.querySelector('#mobile-menu');
const hamburgerMenu = document.querySelector('#btn-menu-extra');
let flagMobileMenuVisible = false;

hamburgerMenu.addEventListener('click', () => {
    if(flagMobileMenuVisible == false){
        flagMobileMenuVisible = true;
        mobileMenu.style.display = 'block';
        mobileMenu.style.opacity = '1';
        setTimeout(() => {
            mobileMenu.style.width = "100%";
        }, 300);
    } else {
        flagMobileMenuVisible = false;
        mobileMenu.style.width = '0%';
        setTimeout(() => {
            mobileMenu.style.display = 'none';
        }, 500)
        
    }
})