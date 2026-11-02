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