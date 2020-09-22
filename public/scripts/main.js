const navbarTogglerBtn = document.querySelector('.navbarToggler');
const scrollToTopBtn = document.getElementById('scrollToTop');
const navbarMenu = document.querySelector('.navbarMenu');
const navbarBtns = document.querySelectorAll('.navbarMenu a');
const timelineContainers = document.querySelectorAll('#parcours .container');
const timelineContentsAfter = document.querySelectorAll('#parcours .contents::after');
console.log(timelineContentsAfter);
let slidePoint;
let containerRect;

const isInViewport = function (elem) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

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

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.visibility = "visible";
        scrollToTopBtn.style.opacity = '1';

    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = "hidden";
    }

    timelineContainers.forEach(timelineContainer => {
        containerRect = timelineContainer.getBoundingClientRect();
        slidePoint = containerRect.height / 2
        if (window.innerHeight - containerRect.y >= slidePoint) {
            timelineContainer.classList.remove('slide');
            timelineContentsAfter.forEach(after => {
                after.style.transform = "translateX(0px)";
            });
        }
    });
});