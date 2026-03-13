<?php
require_once 'php/config.php';

// Imagine que você já recebeu o e-mail via POST
$email = $_POST['email'];
$novaSenhaPura = substr(bin2hex(random_bytes(4)), 0, 8); // Gera algo como 'a1b2c3d4'
$hash = password_hash($novaSenhaPura, PASSWORD_DEFAULT);

// Atualiza o banco
$sql = "UPDATE usuarios SET senha = ? WHERE email = ?";
$stmt = $pdo->prepare($sql);
$stmt->execute([$hash, $email]);

if ($stmt->rowCount() > 0) {
    echo "Sua nova senha temporária é: <b>$novaSenhaPura</b>";
    echo "<br>Faça login e altere-a imediatamente.";
} else {
    echo "E-mail não encontrado.";
}

include 'footer.php';
    