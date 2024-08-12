document.getElementById('add-todo-btn').addEventListener('click', addTodo);

function addTodo(){
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText === '')return;

    const todoList = document.getElementById('todo-list');

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = todoText;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit');
    editBtn.addEventListener('click', () => editTodo(span));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteTodo(li));

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    todoInput.value = '';
}

function editTodo(todoSpan) {
    const newTodoText = prompt('Edit your todo:', todoSpan.textContent);
    if (newTodoText !== null) {
        todoSpan.textContent = newTodoText;
    }
}

function deleteTodo(todoItem) {
    todoItem.remove();
}
