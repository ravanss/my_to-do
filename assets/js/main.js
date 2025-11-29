//Limpar o localStorage (apenas para testes)
//localStorage.clear('dados');

//Recuperar a lista ao iniciar o app
const tasks = loadTasks();

//Seleciona a lista no DOM onde os itens serão inseridos dinamicamente
const list = document.getElementById("tasks-list");

//Função para lista itens no front-end da aplicação ao carregar a página com loadTasks()
window.onload = function() {
    tasks.forEach(taskItem => {
        //Criar elementos HTML para cada tarefa
        const li = document.createElement("li");
        const a = document.createElement("a");
        const span = document.createElement("span");
        const i = document.createElement("i");
        //Configurar classes e atributos
        i.className = "fa-solid fa-trash";
        li.className = "list-item";
        a.textContent = taskItem.name;
        span.dataset.id = taskItem.id;
        span.onclick = function() {
           editTask('modalEditTask', taskItem.id);
        }
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
    const itemReceived = document.getElementById("task-input");
    const newItem = itemReceived.value.trim();
    const id = tasks.length + 1;
    if (newItem != "") {
        tasks.unshift({ id: id, name: newItem});
        salveTasks(tasks);
        alert("Tarefa adicionada com sucesso!");
        closeModal();
        reloadPage();
    } else {
        alert("Por favor, insira uma tarefa válida.");
    }
}

//Função para alterar o nome da tarefa
function editTask(modalEditTask,itemId){
    let modalID = modalEditTask;
    //Buscar o nome da tarefa pelo ID
    let item = "";
    tasks.forEach(taskItem => {
        if (taskItem.id === itemId) {
            return item = taskItem.name;
        }
    });
    console.log(item);
    console.log(modalID);
    //Abrir o modal de edição
    let editModal = document.querySelector('.modal');
    editModal.setAttribute('id', modalID);
    let novoModal = new bootstrap.Modal(editModal);
    novoModal.handleUpdate();
    novoModal.show();
    
    console.log(editModal);
    console.log(novoModal);
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

//Função de recarregar a página
function reloadPage(){
    window.location.reload(true);
}

function clickModal(){
    const modifyIdModal = document.querySelector('.modal');
    modifyIdModal.setAttribute('id', 'modalAddTask');
    let reOpemModal = new bootstrap.Modal(modifyIdModal);
    reOpemModal.handleUpdate();
    reOpemModal.show();
}