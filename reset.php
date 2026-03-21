<?php
require_once 'php/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    print_r($email);
    $new_password = bin2hex(random_bytes(4)); // Gerar uma nova senha aleatória
    $hashed_password = password_hash($new_password, PASSWORD_DEFAULT); // Hash da nova senha
    $sql = "UPDATE usuarios SET senha = ? WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$hashed_password, $email]);
    if ($stmt->rowCount() > 0) {
        // Enviar a nova senha por e-mail (aqui você pode usar uma biblioteca de envio de e-mails)
        // Exemplo: mail($email, "Sua nova senha", "Sua nova senha é: $new_password");
        echo "<script>alert('Uma nova senha foi enviada para o seu e-mail!');</script>";
    } else {
        echo "<script>alert('E-mail não encontrado!');</script>";
    }
}
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
