// Dhara Shopping Mall Website

document.addEventListener("DOMContentLoaded", function () {

    console.log("Welcome to Dhara Shopping Mall!");

    // Smooth navigation to website sections
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            console.log("Navigating to: " + link.textContent);
        });
    });

});