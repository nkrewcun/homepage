const navbarTogglerBtn = document.querySelector('.navbarToggler');
const scrollToTopBtn = document.getElementById('scrollToTop');

navbarTogglerBtn.addEventListener('click', () => {
    const navbarMenu = document.querySelector('.navbarMenu');
    navbarTogglerBtn.classList.toggle('open');
    navbarMenu.classList.toggle('show');
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