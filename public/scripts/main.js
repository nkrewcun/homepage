const navbarTogglerBtn = document.querySelector('.navbarToggler');
const scrollToTopBtn = document.getElementById('scrollToTop');
const navbarMenu = document.querySelector('.navbarMenu');
const navbarBtns = document.querySelectorAll('.navbarMenu a');

navbarTogglerBtn.addEventListener('click', () => {
    navbarTogglerBtn.classList.toggle('open');
    navbarMenu.classList.toggle('show');
});

navbarBtns.forEach((navbarBtn) => {
    navbarBtn.addEventListener('click', () => {
        navbarTogglerBtn.classList.toggle('open');
        navbarMenu.classList.toggle('show');
    });
});


window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.visibility = "visible";
        scrollToTopBtn.style.opacity = '1';

    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = "hidden";
    }
};