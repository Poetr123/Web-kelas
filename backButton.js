// backButton.js
document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.createElement('button');
    backButton.textContent = 'Back';
    backButton.addEventListener('click', function() {
        history.back();
    });

    document.body.appendChild(backButton);
});
