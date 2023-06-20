document.addEventListener("DOMContentLoaded", function () {
  var carouselImages = document.querySelectorAll(".carousel-image");
  var currentImageIndex = 0;

  function showImage(index) {
    carouselImages[currentImageIndex].classList.remove("highlighted");
    carouselImages[index].classList.add("highlighted");
    currentImageIndex = index;
  }

  function nextImage() {
    var newIndex = (currentImageIndex + 1) % carouselImages.length;
    showImage(newIndex);
  }

  function previousImage() {
    var newIndex =
      (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
    showImage(newIndex);
  }

  var prevButton = document.querySelector(".prev");
  var nextButton = document.querySelector(".next");

  prevButton.addEventListener("click", function () {
    previousImage();
  });

  nextButton.addEventListener("click", function () {
    nextImage();
  });

  function toggleMenu() {
    var navbarButtons = document.querySelector(".navbar-buttons");
    navbarButtons.classList.toggle("show-menu");
  }

  var hamButton = document.querySelector("#hamburger-button");

  hamButton.addEventListener("click", function () {
    toggleMenu();
  });
});
