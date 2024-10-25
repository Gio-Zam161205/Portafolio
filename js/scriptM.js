const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');
const body = document.body;

document.addEventListener('DOMContentLoaded', function () {
    const loginFormBox = document.querySelector('.login-section .form-box.login');
    const registerFormBox = document.querySelector('.login-section .form-box#sigin'); // Cambiado a 'sigin'
    const loginButton = document.getElementById('btn-login');
    const siginButton = document.getElementById('btn-sigin');

    if (loginFormBox && registerFormBox && loginButton && siginButton) {
        loginButton.addEventListener('click', function () {
            loginFormBox.style.transform = 'translateX(100vw)';
            registerFormBox.style.transform = 'translateX(-0.2vw)';
        });

        siginButton.addEventListener('click', function () {
            loginFormBox.style.transform = 'translateX(-0.2vw)';
            registerFormBox.style.transform = 'translateX(100vw)';
        });
    }
    menuIcon.addEventListener('click', function (event) {
    body.classList.toggle('menu-open');
    event.stopPropagation(); // Evitar que el clic en el icono propague al body
});

body.addEventListener('click', function () {
    if (body.classList.contains('menu-open')) {
        body.classList.remove('menu-open');
    }
});

navbar.addEventListener('click', function (event) {
    event.stopPropagation(); // Evitar que el clic en el menú propague al body
});
});