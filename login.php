<?php
require_once 'php/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['senha'];

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
        echo "acesso negado";
    }
}

include 'header.php';
?>

<main class="main">
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="form">
                        <form action="" method="post">
                            <div class="input-group">
                                <input type="email" name="email" class="form-control" placeholder="Adicione seu email" required>
                            </div>
                            <div class="input-group">
                                <input type="password" name="senha" class="form-control" placeholder="Adicione sua senha" required>
                            </div>
                            <div class="input-group">
                                <button type="submit" class="btn btn-primary btn-custom">Acessar</button>
                            </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
<?php
include 'footer.php';
