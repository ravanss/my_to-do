<?php
include 'header.php';
session_start();
require_once 'php/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['senha'];

    $stmt = $pdo->prepare("SELECT * FROM usuarios WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch();
    if ($user && password_verify($password, $user['senha'])) {
        $_SESSION['user_id'] = $user['id'];
        header('Location: app.php');
        exit();
    } else{
        echo "<script>alert('Email ou senha incorretos.');</script>";
    }
}
?>

<main class="main">
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12"></div>
                    <form action="app.php" method="post">
                        <div class="input-group">
                            <input type="email" name="email" class="form-control" placeholder="Adicione seu email" required>
                        </div>
                        <div class="input-group">
                            <input type="password" name="senha" class="form-control" placeholder="Adicione sua senha" required>
                        </div>
                        <div class="input-group">
                            <button type="submit" class="btn btn-primary">Acessar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</main>
<?php
include 'footer.php';
