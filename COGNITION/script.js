const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const itemWidth = carousel.querySelector('.carousel-item').offsetWidth;
const itemsPerView = 3;
let currentIndex = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * (itemWidth + 20)}px)`;
}

function smoothScroll(target) {
    currentIndex = target;
    updateCarousel();
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        smoothScroll(currentIndex - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < carousel.children.length - itemsPerView) {
        smoothScroll(currentIndex + 1);
    }
});

// Optional: Add edge resistance
carousel.addEventListener('transitionend', () => {
    if (currentIndex === 0) {
        prevBtn.classList.add('disabled');
    } else if (currentIndex === carousel.children.length - itemsPerView) {
        nextBtn.classList.add('disabled');
    } else {
        prevBtn.classList.remove('disabled');
        nextBtn.classList.remove('disabled');
    }
});