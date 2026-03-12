<?php
require_once 'php/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['nome'];
    $email = $_POST['email'];
    $password = password_hash($_POST['senha'], PASSWORD_DEFAULT);

    $sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);

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
                <div class="col-12">
                    <div class="form">
                        <h5><span class="title-form-icon"><i class="fa-regular fa-user"></i></span>Registre-se</h5>
                        <form action="login.php" method="post">
                            <div class="input-group">
                                <span><i class="fa-regular fa-user"></i></span>
                                <input type="text" name="nome" class="form-control" placeholder="Adicione seu nome" required>
                            </div>
                            <div class="input-group">
                                <span><i class="fa-regular fa-envelope"></i></span>
                                <input type="email" name="email" class="form-control" placeholder="Adicione seu email" required>
                            </div>
                            <div class="input-group">
                                <span><i class="fa-solid fa-lock"></i></span>
                                <input type="password" name="senha" class="form-control" placeholder="Adicione sua senha" required>
                            </div>
                            <div class="input-group">                        
                                <button type="submit" class="btn btn-primary btn-custom">
                                    <span><i class="fa-solid fa-check"></i></span>
                                    Registrar
                                </button>
                            </div>
                        </form>
                        <div class="fast-link">
                            <a href="login.php">Já possui uma conta? Faça login aqui.
                                <span><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
<?php
include 'footer.php';
