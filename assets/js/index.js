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
        const targetId = this.getAttribute('href');

        if (targetId.startsWith("#")) { // Only prevent default for internal links
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Hide Header on Scroll Down, Show on Scroll Up
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scroll down and past 100px
        header.classList.add('hide');
    } else {
        // Scroll up
        header.classList.remove('hide');
    }

    lastScroll = currentScroll;
});

// Smooth Page Transitions
document.querySelectorAll('a[data-transition]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const href = this.getAttribute('href'); // Get the target URL
        const transition = this.getAttribute('data-transition'); // Get the transition type

        // Add the transition class to the body
        document.body.classList.add(transition);

        // Wait for the animation to complete, then navigate to the new page
        setTimeout(() => {
            window.location.href = href;
        }, 500); // Match the duration of the CSS transition (0.5s)
    });
});

// Separate Animation for Book Now Button
document.querySelector('.btn[data-transition="zoom"]').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior
    const href = this.getAttribute('href'); // Get the target URL

    // Add the zoom-out class to the body
    document.body.classList.add('zoom-out');

    // Wait for the animation to complete, then navigate to the new page
    setTimeout(() => {
        window.location.href = href;
    }, 500); // Match the duration of the CSS transition (0.5s)
});