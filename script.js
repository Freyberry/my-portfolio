const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

const editJobBtn = document.getElementById("editJobBtn");
const jobTitle = document.getElementById("jobTitle");

editJobBtn.addEventListener("click", () => {
    const newTitle = prompt("Enter new job title:");
    if (newTitle) {
        jobTitle.textContent = newTitle;
    }
});

const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
const skillsSection = document.getElementById("skillsSection");

toggleSkillsBtn.addEventListener("click", () => {
    const isHidden = skillsSection.style.display === "none";

    if (isHidden) {
        skillsSection.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills";
    } else {
        skillsSection.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills";
    }
});

const msgBox = document.getElementById("msgBox");
const counter = document.getElementById("counter");

msgBox.addEventListener("keyup", () => {
    const remaining = 200 - msgBox.value.length;
    counter.textContent = remaining;
});

function validateForm() {
    const name = document.getElementById("nameField").value.trim();
    const email = document.getElementById("emailField").value.trim();

    if (name === "" || email === "") {
        alert("Please fill in both Name and Email.");
        return false;
    }

    return true;
}

const dateDisplay = document.getElementById("dateDisplay");
const today = new Date().toDateString();
dateDisplay.textContent = "Today is: " + today;

// Greeting
const greeting = document.createElement("h3");
greeting.style.color = "white";  // <-- make text white
const hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent = "Good Morning";
} else if (hour < 18) {
    greeting.textContent = "Good Afternoon";
} else {
    greeting.textContent = "Good Evening";
}

document.body.prepend(greeting);
