
document.addEventListener("DOMContentLoaded", function () {
    // Automatically update the footer year
    const yearElement = document.getElementById("current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Highlight the active navigation link
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    function updateActiveLink() {
        let currentSection = "home";

        sections.forEach(function (section) {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop <= 150) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(function (link) {
            if (link.getAttribute("href") === "#" + currentSection) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink, {
        passive: true
    });

    window.addEventListener("resize", updateActiveLink);

    updateActiveLink();
});
