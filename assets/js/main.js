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

