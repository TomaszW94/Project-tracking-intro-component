const btn_menu = document.querySelector('.menu-btn');
const menu = document.querySelector('nav ul');


function menu_active() {
    menu.classList.toggle('nav_show');
    if (menu.classList.contains('nav_show')) {
        document.querySelector('.fa-bars').style.display = "none";
        document.querySelector('.fa-times').style.display = "flex";
    } else {
        document.querySelector('.fa-bars').style.display = "flex";
        document.querySelector('.fa-times').style.display = "none";
    }
}

btn_menu.addEventListener('click', menu_active);