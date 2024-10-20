document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form submission to validate

        const nameField = document.getElementById("contact-name");
        const emailField = document.getElementById("contact-email");
        const messageField = document.getElementById("message");

        const nameError = document.getElementById("contact-name-error");
        const emailError = document.getElementById("contact-email-error");
        const messageError = document.getElementById("message-error");

        // Clear previous errors
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        let valid = true;

        // Validate name (should contain only letters and spaces)
        if (!/^[a-zA-Z\s]+$/.test(nameField.value)) {
            nameError.textContent = "Name should contain only letters and spaces.";
            valid = false;
        }

        // Validate email (@gmail.com required)
        if (!/^[\w.-]+@gmail\.com$/.test(emailField.value)) {
            emailError.textContent = "Email must be a valid @gmail.com address.";
            valid = false;
        }

        // Validate message (cannot be empty)
        if (messageField.value.trim() === "") {
            messageError.textContent = "Message cannot be empty.";
            valid = false;
        }

        // If the form is valid, simulate successful submission
        if (valid) {
            alert("Thank you for your message! We will get back to you soon.");
            contactForm.reset(); // Clear the form
        }
    });
});