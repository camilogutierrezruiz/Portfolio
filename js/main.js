
const desktopMenu = document.querySelector('.menu__nav--desktop');
const openMenuButton = document.querySelector('#open__menu');
const closeMenuButton = document.querySelector('#close__menu');
let navMenu = document.querySelector('.menu__nav');

const navItem = document.querySelectorAll('.items');
const navIcons = document.querySelectorAll('.nav__menu--icon');

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

function addNavItemsToDesktopNavBar(container, items) {
    container.appendChild(items);
}

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
