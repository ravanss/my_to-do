//Array simples com informações padrões
let task = ["Item x","Item xx","Item xxx"];

//Converta a matriz em uma string JSON
const tankJson = JSON.stringify(task);

//Armazene a string JSON no localStorage com uma chave chamada "dados"
localStorage.setItem("dados", tankJson);

//Variavel para armazenar os dados recuperados apos verificação de retorno dos dados
let tasks = [];

//Recuperar a string JSON do localStorage
const tasksJson = localStorage.getItem("dados");

//Verifique se os dados existem antes de analisar para evitar erros
if (tasksJson) {
    tasks = JSON.parse(tasksJson);
}

//seleciona a lista no DOM onde os itens serão inseridos dinamicamente
const list = document.getElementById("tasks-list");

//função para lista itens no front-end da aplicação
tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);
});

//Função para adicionar uma nova tarefa
function addTask(){
    const taskInput = document.getElementById("task-input");
    const newItem = taskInput.value.trim();
    // Verifica se o input não está vazio
    if (newItem != ""){
        // Adiciona a nova tarefa no início do array
        tasks.unshift(newItem);
        console.log(tasks);
    } else {
        alert("Por favor, insira uma tarefa válida.");
    }
}

