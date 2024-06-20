const menubar = document.getElementById('menu-bar');
const closebtn = document.getElementById('closebtn');
const navbar = document.getElementById('navbar');

if (menubar) {
    menubar.addEventListener('click', () => {
        navbar.classList.add('active');
    })
}
if (closebtn) {
    navbar.addEventListener('click', () => {
        navbar.classList.remove('active');
    })
}