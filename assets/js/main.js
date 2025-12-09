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
           selectItem('modalEditTask', taskItem.id);
        }
        //Criado a estrutura e inserido na lista
        list.appendChild(li);
        li.appendChild(a);
        a.appendChild(span);
        span.appendChild(i);
    })
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
