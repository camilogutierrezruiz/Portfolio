
const desktopMenu = document.querySelector('.menu__nav--desktop');
const openMenuButton = document.querySelector('#open__menu');
const closeMenuButton = document.querySelector('#close__menu');
let navMenu = document.querySelector('.menu__nav');

const navItem = document.querySelectorAll('.items');
const navIcons = document.querySelectorAll('.nav__menu--icon');
const navMenuItem = document.querySelectorAll('#nav__menu--item')


// * MOSTRAR EL MENU RESPONSIVE

closeMenuButton.addEventListener('click', event => {
    navMenu.classList.remove('active');
});

openMenuButton.addEventListener('click', event => {
    navMenu.classList.add('active');
});

for (let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener('click', event => {
        navMenu.classList.remove('active');
    })
}

for (let i = 0; i < navIcons.length; i++) {
    navIcons[i].addEventListener('click', event => {
        navMenu.classList.remove('active');
    });
}


// * DETECCIÓN CONSTANTE DEL ANCHO DE LA VENANA DEL NAVEGADOR PARA MOSTRAR EL NAVBAR DESKTOP

function showDesktopMenu(widthWindow) {
    if (widthWindow >= 1024) {
        desktopMenu.classList.add('active');
    } else {
        desktopMenu.classList.remove('active');
    }
}

function widthUpgrade() {
    ancho = window.innerWidth;
    showDesktopMenu(ancho);
}

setInterval(widthUpgrade, (1000 / 4));


// * SLIDER 


const portfolioWrapper = document.getElementById('img__slider');
let countSliderImg = 1;

function setSliderImg() {
    portfolioWrapper.src = `./portfolio_img/img_${countSliderImg}.jpg`;
    countSliderImg++;
    if (countSliderImg > 4) {
        countSliderImg = 1;
    }
}


setInterval(setSliderImg, 5000);