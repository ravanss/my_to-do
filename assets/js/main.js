//Array simples com informações padrões
let tasks = ["Item x","Item xx","Item xxx"];

//Converta a matriz em uma string JSON
const jsonArray = JSON.stringify(tasks);

//Armazene a string JSON no localStorage com uma chave chamada "dados"
localStorage.setItem("dados", jsonArray);

//Variavel para armazenar os dados recuperados apos verificação de retorno dos dados
let retrievedArray = [];

//Recuperar a string JSON do localStorage
const retrievedJson = localStorage.getItem("dados");

//Verifique se os dados existem antes de analisar para evitar erros
if (retrievedJson) {
    retrievedArray = JSON.parse(retrievedJson);
}

//seleciona a lista no DOM onde os itens serão inseridos dinamicamente
const list = document.getElementById("tasks-list");

//função para lista itens no front-end da aplicação
retrievedArray.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);
});

//Função para adicionar uma nova tarefa
function addTask(){
    const taskInput = document.getElementById("task-input");
    const newTask = taskInput.value.trim();
    // Verifica se o input não está vazio
    if (newTask != ""){
        // Adiciona a nova tarefa no início do array
        retrievedArray.unshift(newTask);
        console.log(retrievedArray);
    } else {
        alert("Por favor, insira uma tarefa válida.");
    }
}

