document.addEventListener("DOMContentLoaded", function () {
  const imageGalleryData = [
    {
      src: "assets/Africa/curious-meerkat.webp",
      alt: "A curious Meerkat standing upright on a rock, attentively surveying its surroundings",
    },
    {
      src: "assets/Antarctica/emperor-penguin-family-antarctic.webp",
      alt: "Fluffy Emperor Penguin chicks standing near their parents in the snowy expanse of Antarctica",
    },
    {
      src: "assets/Asia/sleeping-red-panda.webp",
      alt: "A Red Panda curled up on a branch, sleeping peacefully with its reddish-brown fur glowing in the sunlight",
    },
    {
      src: "assets/Australasia/yawning-koala.webp",
      alt: "A sleepy Koala perched in a eucalyptus tree, mid-yawn, surrounded by dense green leaves",
    },
    {
      src: "assets/Europe/hedhog-resting-in-a-feild-of-clover.webp",
      alt: "A small Hedgehog curled into a tight ball, resting on a bed of clover with its quills fully raised",
    },
    {
      src: "assets/North-America/adorable-and-playful-racoon.webp",
      alt: "A playful Raccoon with black and white facial markings, sticking its tongue out in a cheeky expression",
    },
    {
      src: "assets/South-America/capybara-blissfully-relaxing.webp",
      alt: "A calm Capybara lying on green grass near the water’s edge, basking in the warmth of the sun",
    },
  ];

  const imageContainer = document.getElementById("imageContainer");
  const sections = document.querySelectorAll("main section");
  const homeButton = document.getElementById("homeButton");
  let currentIndex = 0;

  imageGalleryData.forEach((data, index) => {
    const img = document.createElement("img");
    img.setAttribute("data-src", data.src);
    img.setAttribute("alt", data.alt);
    img.setAttribute("loading", "lazy"); // Adding lazy loading in JavaScript
    img.classList.add("gallery-image");
    img.style.display = index === 0 ? "block" : "none";
    imageContainer.appendChild(img);
  });

  const images = document.querySelectorAll(".gallery-image");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  function loadImage(img) {
    const src = img.getAttribute("data-src");
    if (src) {
      img.src = src;
      img.removeAttribute("data-src");
    }
  }

  function updateGallery() {
    images.forEach((img, index) => {
      if (index === currentIndex) {
        loadImage(img);
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });
  }

  images.forEach((img, index) => {
    img.addEventListener("click", function () {
      sections[index].scrollIntoView({ behavior: "smooth" });
    });
  });

  homeButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  prevButton.addEventListener("click", function () {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    updateGallery();
  });

  nextButton.addEventListener("click", function () {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    updateGallery();
  });

  prevButton.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      prevButton.click();
    }
  });

  nextButton.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      nextButton.click();
    }
  });

  prevButton.setAttribute("tabindex", "0");
  nextButton.setAttribute("tabindex", "0");

  updateGallery();
});
