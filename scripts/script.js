// JavaScript Document

var menuButton = document.querySelector('menu-button');

menuButton.addEventListener('click', openMenu);

function openMenu() {
    var showMenu = document.querySelector('nav');
    showMenu.classList.toggle('active');
}

