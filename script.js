function updateDaysOnly() {
    const startDate = new Date("2024-07-27T00:00:00");
    const now = new Date();

    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("days-only").textContent = `${days} days!!!`;
}

updateDaysOnly();

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

function calculateDaysTogether() {
    let startDate = new Date('2024-07-27'); // Change this to your actual anniversary date
    let today = new Date();
    let difference = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    document.getElementById('daysCount').innerText = difference;
}


function showSection(sectionId) {
    // Hide all sections
    let sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';

    // Music player only visible on "home"
    const musicPlayer = document.getElementById("music-player");
    if (sectionId === "home") {
      musicPlayer.style.display = "block";
    } else {
      musicPlayer.style.display = "none";
    }
}

function updateLoveTimer() {
    const startDate = new Date("2024-07-27T00:00:00");
    const now = new Date();
    const diff = now - startDate;

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("time-together").textContent =
        `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Update every second
setInterval(updateLoveTimer, 1000);
updateLoveTimer(); // Call once on load
  

  