// Newsletter Form Submission
document.getElementById('newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('newsletter-message');

    if (email) {
        message.textContent = `Thank you for subscribing with ${email}!`;
        message.style.color = '#ffcc00';
        document.getElementById('email').value = ''; // Clear input field
    } else {
        message.textContent = 'Please enter a valid email address.';
        message.style.color = 'red';
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});