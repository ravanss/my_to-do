<?php
require_once 'php/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['nome'];
    $email = $_POST['email'];
    $password = password_hash($_POST['senha'], PASSWORD_DEFAULT);

    $sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";
    $stmt = $pdo->prepare($sql);

    try {
        $stmt->execute([$username, $email, $password]);
        echo "<script>alert('Registro bem-sucedido!'); window.location.href = 'app.php';</script>";
    } catch (PDOException $e) {
        echo "<script>alert('Erro ao registrar: " . $e->getMessage() . "');</script>";
    };
}

include 'header.php';
?>

<main class="main">
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12"></div>
                    <form action="login.php" method="post">
                        <div class="input-group">
                            <input type="text" name="nome" class="form-control" placeholder="Adicione seu nome" required>
                        </div>
                        <div class="input-group">
                            <input type="email" name="email" class="form-control" placeholder="Adicione seu email" required>
                        </div>
                        <div class="input-group">
                            <input type="password" name="senha" class="form-control" placeholder="Adicione sua senha" required>
                        </div>
                        <div class="input-group">
                            <button type="submit" class="btn btn-primary">Registrar</button>
                        </div>
                    </form>
                    <div class="fast-link">
                        <a href="login.php">Já possui uma conta? Faça login aqui.</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
<?php
include 'footer.php';
