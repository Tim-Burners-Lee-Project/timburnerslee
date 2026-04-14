let slideIndex = 0;

function nextSlide() {
    let slides = document.querySelectorAll(".slide");
    
    slides[slideIndex].classList.remove("active");
    
    slideIndex = (slideIndex + 1) % slides.length;
    
    slides[slideIndex].classList.add("active");
}
