import {initialPageLoad} from './initial-page-load.js'
import {menu} from './menu.js'
import {contact} from './contact.js'


initialPageLoad();


function homeTab () {
    const homeTab = document.querySelector(".home");
    homeTab.addEventListener('click', initialPageLoad);
};

function menuTab () {
    const menuTab = document.querySelector(".menu");
    menuTab.addEventListener('click', menu);
};

function contactTab () {
    const contactTab = document.querySelector(".contact");
    contactTab.addEventListener('click', contact);
};

homeTab();
menuTab();
contactTab();