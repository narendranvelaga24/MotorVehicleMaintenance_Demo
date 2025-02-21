// Sample User Data (for demonstration purposes)
const users = [
    { email: "user1@example.com", password: "password1" },
    { email: "user2@example.com", password: "password2" }
];

// Function to Handle Login Form Submission
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Check if the user exists
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // Redirect to the homepage or dashboard after successful login
        alert("Login successful! Redirecting to the homepage...");
        window.location.href = "/index.html";
    } else {
        // Display error message for invalid credentials
        errorMessage.textContent = "Invalid email or password. Please try again.";
    }
});