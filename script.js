// Function to start the countdown
function startCountdown() {
    let countdownElement = document.getElementById('countdown');
    let messageElement = document.getElementById('message');
    let timeLeft = 20; // 20 seconds countdown

    countdownElement.textContent = `Countdown: ${timeLeft}`;
    messageElement.textContent = '';

    let countdownTimer = setInterval(() => {
        timeLeft -= 1;
        countdownElement.textContent = `Countdown: ${timeLeft}`;

        if (timeLeft <= 0) {
            clearInterval(countdownTimer);
            countdownElement.textContent = '';
            messageElement.textContent = "Happy Birthday, Saayella!";
            playSound();
        }
    }, 1000); // Update every second
}

// Function to play the birthday song
function playSound() {
    const audio = new Audio('happy_birthday_song.mp3'); // Ensure the music file is named correctly and in the same directory
    audio.play().catch(function(error) {
        console.error('Error playing audio:', error);
    });
}

// Start the countdown automatically when the page loads
window.onload = startCountdown;
