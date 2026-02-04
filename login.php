<?php
include 'header.php';
//session_start();
require_once 'php/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['senha'];

    $stmt = $conn->prepare("SELECT * FROM usuarios" );
    $stmt->execute();
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Verifica as credenciais do usuário
    foreach ($users as $user) {
        if ($user['email'] === $email) {
            echo "login bem-sucedido!";
            echo $user['nome'];
            echo $user['senha'];
            echo $email;
        } else {
            echo "email ou senha incorretos!";
            echo $user['email'];
            echo $email;
        }
    }


}
?>

<main class="main">
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12"></div>
                    <form action="" method="post">
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
