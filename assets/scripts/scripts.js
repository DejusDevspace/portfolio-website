document.addEventListener("DOMContentLoaded", function () {
  // Get the current page URL
  const currentPage = window.location.pathname;
  // console.log(currentPage);

  // Find all the navigation links
  const navLinks = document.querySelectorAll(".sidebar a");

  // Loop through links and set active class if the href matches the current page
  navLinks.forEach((link) => {
    // console.log(link.getAttribute("href"));
    if (currentPage.length > 1) {
      if (`/${link.getAttribute("href")}` === currentPage) {
        link.classList.add("active");
      }
    } else {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    }
  });
});

// Navbar toggling
const toggleButton = document.getElementById("toggle-button");
const sidebar = document.querySelector(".sidebar");

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("active"); // Toggle the active class to show/hide the sidebar
});

// Introduction text display loop
const text = "Welcome to my Portfolio!";

// The speed of typing (in milliseconds)
const typingSpeed = 100;

const textElement = document.getElementById("intro-text");

function typeWriterEffect(text, typingSpeed) {
  let i = 0;

  // Function to display the text
  function type() {
    if (i < text.length) {
      textElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, typingSpeed); // Typing next letter
    } else {
      setTimeout(clearText, 2000); // Pause after full text is written, then clear
    }
  }

  // Function to clear the text and restart typing
  function clearText() {
    textElement.innerHTML = "";
    i = 0;
    setTimeout(type, typingSpeed); // Start typing again
  }

  type(); // Initial call to start typing
}

// Call the typewriter effect when the page loads
window.onload = function () {
  const currentPage = window.location.pathname;
  if (currentPage === "/") {
    typeWriterEffect(text, typingSpeed);
  }
};
