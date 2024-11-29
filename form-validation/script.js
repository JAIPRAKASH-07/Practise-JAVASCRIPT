document.getElementById('myForm').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();
    
    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    let valid = true;

    // Validate Name
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        document.getElementById('nameError').style.display = 'block';
        valid = false;
    }

    // Validate Email
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').textContent = 'Email is invalid.';
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    }

    // Validate Password
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required.';
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    }

    // If all fields are valid, submit the form (or perform your desired action)
    if (valid) {
        alert('Form submitted successfully!');
        // Form submission logic here
        // e.g., send data to server or handle it as needed
    }
});
