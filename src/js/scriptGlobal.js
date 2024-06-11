
// menu mobile
const hamburger = document.querySelector('.header__hamburger');
        const nav = document.querySelector('.header__nav');

        hamburger.addEventListener('click', () => {
            nav.classList.toggle('show');
            hamburger.classList.toggle('active');
        });