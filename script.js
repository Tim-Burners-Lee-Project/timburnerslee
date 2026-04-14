let slideIndex = 0;

function showSlide(index) {
    let slides = document.querySelectorAll(".slide");

    slides.forEach(slide => slide.classList.remove("active"));

    slideIndex = (index + slides.length) % slides.length;

    slides[slideIndex].classList.add("active");
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}
