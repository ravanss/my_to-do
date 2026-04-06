<?php
require_once 'php/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['senha'];
    $aceitar = isset($_POST['switchCheck']);

    $sql = "SELECT * FROM usuarios WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    if ($user && password_verify($password, $user['senha'])) {
        session_start();
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['usuario_name'] = $user['nome'];
        header("Location: app.php");
        exit();
    } else {
        echo "<script>alert('E-mail ou senha incorretos!');</script>";
    }
}

include 'header.php';
?>

<main class="main">
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-12 px-0 mx-0">
                    <div class="form">
                        <h5><span class="title-form-icon"><i class="fa-regular fa-user"></i></span>Login</h5>
                        <form action="" method="post">
                            <div class="input-group">
                                <span><i class="fa-regular fa-envelope"></i></span>
                                <input type="email" name="email" class="form-control" placeholder="Adicione seu email" required>
                            </div>
                            <div class="input-group">
                                <span><i class="fa-solid fa-lock"></i></span>
                                <input type="password" name="senha" class="form-control" placeholder="Adicione sua senha" required>
                            </div>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" name="switchCheck" value="aceitado">
                                <label class="form-check-label" for="switchCheck">Acesse nossos <a href="forgot_password.php">Termos e Condições</a></label>
                            </div>
                            <div class="input-group">
                                <button type="submit" class="btn btn-primary btn-custom">Acessar</button>
                            </div>
                        </form>
                        <a class="login-reset" href="./reset.php">Esqueci minha senha! <span><i class="fa-solid fa-arrow-up-right-from-square"></i></span></a>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 px-0 mx-0">
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
