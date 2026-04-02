<?php
require_once 'php/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $new_pass = bin2hex(random_bytes(4)); // Gera uma senha aleatória de 8 caracteres (4 bytes)
    $hash = password_hash($new_pass, PASSWORD_DEFAULT); // Salve esse $hash no banco de dados, não a $new_pass.
    //valida se o email existe no banco de dados
    if(!empty($email)) {
        // busca o usuário pelo email
        $sql = "SELECT id, email, senha FROM usuarios WHERE email = ? LIMIT 1";
        $stmt = $conn->prepare($sql);
        $stmt->execute([$email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        if(!empty($user)){
            //alterando senha do usuário
            $sql = "UPDATE usuarios SET senha = ? WHERE id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->execute([$hash, $user['id']]);
            print_r($new_pass);
            echo "<script>alert('Senha resetada com sucesso!');</script>";
        } else {
            echo "<script>alert('E-mail não encontrado.');</script>";
        }
    } else {
        echo "<script>alert('Erro ao enviar e-mail: E-mail vazio.');</script>";
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
