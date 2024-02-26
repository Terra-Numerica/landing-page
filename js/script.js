import navbarMenu from './navbarMenu.js';

window.addEventListener('DOMContentLoaded', (event) => {
    const navMenu = document.querySelector('#nav-menu');

    navbarMenu.forEach((menu) => {
        const liItem = document.createElement('li');
        liItem.className = 'nav-item';

        const navItem = document.createElement('a');
        navItem.className = 'nav-link';
        // Donne moi une flèche fine qui pointe vers le bas : 
        navItem.innerHTML = `${menu.title} ${menu.dropdown?.length ? '➢' : ''}`;
        navItem.href = menu.url;

        liItem.appendChild(navItem);

        if (menu.dropdown?.length) appendDropdown(menu.dropdown, liItem);

        navMenu.appendChild(liItem);
    });
});

function appendDropdown(menuItems, parentElement) {

    const subMenu = document.createElement('ul');
    subMenu.className = 'dropdown-menu';

    menuItems.forEach((item) => {

        const itemElement = document.createElement('li');
        itemElement.className = 'dropdown-item';

        const linkElement = document.createElement('a');
        linkElement.className = 'dropdown-link';
        linkElement.textContent = `${item.title} ${item.dropdown?.length ? '➢' : ''}`;
        linkElement.href = item.url;

        itemElement.appendChild(linkElement);

        if (item.dropdown?.length) appendDropdown(item.dropdown, itemElement);

        subMenu.appendChild(itemElement);
    });

    parentElement.appendChild(subMenu);
};