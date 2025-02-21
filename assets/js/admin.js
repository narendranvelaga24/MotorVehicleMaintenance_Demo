// Sample Booking Data (for demonstration purposes)
const bookings = [
    {
        id: "001",
        userName: "John Doe",
        service: "Oil Change",
        date: "2025-02-20",
        time: "10:00 AM",
        status: "Pending"
    },
    {
        id: "002",
        userName: "Jane Smith",
        service: "Brake Repair",
        date: "2025-03-15",
        time: "02:00 PM",
        status: "In Progress"
    },
    {
        id: "003",
        userName: "Alice Johnson",
        service: "Tire Rotation",
        date: "2025-04-10",
        time: "11:30 AM",
        status: "Completed"
    }
];

// Function to Display Bookings
function displayBookings() {
    const bookingTableBody = document.getElementById("booking-table-body");

    bookings.forEach(booking => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${booking.id}</td>
            <td>${booking.userName}</td>
            <td>${booking.service}</td>
            <td>${booking.date}</td>
            <td>${booking.time}</td>
            <td>${booking.status}</td>
            <td>
                <select id="status-${booking.id}">
                    <option value="pending" ${booking.status === "Pending" ? "selected" : ""}>Pending</option>
                    <option value="in-progress" ${booking.status === "In Progress" ? "selected" : ""}>In Progress</option>
                    <option value="completed" ${booking.status === "Completed" ? "selected" : ""}>Completed</option>
                </select>
                <button onclick="updateStatus('${booking.id}')">Update</button>
            </td>
        `;

        bookingTableBody.appendChild(row);
    });
}

// Function to Update Booking Status
function updateStatus(bookingId) {
    const statusSelect = document.getElementById(`status-${bookingId}`);
    const newStatus = statusSelect.value;

    // Find the booking in the array and update its status
    const booking = bookings.find(booking => booking.id === bookingId);
    if (booking) {
        booking.status = newStatus.charAt(0).toUpperCase() + newStatus.slice(1); // Capitalize status
        alert(`Status updated to ${booking.status} for Booking ID ${bookingId}`);
    }
}

// Load Bookings on Page Load
window.onload = displayBookings;