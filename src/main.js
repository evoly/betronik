import './style.css'


const button = document.querySelector('.burger-menu');
const nav = document.querySelector('nav');
const navLinks = nav.querySelectorAll('.nav-list__item');
const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const classToggle = () => {
    button.classList.toggle('open');
    nav.classList.toggle('active');
    body.classList.toggle('overflow-hidden');
};

const menuHandler = () => {
    button.addEventListener('click', () => {
        classToggle();
    });

    [...navLinks, logo].forEach((link) => link.addEventListener('click', (event) => {
        if (event.currentTarget.classList.contains('active')) {
            event.preventDefault();
        }

        classToggle();
    }));
};

menuHandler();