<?php
require_once 'config.php';
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['nome'];
    $email = $_POST['email'];
    $password = password_hash($_POST['senha'], PASSWORD_DEFAULT);
}
?>

<form action="" method="post">
    <div class="input-group">
        <input type="text" name="nome" class="form-control" placeholder="Adicione seu nome">
    </div>
    <div class="input-group">
        <input type="email" name="email" class="form-control" placeholder="Adicione seu email">
    </div>
    <div class="input-group">
        <input type="password" name="senha" class="form-control" placeholder="Adicione sua senha">
    </div>
    <div class="input-group">
        <button type="submit" class="btn btn-primary">Registrar</button>
    </div>
</form>