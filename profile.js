// Validation for Profile Edit
function validateProfile() {
    const name = document.getElementById('profileName').value;
    const email = document.getElementById('profileEmail').value;
    const password = document.getElementById('profilePassword').value;

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Reset errors
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    // Name validation (only characters and spaces)
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
        nameError.textContent = 'Name can only contain letters and spaces.';
        return false;
    }

    // Email validation (accepts all email formats)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        return false;
    }

    // Password validation (minimum 6 characters, must contain at least one uppercase, one lowercase letter, and one number)
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordPattern.test(password)) {
        passwordError.textContent = 'Password must be at least 6 characters, contain one uppercase letter, one lowercase letter, and one number.';
        return false;
    }

    return true; // Validation passed
}
