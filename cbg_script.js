var backgrounds = [
    "linear-gradient(to bottom right, #FFD700, #FF1493)",
    "linear-gradient(to bottom right, #87CEEB, #00FF00)",
    "linear-gradient(to bottom right, #800080, #FF8C00)"
];

var currentBackgroundIndex = 0;
var backgroundContainer = document.querySelector('.background-container');

document.getElementById('nextButton').addEventListener('click', function() {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    updateBackground();
});

document.getElementById('prevButton').addEventListener('click', function() {
    currentBackgroundIndex = (currentBackgroundIndex - 1 + backgrounds.length) % backgrounds.length;
    updateBackground();
});

function updateBackground() {
    backgroundContainer.style.background = backgrounds[currentBackgroundIndex];
}
