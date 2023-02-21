"use strict";
// button
const button = document.querySelector('button');
function handleClick(event) {
    console.log(event, 'event');
}
button?.addEventListener('click', handleClick);
// scroll
function handleScroll(event) {
    console.log(event);
}
window.addEventListener('scroll', handleScroll);
function enableMenu(event) {
    if (event instanceof MouseEvent) {
        console.log(event.pageX);
    }
    if (event instanceof TouchEvent) {
        console.log(event.touches[0].pageX);
    }
}
document.documentElement.addEventListener('mousedown', enableMenu);
document.documentElement.addEventListener('touchstart', enableMenu);
window.addEventListener('keydown', enableMenu);
