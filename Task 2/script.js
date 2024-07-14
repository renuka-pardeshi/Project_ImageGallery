// Function to open the modal
function openModal() {
    document.getElementById("myModal").style.display = "flex";
}

// Function to close the modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Initialize the slide index to 1
let slideIndex = 1;
// Call the showSlides function with the initial slide index
showSlides(slideIndex);

// Function to navigate to the next or previous slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to navigate to the specific slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to show the slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    // Check if the slide index is out of bounds
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

// Add event listeners to the image elements
document.querySelectorAll('.slides img').forEach((img, index) => {
    img.addEventListener('click', () => {
        openModal();
        currentSlide(index + 1);
    });
});