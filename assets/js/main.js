// Exemplo: Recuperar a lista ao iniciar o app
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
    // 1. Tenta recuperar a dados salva no localStorage
    const tasksJSON = localStorage.getItem('dados');
    // 2. Verifica se há dados (se não for null)
    if (tasksJSON) {
        // 3. Converte a string JSON de volta para um Array de JavaScript
        return JSON.parse(tasksJSON);
    } else {
        // 4. Se não houver, retorna um Array vazio
        return [];
    }
}

//função para salvar as tarefas no localStorage
function salveTasks(tasksArray){
    //Salvando em Json
    const tasksJson = JSON.stringify(tasksArray);
    localStorage.setItem('dados', tasksJson);
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
    } else {
        alert("Por favor, insira uma tarefa válida.");
    }
}