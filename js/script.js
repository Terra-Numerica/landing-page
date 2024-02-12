import navbarMenu from './navbarMenu.js';

window.addEventListener('DOMContentLoaded', (event) => {

    const navMenu = document.querySelector('#nav-menu');

    navbarMenu.forEach((menu) => {

        const liItem = document.createElement('li');
        liItem.className = 'nav-item';

        const navItem = document.createElement('a');
        navItem.className = 'nav-link';

        navItem.textContent = menu.title;
        navItem.href = menu.url;

        liItem.appendChild(navItem);
        navMenu.appendChild(liItem);
    });
})