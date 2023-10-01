// Navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const navFixed = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.scrollY > navFixed) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};

// Humberger menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});