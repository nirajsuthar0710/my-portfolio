
// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Automatic footer year
document.getElementById("currentYear").textContent =
  new Date().getFullYear();

// Rotating hero text
const changingText = document.getElementById("changingText");

const phrases = [
  "modern websites.",
  "creative projects.",
  "digital experiences.",
  "new possibilities."
];

let phraseIndex = 0;

setInterval(() => {
  phraseIndex = (phraseIndex + 1) % phrases.length;
  changingText.style.opacity = "0";

  setTimeout(() => {
    changingText.textContent = phrases[phraseIndex];
    changingText.style.opacity = "1";
  }, 250);
}, 2500);

// Scroll reveal animation
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

