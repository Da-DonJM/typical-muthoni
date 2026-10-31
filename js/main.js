
/* =========================================
   TYPICAL MUTHONI WEBSITE
   Main JavaScript
========================================= */


/* 1. MOBILE NAVIGATION */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".site-nav");

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", function () {

            const isOpen = navigation.classList.toggle("is-open");

            menuToggle.setAttribute("aria-expanded", isOpen);

        });

        // Close menu when a navigation link is clicked

        navigation.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("is-open");

                menuToggle.setAttribute("aria-expanded", "false");

            });

        });

        // Close menu when clicking outside

        document.addEventListener("click", function (event) {

            const clickedInsideMenu = navigation.contains(event.target);
            const clickedToggle = menuToggle.contains(event.target);

            if (!clickedInsideMenu && !clickedToggle) {

                navigation.classList.remove("is-open");

                menuToggle.setAttribute("aria-expanded", "false");

            }

        });

    }


    /* 2. AUTOMATIC COPYRIGHT YEAR */

    const currentYear = document.getElementById("current-year");

    if (currentYear) {

        currentYear.textContent = new Date().getFullYear();

    }


    /* 3. ACTIVE NAVIGATION LINK */

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".site-nav a").forEach(function (link) {

        const linkPage = link.getAttribute("href").split("#")[0];

        if (linkPage === currentPage && !link.classList.contains("nav-booking")) {

            link.classList.add("active");

        }

    });


    /* 4. BOOKING FORM VALIDATION */

    const bookingForms = document.querySelectorAll(".booking-form");

    bookingForms.forEach(function (form) {

        form.addEventListener("submit", function (event) {

            if (!form.checkValidity()) {

                event.preventDefault();

                form.reportValidity();

            }

        });

    });


    /* 5. PHONE NUMBER VALIDATION */

    const phoneInputs = document.querySelectorAll(
        'input[type="tel"]'
    );

    phoneInputs.forEach(function (input) {

        input.addEventListener("input", function () {

            input.value = input.value.replace(/[^0-9+ ]/g, "");

        });

    });


    /* 6. WHATSAPP LINKS */

    const whatsappNumber = "254794895815";

    document.querySelectorAll("[data-whatsapp]").forEach(function (link) {

        link.href = `https://wa.me/${whatsappNumber}`;

        link.target = "_blank";

        link.rel = "noopener noreferrer";

    });


    /* 7. SMOOTH SCROLLING */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        });

    });


    console.log("Typical Muthoni website loaded successfully.");

});
