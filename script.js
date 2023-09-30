const colors = ['red', 'green', 'yellow', 'purple', 'pink'];
let currentIndex = 0;
let isAudioPlaying = false;
let colorChangeInterval;

function changeBackgroundColorSmooth() {
    const resume = document.querySelector('.main_container');
    const nextColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;

    // Set the next color with a transition
    resume.style.transition = 'background-color 1s ease-in-out';
    resume.style.backgroundColor = nextColor;
}

function startColorChangeInterval() {
    colorChangeInterval = setInterval(() => {
        changeBackgroundColorSmooth();
    }, 500); // Change colors every 2 seconds (2000 milliseconds)
}

function stopColorChangeInterval() {
    clearInterval(colorChangeInterval);
}

const imageContainer = document.querySelector('.image-container');
const audio = document.getElementById('audio');

imageContainer.addEventListener('click', () => {
    // Start automatic color change
    startColorChangeInterval();
    if (!isAudioPlaying) {
        // Play the audio
        audio.loop = true; // Loop the audio
        audio.play().catch(error => {
            // Handle any playback errors
            console.error('Audio playback error:', error);
        });
        isAudioPlaying = true;

        
    } 
    // Hide the "Click me" text
    const clickMeText = document.querySelector('.click-me');
    clickMeText.style.display = 'none';
});
