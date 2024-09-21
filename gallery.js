let currentIndex = 0; // This keeps track of the currently displayed image index
let thumbnails = document.querySelectorAll(".thumbnail"); // Select all elements with the class 'thumbnail'

function openExtendedView(index) {
  const thumbnail = thumbnails[index]; // Get the thumbnail element at the given index
  const img = thumbnail.querySelector("img"); // Find the image within the thumbnail
  const imgSrc = img.src; // Get the source URL of the image
  const imgTitle = thumbnail.querySelector(".title").textContent; // Get the title of the image
  const imgDescription =
    thumbnail.querySelector(".image-description").textContent; // Get the description of the image

  // Update the extended view with the image source, title, and description
  document.getElementById("extendedImage").src = imgSrc;
  document.getElementById("extendedDescription").textContent = imgDescription;
  document.getElementById("extendedTitle").textContent = imgTitle;
  document.getElementById("extendedView").style.display = "flex"; // Show the extended view

  currentIndex = index; // Set the current index to the new index
}

// Add click event listeners to each thumbnail
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    openExtendedView(index); // Open the extended view when a thumbnail is clicked
  });
});

function closeExtendedView() {
  document.getElementById("extendedView").style.display = "none"; // Hide the extended view
}

function customizeColor() {
  const color = document.getElementById("colorPicker").value; // Get the selected color value
  document.getElementById("extendedView").style.backgroundColor = color; // Change the background color of the extended view
}

function customizeFont() {
  const font = document.getElementById("fontPicker").value; // Get the selected font value
  // Change the font family of the title and description in the extended view
  document.getElementById("extendedTitle").style.fontFamily = font;
  document.getElementById("extendedDescription").style.fontFamily = font;
}

function previousImage() {
  let newIndex = currentIndex - 1; // Calculate the index of the previous image
  if (newIndex < 0) {
    newIndex = thumbnails.length - 1; // Wrap around to the last image if at the beginning
  }
  openExtendedView(newIndex); // Open the previous image in the extended view
}

function nextImage() {
  let newIndex = currentIndex + 1; // Calculate the index of the next image
  if (newIndex >= thumbnails.length) {
    newIndex = 0; // Wrap around to the first image if at the end
  }
  openExtendedView(newIndex); // Open the next image in the extended view
}
