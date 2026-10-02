// script.js
const menuBtn = document.querySelector('.icon-menu');
const closeBtn = document.querySelector('.icon-close');
const wrapperNav = document.querySelector('.wrapper__nav');

menuBtn.addEventListener('click', function () {
    if (!wrapperNav.classList.contains('active')) {
        wrapperNav.classList.add('active');
    }
})

closeBtn.addEventListener('click', function () {
    if (wrapperNav.classList.contains('active')) {
        wrapperNav.classList.remove('active');
    }
})