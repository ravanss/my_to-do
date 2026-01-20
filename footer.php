    <footer class="footer">
      <!-- Button trigger modal -->
      <button id="add-button" type="button" class="btn btn-primary btn-custom" data-bs-toggle="modal" data-bs-target="#modalAddTask">
          <span><i class="fa-solid fa-plus"></i></span>
      </button>

      <!-- Modal -->
      <div class="modal fade" id="modalAddTask" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="modaltitle">Adicione uma nova tarefa</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="input-group">
                <input id="task-input" type="text" class="form-control" placeholder="Adicione uma nova tarefa...">
                <button id="add-task" class="btn btn-success btn-custom" onclick="addTask()">
                  <span><i class="fa-solid fa-plus"></i></span>
                </button>
              </div>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </footer>
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/js/all.min.js"></script>
    <script src="assets/js/main.js"></script>
  </body>
</html>