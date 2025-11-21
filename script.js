// Greeting
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

greeting.innerText =
    hour < 12 ? "Good Morning Soldier!" :
    hour < 18 ? "Good Afternoon Operator!" :
    "Good Evening Warrior!";


// Fun fact button
document.getElementById("factBtn").onclick = () => {
    document.getElementById("factText").innerText =
        "🔥 Did you know? CODM reached over 500 Million downloads!";
    document.getElementById("factText").classList.remove("hidden");
};


// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.onclick = () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
};


// Background music toggle
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

musicToggle.onclick = () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.textContent = "🔊";
    } else {
        bgMusic.pause();
        musicToggle.textContent = "🔇";
    }
};


// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if (!name || !email || !message) {
        formMessage.style.color = "red";
        formMessage.innerText = "⚠ Please fill out all fields.";
    } else {
        formMessage.style.color = "lightgreen";
        formMessage.innerText = "✔ Message sent! We'll contact you soon.";
    }
});
