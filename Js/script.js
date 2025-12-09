document.getElementById("toggleBtn").addEventListener("click", function () {
    const hiddenImages = document.querySelectorAll(".hidden-img");

    hiddenImages.forEach(img => {
        img.classList.toggle("d-none");
    });

    // Button text change
    if (this.innerText === "Show More") {
        this.innerText = "Show Less";
    } else {
        this.innerText = "Show More";
    }
});

// current time
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('time').textContent = timeString;
}
setInterval(updateTime, 1000);

updateTime();

// Contact Form Submission with Validation
function contactForm() {
    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation
    if (!name || !email || !subject || !message) {
        showErrorAlert("All fields are required!");
        return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showErrorAlert("Please enter a valid email address!");
        return false;
    }

    // If validation passes
    showSuccessAlert("Message sent successfully!");
    
    // Reset form
    document.getElementById("contactForm").reset();
    
    return false;
}

// Success Alert
function showSuccessAlert(message) {
    alert("✓ Success\n\n" + message);
}

// Error Alert
function showErrorAlert(message) {
    alert("✗ Error\n\n" + message);
}