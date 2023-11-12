// Tambahkan script untuk memanipulasi musik dan menu

function toggleMusic() {
    var musicBtn = document.getElementById('musicBtn');
    var audio = new Audio('spongebob-ukulele.mp3');

    if (musicBtn.innerHTML === 'Musik On') {
        musicBtn.innerHTML = 'Musik Off';
        musicBtn.className = 'red';
        audio.loop = true;
        audio.play();
    } else {
        musicBtn.innerHTML = 'Musik On';
        musicBtn.className = '';
        audio.pause();
    }
}

function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

function updateDateTime() {
    var now = new Date();
    var dateTime = document.getElementById('dateTime');
    dateTime.innerHTML = now.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'Asia/Jakarta' });
}

// Panggil fungsi updateDateTime setiap detik
setInterval(updateDateTime, 1000);

// Panggil updateDateTime saat halaman dimuat
updateDateTime();
