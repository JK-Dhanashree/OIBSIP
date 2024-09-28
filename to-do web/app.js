// Initialize empty array to store todo items
let todoItems = [];

// Function to add a new todo item
function addTodo(title, description) {
    const todo = {
        id: Date.now(),
        title: title,
        description: description
    };
    todoItems.push(todo);
    renderTodos();
}

// Function to delete a todo item by its ID
function deleteTodo(id) {
    todoItems = todoItems.filter(todo => todo.id !== id);
    renderTodos();
}

// Function to render all todos in the table
function renderTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    todoItems.forEach(todo => {
        const tr = document.createElement('tr');

        const titleTd = document.createElement('td');
        titleTd.textContent = todo.title;
        tr.appendChild(titleTd);

        const descTd = document.createElement('td');
        descTd.textContent = todo.description;
        tr.appendChild(descTd);

        const deleteTd = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = () => deleteTodo(todo.id);
        deleteTd.appendChild(deleteBtn);
        tr.appendChild(deleteTd);

        todoList.appendChild(tr);
    });
}

// Add event listener for form submission
const form = document.getElementById('todo-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    if (title && description) {
        addTodo(title, description);
        form.reset();
    }
});
