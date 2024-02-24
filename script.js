const container = document.querySelector('.container');

function showSlide(index) {
    container.style.transform = `translateX(-${index * 100}%)`;
}

// Initial slide index
let currentSlide = 0;

// Show the first slide initially
showSlide(currentSlide);

// Change slide on button click
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        currentSlide = (currentSlide + 1) % 2;
        showSlide(currentSlide);
    } else if (event.key === 'ArrowLeft') {
        currentSlide = (currentSlide - 1 + 2) % 2;
        showSlide(currentSlide);
    }
});
