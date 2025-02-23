let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".slides");
    const totalSlides = slides.length;
    currentSlide = (currentSlide + step + totalSlides) % totalSlides;
    
    document.querySelector(".sliderImage").style.transform = `translateX(-${currentSlide * 100}%)`;
}
setInterval(() => {
    moveSlide(1);
}, 5000);


function openMenu() {
    document.getElementById("sidebarMenu").style.width = "250px";
}

function closeMenu() {
    document.getElementById("sidebarMenu").style.width = "0";
}

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
}

{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script> */}