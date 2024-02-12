document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if(validateForm()) {
        window.location.href = "login.html";
    }
});

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    if (name === '') {
        nameError.textContent = 'Name is required';
        return false;
    }

    if (email === '') {
        emailError.textContent = 'Email is required';
        return false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = 'Please enter a valid email address';
        return false;
    }

    if (password === '') {
        passwordError.textContent = 'Password is required';
        return false;
    } else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        return false;
    }

    return true;
}

function isValidEmail(email) {
    // Very basic email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
