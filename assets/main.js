//Trocando para localStorage
//Array simples com informações padrões
let tasks = ["Item x","Item xx","Item xxx"];

// Convert the array to a JSON string
const jsonArray = JSON.stringify(tasks);

// Store the JSON string in localStorage with a key named "dados"
localStorage.setItem("dados", jsonArray);

// Retrieve the JSON string from localStorage
const retrievedJson = localStorage.getItem("dados");

let retrievedArray = [];

// Check if the data exists before parsing to avoid errors
if (retrievedJson) {
  retrievedArray = JSON.parse(retrievedJson);
}
console.log(retrievedArray);

//seleciona a lista no DOM onde os itens serão inseridos dinamicamente
const list = document.getElementById("tasks");

//função para lista itens no front-end da aplicação
retrievedArray.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);
});
