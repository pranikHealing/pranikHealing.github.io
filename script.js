function toggleNavbar() {
    var navbar = document.getElementById("navbar");
    if (navbar.style.display === "none") {
        navbar.style.display = "block";
    } else {
        navbar.style.display = "none";
    }
}
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const slideCount = slides.length;

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slideCount) % slideCount;
    slides[currentSlide].style.display = 'block';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds


// Define an array of gradient classes
var gradients = ['gradient1', 'gradient2', 'gradient3', 'gradient4', 'gradient5', 'gradient6', 'gradient7'];
var currentIndex = 0;

// Toggle gradients at regular intervals
setInterval(function() {
  toggleGradients();
}, 2000); // Change the interval as needed (in milliseconds)

function toggleGradients() {
  var sections = document.querySelectorAll('.section');

  sections.forEach(function(section) {
    section.classList.remove(gradients[currentIndex]);
    currentIndex = (currentIndex + 1) % gradients.length;
    section.classList.add(gradients[currentIndex]);
  });
}