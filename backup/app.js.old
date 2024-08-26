document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".gallery-image");
  let currentIndex = 0;

  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  // Function to update the image display
  function updateGallery() {
    images.forEach((img, index) => {
      img.style.display = index === currentIndex ? "block" : "none";
    });
  }

  // Show the previous image
  prevButton.addEventListener("click", function () {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    updateGallery();
  });

  // Show the next image
  nextButton.addEventListener("click", function () {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    updateGallery();
  });

  // Initialize the gallery display
  updateGallery();
});
