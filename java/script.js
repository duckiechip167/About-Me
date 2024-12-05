let text = document.getElementById('text');
let hill1= document.getElementById('1');
let hill2 = document.getElementById('2');
let hill3 = document.getElementById('3');
let hill4 = document.getElementById('4');
let hill5 = document.getElementById('5');
let plant = document.getElementById('plant');
let leaf1 = document.getElementById('leaf1');
let leaf2 = document.getElementById('leaf2');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    let maxScroll = window.innerHeight;

    text.style.marginTop = Math.min(value * 2.5, maxScroll) + 'px';
    hill5.style.left = Math.min(value * 1.5, maxScroll) + 'px';
    hill4.style.left = Math.min(value * -1.5, maxScroll) + 'px';
    hill1.style.top = Math.min(value * 1, maxScroll) + 'px';
    hill2.style.top = Math.min(value * 0.5, maxScroll) + 'px';
    hill3.style.top = Math.min(value * 0.25, maxScroll) + 'px';
    leaf1.style.left = Math.min(value * 1.5, maxScroll) + 'px';
    leaf2.style.left = Math.min(value * -1.5, maxScroll) + 'px';
});