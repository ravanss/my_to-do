//Recuperar a lista ao iniciar o app
let tasks = loadTasks();

//seleciona a lista no DOM onde os itens serão inseridos dinamicamente
const list = document.getElementById("tasks-list");

//função para lista itens no front-end da aplicação ao carregar a página
window.onload = function() {
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task;
        list.appendChild(li);
    })
};

//Função para carregar as tarefas do localStorage
function loadTasks() {
    const tasksJSON = localStorage.getItem('dados');
    if (tasksJSON) {
        return JSON.parse(tasksJSON);
    } else {
        return [];
    }
}

//Função para adicionar uma nova tarefa
function addTask(){
    const taskInput = document.getElementById("task-input");
    const newItem = taskInput.value.trim();
    // Verifica se o input não está vazio
    if (newItem != ""){
        // Adiciona a nova tarefa no início do array
        tasks.unshift(newItem);
        salveTasks(tasks)
        alert("Tarefa adicionada com sucesso!");
        closeModal()
    } else {
        alert("Por favor, insira uma tarefa válida.");
    }
}

//função para salvar as tarefas no localStorage
function salveTasks(tasksArray){
    //Salvando em Json
    const tasksJson = JSON.stringify(tasksArray);
    localStorage.setItem('dados', tasksJson);
}

//Fechar o modal após adicionar a tarefa
function closeModal() {
    const modalID = document.getElementById("modalAddTask");
    const modal = bootstrap.Modal.getInstance(modalID);
    modal.hide();
}
