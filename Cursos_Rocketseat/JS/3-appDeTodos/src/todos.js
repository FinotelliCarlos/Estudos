var listElement = document.querySelector('#app ul');//linkando Objetos
var inputElement = document.querySelector('#app input');//linkando Objetos
var buttonElement = document.querySelector('#app button');//linkando Objetos

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];//renderizando todo do localStorage

function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');//renderizando todos.

        var todoText = document.createTextNode(todo);//renderizando todos.

        var linkElement = document.createElement('a');//excluindo todos.

        linkElement.setAttribute('href', '#');//excluindo todos.

        var pos = todos.indexOf(todo);//excluindo todos.
        linkElement.setAttribute('onclick','deleteTodo(' + pos + ')');//excluindo todos.

        var linkText = document.createTextNode('Excluir');//excluindo todos.

        linkElement.appendChild(linkText);//excluindo todos.

        todoElement.appendChild (todoText);//renderizando todos.

        todoElement.appendChild(linkElement);//excluindo todos.

        listElement.appendChild (todoElement);//renderizando todos.

    }
}

renderTodos();//renderizando todos.

function addTodo(){//criando todos
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value= '';
    renderTodos();
    saveToStorage();//salvando todo no localStorage
};

buttonElement.onclick = addTodo;//criando todos

function deleteTodo(pos){//excluindo todos.
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();//salvando todo no localStorage
}

function saveToStorage(){//salvando todo no localStorage
    localStorage.setItem('list_todos', JSON.stringify(todos));
}