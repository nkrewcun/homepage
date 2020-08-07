const navbarTogglerBtn = document.querySelector('.navbarToggler');
const navbarMenu = document.querySelector('.navbarMenu');
navbarTogglerBtn.addEventListener('click', () => {
    navbarTogglerBtn.classList.toggle('open');
    navbarMenu.classList.toggle('show');
});