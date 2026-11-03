//galeria

const popup = document.getElementById("image-popup");
const zoomedImg = document.getElementById("zoomed-img");
const closeBtn = document.querySelector(".close-btn");
const galleryImages = document.querySelectorAll(".gallery-img");

galleryImages.forEach(img => {
    img.addEventListener("click", function() {
        popup.style.display = "flex";
        zoomedImg.src = this.src;
    });
});

closeBtn.addEventListener("click", function() {
    popup.style.display = "none";
});

popup.addEventListener("click", function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});

//menu hamburger

const hamburgerBtn = document.querySelector(".hamburger-btn");
const navLinks = document.querySelector(".nav-links");

hamburgerBtn.addEventListener("click", function() {
    navLinks.classList.toggle("show-menu");
});

//tryb ciemny

const themeBtn = document.querySelector(".theme-btn");

if (themeBtn) {
    themeBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        
        if (document.body.classList.contains("dark-mode")) {
            themeBtn.textContent = "Tryb Jasny";
        } else {
            themeBtn.textContent = "Tryb Ciemny";
        }
    });
}