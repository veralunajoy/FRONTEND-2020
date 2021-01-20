// JavaScript Document

var menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', openMenu);
menuButton.addEventListener('click', changeIcon);

function openMenu() {
    var showMenu = document.querySelector('nav');
    showMenu.classList.toggle('active');
}

function changeIcon() {
    var changeMenuIcon = document.querySelectorAll('span');
    changeMenuIcon.classList.toggle('cross');
}



