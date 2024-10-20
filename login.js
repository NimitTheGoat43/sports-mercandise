const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// Validation for Sign Up
function validateSignup() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

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

    // Password validation (minimum 6 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character)
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if (!passwordPattern.test(password)) {
        passwordError.textContent = 'Password must be at least 6 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character.';
        return false;
    }

    return true; // Validation passed
}

// Validation for Sign In
function validateSignin() {
    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signinPassword').value;

    const emailError = document.getElementById('signinEmailError');
    const passwordError = document.getElementById('signinPasswordError');

    // Reset errors
    emailError.textContent = '';
    passwordError.textContent = '';

    // Email validation (accepts all email formats)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        return false;
    }

    // Password validation (minimum 6 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character)
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if (!passwordPattern.test(password)) {
        passwordError.textContent = 'Password must be at least 6 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character.';
        return false;
    }

    return true; // Validation passed
}
