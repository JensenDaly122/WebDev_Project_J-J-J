document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for validation

    let isValid = true;

    document.querySelectorAll(".error").forEach((errorSpan) => {
        errorSpan.textContent = "";
    });

    const username = document.getElementById("username");
    if (!username.value.trim()) {
        document.getElementById("username-error").textContent = "Username is required.";
        isValid = false;
    }

    const email = document.getElementById("email");
    if (!email.value.trim()) {
        document.getElementById("email-error").textContent = "Email is required.";
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        document.getElementById("email-error").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    const phone = document.getElementById("phone");
    if (!phone.value.trim()) {
        document.getElementById("phone-error").textContent = "Phone number is required.";
        isValid = false;
    } else if (!/^\d{10}$/.test(phone.value)) {
        document.getElementById("phone-error").textContent = "Please enter a valid 10-digit phone number.";
        isValid = false;
    }

    const message = document.getElementById("message");
    if (!message.value.trim()) {
        document.getElementById("message-error").textContent = "Message cannot be empty.";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
});
