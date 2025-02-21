// Sample Data for Services
const services = [
    { name: "Oil Change", price: 50 },
    { name: "Brake Repair", price: 70 },
    { name: "Tire Rotation", price: 30 },
    { name: "Engine Tune-Up", price: 90 },
    { name: "Battery Replacement", price: 120 }
];

// Function to Populate Service Options
function populateServices() {
    const serviceSelect = document.getElementById("service");
    services.forEach(service => {
        const option = document.createElement("option");
        option.value = service.name;
        option.textContent = `${service.name} - $${service.price}`;
        serviceSelect.appendChild(option);
    });
}

// Function to Handle Form Submission
document.getElementById("booking-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Display Confirmation Message
    const confirmationMessage = document.getElementById("confirmation-message");
    confirmationMessage.textContent = `Thank you, ${name}! Your booking for ${service} on ${date} at ${time} has been confirmed. A confirmation email has been sent to ${email}.`;

    // Clear Form Fields
    document.getElementById("booking-form").reset();
});

// Populate Services on Page Load
window.onload = populateServices;