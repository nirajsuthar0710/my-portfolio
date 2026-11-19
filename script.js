
// =====================================
// 1. MOBILE NAVIGATION
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu after clicking a navigation link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    const clickedInsideMenu =
      navLinks.contains(event.target) ||
      menuToggle.contains(event.target);

    if (!clickedInsideMenu) {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Close menu with Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}


// =====================================
// 2. AUTOMATIC FOOTER YEAR
// =====================================

const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}


// =====================================
// 3. ROTATING HERO TEXT
// =====================================

const changingText = document.getElementById("changingText");

const phrases = [
  "modern websites.",
  "creative projects.",
  "digital experiences.",
  "new possibilities."
];

let phraseIndex = 0;

const prefersReducedMotion =
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (changingText && !prefersReducedMotion) {
  setInterval(() => {
    phraseIndex = (phraseIndex + 1) % phrases.length;

    changingText.style.opacity = "0";

    setTimeout(() => {
      changingText.textContent = phrases[phraseIndex];
      changingText.style.opacity = "1";
    }, 300);

  }, 2500);
}


// =====================================
// 4. SCROLL REVEAL ANIMATION
// =====================================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && !prefersReducedMotion) {

  const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        observer.unobserve(entry.target);
      }

    });

  }, {
    threshold: 0.12
  });

  revealElements.forEach((element) => {
    observer.observe(element);
  });

} else {

  revealElements.forEach((element) => {
    element.classList.add("visible");
  });

}


// =====================================
// 5. SMOOTH BACK TO TOP
// =====================================

const backTop = document.querySelector(".back-top");

if (backTop) {
  backTop.addEventListener("click", (event) => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
  });
}


// =====================================
// 6. PROJECT LINK SAFETY
// =====================================

document.querySelectorAll(".project-link").forEach((link) => {
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});


// =====================================
// PORTFOLIO JAVASCRIPT READY
// =====================================

console.log("Neeraj Suthar Portfolio Loaded Successfully!");
