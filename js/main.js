const menuButton = document.querySelector('.nav__button');
const closeButton = document.querySelector('.close__menu');
const navMenu = document.querySelector('.menu__nav');

menuButton.addEventListener('click', function () {
    navMenu.classList.toggle('active');
})