<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>to-do list web app</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
    <link rel="stylesheet" href="assets/css/reset.css">
    <link rel="stylesheet" href="assets/css/main.css">
  </head>
  <body class="home">
    <?php 
      require_once 'php/config.php';
      session_start();
 
    ?>

    <header class="header">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <h1 class="user-name">Olá Saulo</br>O que você tem para fazer hoje?</h1>
          </div>
          <div class="col-4 text-center">
            <div class="user-img">
              <img src="assets/img/my.jpg" alt="Foto de perfil do usuário">
            </div>
          </div>
        </div>
      </div>
    </header>
    <?php ?>