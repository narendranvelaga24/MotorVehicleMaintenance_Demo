// Sample Data for Services (Prices in INR)
const services = [
    {
        name: "Oil Change",
        description: "Regular oil change to keep your engine running smoothly.",
        price: 3000
    },
    {
        name: "Brake Repair",
        description: "Inspection and repair of brake systems for safety.",
        price: 5000
    },
    {
        name: "Tire Rotation",
        description: "Rotate tires to ensure even wear and longer lifespan.",
        price: 1500
    },
    {
        name: "Engine Tune-Up",
        description: "Comprehensive engine check-up and maintenance.",
        price: 7000
    },
    {
        name: "Battery Replacement",
        description: "Replace old or faulty batteries with new ones.",
        price: 8000
    },
    {
        name: "AC Service",
        description: "AC system recharge and maintenance.",
        price: 2500
    },
    {
        name: "Car Wash",
        description: "Exterior cleaning and waxing for a shiny look.",
        price: 1000
    },
    {
        name: "Wheel Alignment",
        description: "Adjust wheel angles for better handling.",
        price: 2000
    },
    {
        name: "Headlight Restoration",
        description: "Restore foggy headlights for better visibility.",
        price: 1200
    }
];

// Function to Display Services
function displayServices() {
    const serviceList = document.getElementById("service-list");

    services.forEach(service => {
        const serviceCard = document.createElement("div");
        serviceCard.classList.add("service-card");

        serviceCard.innerHTML = `
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <p><strong>Price:</strong> ₹${service.price}</p>
            <button onclick="bookService('${service.name}')">Book Now</button>
        `;

        serviceList.appendChild(serviceCard);
    });
}

// Function to Handle Booking
function bookService(serviceName) {
    alert(`You have booked ${serviceName}. Redirecting to booking page...`);
    // Redirect to booking page or perform other actions
}

// Load Services on Page Load
window.onload = displayServices;

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