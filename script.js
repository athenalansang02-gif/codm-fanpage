// Greeting
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) greeting.innerText = "Good Morning, Soldier!";
else if (hour < 18) greeting.innerText = "Good Afternoon, Warrior!";
else greeting.innerText = "Good Evening, Operator!";

// Fun Fact Toggle
document.getElementById("btnToggle").addEventListener("click", function() {
    const fact = document.getElementById("fact");
    fact.style.display = fact.style.display === "none" ? "block" : "none";
});

// Simple Form Validation
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        document.getElementById("formMessage").innerText = "Please fill in all fields.";
        document.getElementById("formMessage").style.color = "red";
    } else {
        document.getElementById("formMessage").innerText = "Message Sent! 💥";
        document.getElementById("formMessage").style.color = "lightgreen";
    }
});
