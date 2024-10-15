const tasks = [];
const taskInput = document.getElementById('task')
const taskList = document.getElementById('task-list')
const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')


document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()
});


function addTask() {
    const task = taskInput.value
    if (task) {
        tasks.push(task)
        taskInput.value = ''
        updateTaskList()
    }    
}


function removeLastTask() {
    if (tasks.length > 0) {
        tasks.pop()
        updateTaskList()
    }
}


function updateTaskList() {
    taskList.innerHTML = ''
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li')
        listItem.textContent = `${index + 1}. ${task}`
        taskList.appendChild(listItem)
    });
}


addButton.addEventListener('click', (event) => {
    addTask()
    event.preventDefault()
});
removeButton.addEventListener('click', (event) => {
    removeLastTask()
    event.preventDefault(); 
})
