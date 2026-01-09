//Limpar o localStorage (apenas para testes)
//LocalStorage.clear('dados');
//Recuperar a lista ao iniciar o app
const tasks = loadTasks();
//Seleciona a lista no DOM onde os itens serão inseridos dinamicamente
const list = document.getElementById("tasks-list");
//Seleciona o modal
const modal = document.querySelector('.modal');
//Seleciona o botão adicionar tarefa
const btnClass = document.getElementById('add-button');
//Contador da função de deletar
let contador = 0;

//Função para carregar as tarefas do localStorage
function loadTasks() {
    const tasksJSON = localStorage.getItem('dados');
    if (tasksJSON) {
        return JSON.parse(tasksJSON);
    } else {
        return [];
    }
}

//Função para lista itens no front-end da aplicação
window.onload = function() {
    tasks.forEach(taskItem => {
        //Criar elementos HTML para caada tarefa
        const li = document.createElement("li");
        const a = document.createElement("a");
        const div = document.createElement("div");
        const spanEdit = document.createElement("span");
        const spanDelet = document.createElement("span");
        const iEdit = document.createElement("i");
        const iDelet = document.createElement("i");
        //Configurar classes e atributos
        li.className = "list-item";
        a.textContent = taskItem.name;
        div.className = "action-icons";
        //Função de cada span
        a.onclick = function(){
            completed(taskItem.name, taskItem.status);
        }
        spanEdit.onclick = function() {
            selectItem('modalEditTask', taskItem.id);
        };
        spanDelet.onclick = function(){
            modalDeletTask('modalDeletTask', taskItem.id);
        };
        //Class dos icones para cada ação
        a.id = taskItem.name;
        iEdit.className = "fa-regular fa-pen-to-square";
        iDelet.className = "fa-regular fa-trash-can"; 
        //Criado a estrutura e inserido na lista
        list.appendChild(li);
        li.appendChild(a);
        li.appendChild(div);
        div.appendChild(spanEdit);
        div.appendChild(spanDelet);
        spanEdit.appendChild(iEdit);
        spanDelet.appendChild(iDelet);
    });
};

function completed(name, status){
    let checkbox = document.getElementById(name);
    checkbox.classList.toggle("completed");
    console.log(status);
    if (status === false) {
        status = true;
    } else if (status === true) {
        status = false;
    } else {
        alert("Erro ao atualizar o status da tarefa.");
        return;
    }
    tasks.forEach(taskItem => {
        if (taskItem.name === name) {
            taskItem.status = status;
            salveTasks(tasks);
        }
    });
    console.log(status);
    console.log(tasks);
}

//Função para adicionar uma nova tarefa
function addTask(){
    const itemReceived = document.getElementById("task-input");
    const newItem = itemReceived.value.trim();
    const id = tasks.length + 1;
    if (newItem != "") {
        tasks.unshift({ id: id, name: newItem, status: false});
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

//Função para achar o id correta para fazer a deleção
function modalDeletTask(modalDeletTask, id){
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
    //Regra para não criar mais de um botão de deletar
    if (contador <= 0) {
        let btnDelet = document.createElement("div");
        modalDeletInput.appendChild(btnDelet);
        btnDelet.innerHTML = "<button class='btn btn-danger' onclick='deletTask(" + id + ")'>excluir</button>";
    }
    modalDeletTitle.textContent = `Excluido a tarefa: ${item}`;
    //incremetando contador global
    contador = contador + 1;
    //exibir o modal
    modalDelet.show();
}

//Função para deletar o item apos o click.
function deletTask(itemId){
    tasks.forEach(taskItem => {
        if (taskItem.id === itemId) {
            const itemIndex = tasks.indexOf(taskItem);
            //Verificando se o item existe no array
            if (itemIndex > -1) {
                tasks.splice(itemIndex, 1);
            } else {
                alert("Erro ao excluir a tarefa.");
                return;
            }
            salveTasks(tasks);
            alert("Tarefa excluida com sucesso!");
            reloadPage();
        }
    });
}

//Função para salvar as tarefas no localStorage
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
