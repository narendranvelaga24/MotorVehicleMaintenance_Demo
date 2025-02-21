// Sample Data for Services
const services = [
    {
        name: "Oil Change",
        description: "Regular oil change to keep your engine running smoothly.",
        price: 50
    },
    {
        name: "Brake Repair",
        description: "Inspection and repair of brake systems for safety.",
        price: 70
    },
    {
        name: "Tire Rotation",
        description: "Rotate tires to ensure even wear and longer lifespan.",
        price: 30
    },
    {
        name: "Engine Tune-Up",
        description: "Comprehensive engine check-up and maintenance.",
        price: 90
    },
    {
        name: "Battery Replacement",
        description: "Replace old or faulty batteries with new ones.",
        price: 120
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
            <p><strong>Price:</strong> $${service.price}</p>
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