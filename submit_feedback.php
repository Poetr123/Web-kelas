<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $feedback = $_POST["feedback"];
    
    // Simpan $feedback ke database atau file, sesuai kebutuhan
    // Contoh: Simpan ke file
    file_put_contents("feedback.txt", $feedback . PHP_EOL, FILE_APPEND);
    
    echo "Terima kasih atas saran dan masukkanmu!";
}
?>
