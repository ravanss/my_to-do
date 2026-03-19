<?php
require_once 'php/config.php';

// Imagine que você já recebeu o e-mail via POST
/*$email = $_POST['email'];
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
    echo "<script>alert('E-mail não encontrado!');</script>";
}*/
include 'header.php';
?>
    <main class="main">
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-6 px-0 mx-0">
                        <div class="form">
                            <h5><span class="title-form-icon"><i class="fa-regular fa-user"></i></span>Informe o e-mail</h5>
                            <form action="" method="post">
                                <div class="input-group">
                                    <span><i class="fa-regular fa-envelope"></i></span>
                                    <input type="email" name="email" class="form-control" placeholder="Adicione seu email" required>
                                </div>
                                <div class="input-group">
                                    <button type="submit" class="btn btn-primary btn-custom">Acessar</button>
                                </div>
                            </form>
                            <a class="login-reset" href="./login.php">Fazer login! <span><i class="fa-solid fa-arrow-up-right-from-square"></i></span></a>
                        </div>
                    </div>
                    <div class="col-6 px-0 mx-0">
                        <div class="login-img">
                            <img src="assets/img/login.png" alt="Imagem de login">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
<?php
include 'footer.php';
