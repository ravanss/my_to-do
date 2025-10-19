/*itens do array tasks 
let tasks = ["Item x","Item xx","Item xxx"];

//seleciona a lista no DOM onde os itens serão inseridos dinamicamente
const list = document.getElementById("tasks");

//função para lista itens no front-end da aplicação
tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);
});*/

//Trocando para localStorage
let tasks = [
    { text: "Item x" },
    { text: "Item xx" },
    { text: "Item xxx" },
];

tasks.forEach(task => console.log(task));


// Exemplo: Salvar sua lista atual
// saveTasks(tasks);