//Recuperar a lista ao iniciar o app
let tasks = loadTasks();

//Seleciona a lista no DOM onde os itens serão inseridos dinamicamente
const list = document.getElementById("tasks-list");

//Função para lista itens no front-end da aplicação ao carregar a página com loadTasks()
window.onload = function() {
    tasks.forEach(task => {
        //Criar elementos HTML para cada tarefa
        const li = document.createElement("li");
        const a = document.createElement("a");
        const span = document.createElement("span");
        const i = document.createElement("i");
        //Configurar classes e atributos
        i.className = "fa-solid fa-trash";
        li.className = "list-item";
        a.textContent = task;
        a.setAttribute("data-task", task);
        //Criado a estrutura e inserido na lista
        list.appendChild(li);
        li.appendChild(a);
        a.appendChild(span);
        span.appendChild(i);
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

//Função para alterar o nome da tarefa


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
