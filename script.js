```javascript
// ===== Portfolio JavaScript =====

document.addEventListener("DOMContentLoaded", function () {

    // Automatically update copyright year
    const copyright = document.querySelector(".copyright");

    if (copyright) {
        copyright.innerHTML =
            `&copy; ${new Date().getFullYear()} My Portfolio. Built with care.`;
    }

    // Highlight the navigation link for the current section
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    function updateActiveLink() {
        let currentSection = "home";

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(function (link) {
            const isActive =
                link.getAttribute("href") === `#${currentSection}`;

            if (isActive) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();

});
```