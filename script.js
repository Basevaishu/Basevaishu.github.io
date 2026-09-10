/* =========================================
   MV TECHNOLOGIES JAVASCRIPT
========================================= */


/* =========================================
   CURRENT YEAR
========================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================================
   CONTACT FORM
========================================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const business =
        document.getElementById("business").value.trim();

    const service =
        document.getElementById("service").value;

    const message =
        document.getElementById("message").value.trim();


    const subject =
        encodeURIComponent(
            "New Website Enquiry - " + name
        );


    const body =
        encodeURIComponent(

            "Hello MV Technologies,\n\n" +

            "I would like to discuss a project.\n\n" +

            "Name: " + name + "\n" +

            "Email: " + email + "\n" +

            "Phone: " + phone + "\n" +

            "Business: " + business + "\n" +

            "Service: " + service + "\n\n" +

            "Project Details:\n" +

            message + "\n\n" +

            "Thank you."

        );


    window.location.href =
        "mailto:nunsavathmallesh999@gmail.com" +
        "?subject=" +
        subject +
        "&body=" +
        body;

});


/* =========================================
   MOBILE MENU
========================================= */

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const navMenu =
    document.querySelector(".nav-menu");


mobileMenuBtn.addEventListener("click", function () {

    if (navMenu.style.display === "flex") {

        navMenu.style.display = "none";

    } else {

        navMenu.style.display = "flex";

        navMenu.style.position = "absolute";

        navMenu.style.top = "68px";

        navMenu.style.left = "0";

        navMenu.style.width = "100%";

        navMenu.style.background = "#061120";

        navMenu.style.padding = "20px";

        navMenu.style.flexDirection = "column";

        navMenu.style.alignItems = "flex-start";

        navMenu.style.borderBottom =
            "1px solid #1b3048";

    }

});


/* =========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================= */

document.querySelectorAll(".nav-menu a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            if (window.innerWidth <= 800) {
                navMenu.style.display = "none";
            }

        });

    });


/* =========================================
   SCROLL REVEAL
========================================= */

const elements =
    document.querySelectorAll(
        ".about-card, .service-card, .process-card, .technology, .project-card, .pricing-card"
    );


elements.forEach(function (element) {

    element.classList.add("reveal");

});


function revealElements() {

    elements.forEach(function (element) {

        const position =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (position < windowHeight - 80) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealElements
);

revealElements();


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

window.addEventListener("scroll", function () {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 40) {

        navbar.style.background =
            "rgba(2, 9, 20, 0.95)";

    } else {

        navbar.style.background =
            "rgba(3, 11, 22, 0.82)";

    }

});
