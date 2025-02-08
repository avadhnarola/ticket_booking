let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".slide");
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    document.querySelector(".slider").style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Automatically change slide every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);

function openMenu() {
    document.getElementById("sidebarMenu").style.width = "250px";
}

function closeMenu() {
    document.getElementById("sidebarMenu").style.width = "0";
}
