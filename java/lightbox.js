const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const thumbnails = document.querySelectorAll('.thumbnail');
let currentIndex;
let leaf1 = document.getElementById('leaf1');
let leaf2 = document.getElementById('leaf2');

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = thumbnail.src; 
      currentIndex = index;  
    });
});

document.querySelector('.close').addEventListener('click', () => {
    lightbox.style.display = 'none';
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : thumbnails.length - 1;
    lightboxImg.src = thumbnails[currentIndex].src;
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex < thumbnails.length - 1) ? currentIndex + 1 : 0;
    lightboxImg.src = thumbnails[currentIndex].src; 
});

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    let maxScroll = window.innerHeight;

    leaf1.style.left = Math.min(value * 1.5, maxScroll) + 'px';
    leaf2.style.left = Math.min(value * -1.5, maxScroll) + 'px';
});
