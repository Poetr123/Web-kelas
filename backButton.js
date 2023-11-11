document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');

    function changeColor() {
        const colors = ['#ff8adb', '#8affa5', '#a5a5a5', '#f5ff8a'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        popup.style.color = randomColor;
    }

    setInterval(changeColor, 1000);
});

function redirectToNextPage() {
    window.location.href = 'next.html';
}
