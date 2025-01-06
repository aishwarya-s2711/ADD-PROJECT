let userDetails = {};

// Utility function to validate email
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return emailPattern.test(email);
}

// Utility function to validate name
function isValidName(name) {
    const namePattern = /^[A-Za-z]+$/;
    return namePattern.test(name);
}

// Sign In functionality
document.getElementById('signInButton').addEventListener('click', function () {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (name && email && password) {
        if (!isValidName(name)) {
            alert('Name can only contain letters.');
            return;
        }
        if (!isValidEmail(email)) {
            alert('Please enter a valid email ending with @gmail.com.');
            return;
        }
        userDetails = { email, password };
        document.getElementById('sign-in').style.display = 'none';
        document.getElementById('log-in').style.display = 'block';
    } else {
        alert('Please fill in all fields.');
    }
});

// Log In functionality
document.getElementById('logInButton').addEventListener('click', function () {
    const loginEmail = document.getElementById('login-email').value.trim();
    const loginPassword = document.getElementById('login-password').value;

    if (loginEmail === userDetails.email && loginPassword === userDetails.password) {
        document.getElementById('log-in').style.display = 'none';
        document.getElementById('travel-tracker').style.display = 'block';
    } else {
        alert('Incorrect email or password.');
        document.getElementById('changePasswordOption').style.display = 'block';
    }
});

// Explore functionality
document.getElementById('exploreButton').addEventListener('click', function () {
    const searchTerm = document.getElementById('searchBar').value.trim();
    if (searchTerm) {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`, '_blank');
    }
});

// Map functionality
document.getElementById('mapButton').addEventListener('click', function () {
    window.open('https://maps.google.com', '_blank');
});

// Ticket Booking functionality
document.getElementById('bookTicketButton').addEventListener('click', function () {
    document.getElementById('ticketForm').style.display = 'block';
});

document.getElementById('submitTicket').addEventListener('click', function () {
    
    document.getElementById('ticketForm').style.display = 'none';
    document.getElementById('ticketConfirmation').style.display = 'block';
    alert('Ticket booked successfully!');
});

// Rating Submission
document.getElementById('submitRating').addEventListener('click', function () {
    alert('Thank you for your rating!');
    document.getElementById('ratingSection').style.display = 'none';
});
