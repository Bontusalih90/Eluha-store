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
const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signUp');

signUpButton.addEventListener('click', function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signUpForm.style.display="none";
    signInForm.style.display="block";
})
