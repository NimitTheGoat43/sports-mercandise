document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navbar Links
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]'); 
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Smooth Scrolling for Category Buttons
    const categoryButtons = document.querySelectorAll('.categories button'); 
    categoryButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});