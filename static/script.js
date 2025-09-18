window.addEventListener("DOMContentLoaded", () => {
    // Get the HTML elements
    const body = document.body;
    const weatherSound = document.getElementById("weatherSound");
    const playSoundBtn = document.getElementById("playSoundBtn");

    // This part stays the same: set the correct sound source when the page loads
    if (body.classList.contains("bg-clear")) {
        weatherSound.src = "/static/sounds/clear.mp3";
    } else if (body.classList.contains("bg-clouds")) {
        weatherSound.src = "/static/sounds/clouds.mp3";
    } else if (body.classList.contains("bg-rain")) {
        weatherSound.src = "/static/sounds/rain.mp3";
    } else if (body.classList.contains("bg-snow")) {
        weatherSound.src = "/static/sounds/snow.mp3";
    }else if (body.classList.contains("bg-mist","bg-haze")){
        weatherSound.src = "/static/sounds/mist.mp3";
    }

    // --- New Logic for the Button ---
    // Add a click event listener to the button
    playSoundBtn.addEventListener('click', () => {
        // Check if the audio is currently paused
        if (weatherSound.paused) {
            // If it's paused, play it
            weatherSound.play();
            // Change the button icon to a "pause" symbol
            playSoundBtn.innerHTML = "⏸️";
        } else {
            // If it's playing, pause it
            weatherSound.pause();
            // Change the button icon back to a "play" symbol
            playSoundBtn.innerHTML = "🔊";
        }
    });
});
