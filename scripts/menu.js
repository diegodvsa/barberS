let show = true;
const menuSection = document.querySelector('.menu-section');
const hamburger = document.querySelector('.hamb');
const close = document.querySelector('.close');


hamburger.addEventListener("click", () => {
    menuSection.classList.toggle('on');
});

close.addEventListener("click", () => {
    menuSection.classList.toggle('on');
});