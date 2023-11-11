// menu.js
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu a');

    menuItems.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            item.style.color = '#ff8adb'; // Change the color on hover
        });

        item.addEventListener('mouseleave', function() {
            item.style.color = '#ffffff'; // Change the color back to white
        });
    });
});
