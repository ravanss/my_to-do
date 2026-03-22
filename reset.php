<?php
require_once 'php/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    print_r($email);
    $new_pass = bin2hex(random_bytes(16));
    $hash = password_hash($new_pass, PASSWORD_DEFAULT);
    print_r($hash);
// Salve esse $hash no banco de dados, não a $new_pass.
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
