document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu a');

    menuItems.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            item.style.color = '#ff8adb';
        });

        item.addEventListener('mouseleave', function() {
            item.style.color = '#ffffff';
        });
    });
});
