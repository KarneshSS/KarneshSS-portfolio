/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}


/* =========================================
   CLOSE MOBILE MENU
========================================= */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach((link) => {

        link.classList.remove("active");

        const target = link.getAttribute("href");

        if (target === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".service-card, .project-card, .stat-card, .achievement, .skills-container span"
);

revealElements.forEach((element) => {

    element.classList.add("reveal");

});


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================
   HERO 3D MOUSE EFFECT
========================================= */

const heroVisual = document.querySelector(".hero-visual");
const codeCard = document.querySelector(".code-card");

if (heroVisual && codeCard) {

    heroVisual.addEventListener("mousemove", (event) => {

        const rect = heroVisual.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) /
            rect.width -
            0.5;

        const y =
            (event.clientY - rect.top) /
            rect.height -
            0.5;


        codeCard.style.transform = `
            perspective(1000px)
            rotateY(${x * 8}deg)
            rotateX(${-y * 8}deg)
        `;

    });


    heroVisual.addEventListener("mouseleave", () => {

        codeCard.style.transform = `
            perspective(1000px)
            rotateY(0deg)
            rotateX(0deg)
        `;

    });

}


/* =========================================
   CURRENT YEAR
========================================= */

const currentYear = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {

    footerText.textContent =
        `© ${currentYear} Karnesh S S. Built with curiosity & code.`;

}
