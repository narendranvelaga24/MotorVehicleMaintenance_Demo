// Function to Handle Sign Up Form Submission
document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorMessage = document.getElementById("error-message");

    // Clear previous error messages
    errorMessage.textContent = "";

    // Validate Password Match
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match. Please try again.";
        return;
    }

    // Validate Password Strength (optional)
    if (password.length < 8) {
        errorMessage.textContent = "Password must be at least 8 characters long.";
        return;
    }

    // Simulate Successful Sign Up
    alert(`Thank you, ${name}! Your account has been created successfully. Redirecting to login page...`);
    window.location.href = "login.html";
});