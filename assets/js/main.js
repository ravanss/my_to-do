//Limpar o localStorage (apenas para testes)
//localStorage.clear('dados');
//Recuperar a lista ao iniciar o app
const tasks = loadTasks();
//Seleciona a lista no DOM onde os itens serão inseridos dinamicamente
const list = document.getElementById("tasks-list");
//Seleciona o modal
const modal = document.querySelector('.modal');
//Seleciona o botão adicionar tarefa
const btnClass = document.getElementById('add-button');

//Função para carregar as tarefas do localStorage
function loadTasks() {
    const tasksJSON = localStorage.getItem('dados');
    if (tasksJSON) {
        return JSON.parse(tasksJSON);
    } else {
        return [];
    }
}

//Função para lista itens no front-end da aplicação ao carregar a página com loadTasks()
window.onload = function() {
    tasks.forEach(taskItem => {
        //Criar elementos HTML para caada tarefa
        const li = document.createElement("li");
        const a = document.createElement("a");
        const div = document.createElement("div");
        const spanEdit = document.createElement("span");
        const spanDelet = document.createElement("span");
        const iEdit = document.createElement("i");
        const iDelet = document.createElement("i")
        //Configurar classes e atributos
        li.className = "list-item";
        a.textContent = taskItem.name;
        //Função de cada span
        spanEdit.onclick = function() {
            selectItem('modalEditTask', taskItem .id);
        };
        spanDelet.onclick = function(){
            modalDeletTask('modalDeletTask', taskItem.id);
        };
        //Class dos icones para cada ação
        iEdit.className = "fa-regular fa-pen-to-square";
        iDelet.className = "fa-regular fa-trash-can"; 
        //Criado a estrutura e inserido na lista
        list.appendChild(li);
        li.appendChild(a);
        a.appendChild(div);
        div.appendChild(spanEdit);
        div.appendChild(spanDelet);
        spanEdit.appendChild(iEdit);
        spanDelet.appendChild(iDelet);
    });
};

//Função para adicionar uma nova tarefa
function addTask(){
    const itemReceived = document.getElementById("task-input");
    const newItem = itemReceived.value.trim();
    const id = tasks.length + 1;
    if (newItem != "") {
        tasks.unshift({ id: id, name: newItem});
        salveTasks(tasks);
        alert("Tarefa adicionada com sucesso!");
        closeModal(modalAddTask);
        reloadPage();
    } else {
        alert("Por favor, insira uma tarefa válida.");
    }
}

//Função para reciperar o nome da tarefa e modificar o modal para edição da tarefa
function selectItem(modalEditTask,itemId){
    let modalID = modalEditTask;
    //Buscar o nome da tarefa pelo ID
    let item = "";
    tasks.forEach(taskItem => {
        if (taskItem.id === itemId) {
            return item = taskItem.name;
        }
    });
    //Alterando ID do modal
    modal.setAttribute('id', modalID);
    //Alterando informações do modal
    let modalEdit = new bootstrap.Modal(modal);
    let modalEditTitle = modal.querySelector('.modal-title');
    let modalEditInput = modal.querySelector('#task-input');
    let modalEditClick = modal.querySelector('#add-task');
    modalEditTitle.textContent = `Editandoo a tarefa: ${item}`;
    modalEditInput.value = item;
    modalEditClick.setAttribute('onclick', 'editTask(' + itemId + ')');
    //exibir o modal
    modalEdit.show();
}

//Função para editar a tarefa
function editTask(itemId){
    const editInput= document.getElementById("task-input");
    const itemModified = editInput.value.trim();
    tasks.forEach(taskItem => {
        if (taskItem.id === itemId) {
            taskItem.name = itemModified;
            salveTasks(tasks);
            alert("Tarefa editada com sucesso!");
            closeModal(modalEditTask);
            reloadPage();
        }
    });
}

function modalDeletTask(modalDeletTask, id){
    let btn = 0;
    const modalID = modalDeletTask;
    let item = "";
    tasks.forEach(taskItem => {
        if (taskItem.id === id) {
            return item = taskItem.name;
        }
    });
    //Alterando ID do modal
    modal.setAttribute('id', modalID);
    //Alterando informações do modal
    let modalDelet = new bootstrap.Modal(modal);
    let modalDeletTitle = modal.querySelector('.modal-title');
    let modalDeletInput = modal.querySelector('.input-group');
    if (btn <= 0) {
        let btnDelet = document.createElement("div");
        modalDeletInput.appendChild(btnDelet);
        btnDelet.innerHTML = "<button class='btn btn-danger' onclick='deletTask(" + id + ")'>excluir</button>";
    }
    modalDeletTitle.textContent = `Excluido a tarefa: ${item}`;
    //exibir o modal
    btn + 1;
    console.log(btn);
    modalDelet.show();
}

function deletTask(itemId){
    tasks.forEach(taskItem => {
        if (taskItem.id === itemId) {
            tasks.splice(taskItem, 1);
            salveTasks(tasks);
            alert("Tarefa excluida com sucesso!");
            reloadPage();
        }
    });
}

//função para salvar as tarefas no localStorage
function salveTasks(tasksArray){
    //Salvando em Json
    const tasksJson = JSON.stringify(tasksArray);
    localStorage.setItem('dados', tasksJson);
}

//Altera o id, title e deixa o inpit limpo do modal, antes do click no botão adicionar tarefa
btnClass.addEventListener('mousemove', function() {
    modal.setAttribute('id', 'modalAddTask');
    let modalTitle = modal.querySelector('.modal-title');
    let modalInput = modal.querySelector('#task-input');
    let modalClick = modal.querySelector('#add-task');
    modalTitle.textContent = 'Adicionando nova tarefa';
    modalInput.value = '';
    modalClick.setAttribute('onclick', 'addTask()');
});

//Fechar o modal após adicionar a tarefa
function closeModal(modalId) {
    const modal = bootstrap.Modal.getInstance(modalId);
    modal.hide();
}

//Função de recarregar a página
function reloadPage(){
    window.location.reload(true);
}
