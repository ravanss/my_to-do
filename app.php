<?php
  include 'header.php';
  if (!isset($_SESSION['user_id'])) {
      header("Location: login.php");
      exit;
  }
?>
  <main class="main">
    <section>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="Title-list">Lista de tarefas</h1>
            <ul id="tasks-list"></ul>
            <span>* clique na tarefa para marcar como concluída</span>
          </div>
        </div>
      </div>
    </section>
  </main>
<?php
  include 'footer.php';
