import './style.css'


const navLinks = document.querySelectorAll('.nav-list__item');

/*
const classToggle = () => {
    button.classList.toggle('open');
    nav.classList.toggle('active');
    body.classList.toggle('overflow-hidden');
};
*/
const menuHandler = () => {

    [...navLinks].forEach((link) => link.addEventListener('click', (event) => {
        if (event.currentTarget.classList.contains('active')) {
            event.preventDefault();
        }

        classToggle();
    }));
};

menuHandler();