//itens do array tasks 
let tasks = ["Item x","Item xx","Item xxx"];

//seleciona a lista no DOM onde os itens serão inseridos dinamicamente
const list = document.getElementById("tasks");

//função para lista itens no front-end da aplicação
tasks.forEach(task => {
    console.log(task);
    const li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);
});
