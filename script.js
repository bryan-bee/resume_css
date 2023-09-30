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
const imageElement = document.getElementById('image');
const dialogueContainer = document.querySelector('.dialogue-container'); // Add this line
let isImage1 = true;
let isImageClicked = false;

imageContainer.addEventListener('click', () => {
    // Hide the "Click me" text
    const clickMeText = document.querySelector('.click-me');
    clickMeText.style.display = 'none';

    // Start automatic color change
    startColorChangeInterval();

    if (!isAudioPlaying) {
        // Play the audio
        audio.loop = true;
        audio.play().catch(error => {
            console.error('Audio playback error:', error);
        });
        isAudioPlaying = true;
    }

    if (isImage1) {
        imageElement.src = 'wake.jpg'; // Change to the second image
        imageElement.alt = 'Image 2'; // Update alt text if needed
    } else {
        imageElement.src = 'original.jpg'; // Change back to the first image
        imageElement.alt = 'Image 1'; // Update alt text if needed
    }
    
    isImage1 = !isImage1; // Toggle the image flag

    if (!isImageClicked) {
        imageContainer.classList.add('image-clicked'); // Add a class to trigger the animation
        isImageClicked = true;

        // Show the dialogue box and position it absolutely
        dialogueContainer.style.display = 'block';
        dialogueContainer.style.top = '100px'; // Adjust the top position as needed
        dialogueContainer.style.left = '300px'; // Adjust the left position as needed
    }
});
