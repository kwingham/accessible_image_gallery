document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".gallery-image");
  const sections = document.querySelectorAll("main section");
  const homeButton = document.getElementById("homeButton");

  // Event listener for gallery images to scroll to the main image
  images.forEach((img, index) => {
    img.addEventListener("click", function () {
      // Scroll to the corresponding main section
      sections[index].scrollIntoView({ behavior: "smooth" });
    });
  });

  // Scroll to top when home button is clicked
  homeButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // The rest of your gallery navigation code remains unchanged
  let currentIndex = 0;

  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  function updateGallery() {
    images.forEach((img, index) => {
      img.style.display = index === currentIndex ? "block" : "none";
    });
  }

  prevButton.addEventListener("click", function () {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    updateGallery();
  });

  nextButton.addEventListener("click", function () {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    updateGallery();
  });

  updateGallery();
});
