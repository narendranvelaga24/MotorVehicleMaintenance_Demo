// Function to Display Booking Details
function displayBookingDetails() {
    const bookingDetails = document.getElementById("booking-details");

    // Retrieve booking details from localStorage or URL parameters
    const service = localStorage.getItem("service") || "Selected Service";
    const date = localStorage.getItem("date") || "Chosen Date";
    const time = localStorage.getItem("time") || "Chosen Time";
    const paymentMethod = "Cash on Delivery"; // Default payment method

    // Populate the booking details
    bookingDetails.innerHTML = `
        <li><strong>Service:</strong> ${service}</li>
        <li><strong>Date:</strong> ${date}</li>
        <li><strong>Time:</strong> ${time}</li>
        <li><strong>Payment Method:</strong> ${paymentMethod}</li>
    `;
}

// Load Booking Details on Page Load
window.onload = displayBookingDetails;