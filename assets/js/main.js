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
        console.log('Tarefa adicionada: ' + newItem);
    } else {
        alert("Por favor, insira uma tarefa válida.");
    }
}

//função para salvar as tarefas no localStorage
function salveTasks(tasksArray){
    //Salvando em Json
    const tasksJson = JSON.stringify(tasksArray);
    localStorage.setItem('dados', tasksJson);
    //Fechar modal após salvar
    const myModal = new bootstrap.Modal(document.getElementById('modalAddTask'));
    myModal.hide();
    console.log("Tarefa salva com sucesso!");
}
