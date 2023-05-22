const todo2 = function() {
    const content = document.querySelector('#content');

    const tasks = document.createElement('div');
    tasks.textContent = '';
    tasks.id = 'tasks';
    tasks.name = 'tasks';
    content.appendChild(tasks);

    const addTaskButton = document.createElement('button');
    addTaskButton.textContent = 'Add Task';
    addTaskButton.addEventListener('click', () => {
        const newTaskInput = document.createElement('input');
        newTaskInput.type = 'text';
        newTaskInput.id = 'newTask';

        tasks.appendChild(newTaskInput);

        // Add a new task when the user clicks the button.
        addTaskButton.addEventListener('click', () => {
            const newTask = newTaskInput.value;
            if (newTask) {
                const newTaskCheckbox = document.createElement('input');
                newTaskCheckbox.type = 'checkbox';
                newTaskCheckbox.id = newTask;
                newTaskCheckbox.name = 'task';
                newTaskCheckbox.value = newTask;
                newTaskCheckbox.checked = false;

                const newTaskDiv = document.createElement('div');
                newTaskDiv.textContent = newTask;

                tasks.appendChild(newTaskCheckbox);
                tasks.appendChild(newTaskDiv);

                // Strike out the task when the checkbox is checked.
                newTaskCheckbox.addEventListener('change', () => {
                    if (newTaskCheckbox.checked) {
                        newTaskDiv.style.textDecoration = 'line-through';
                    } else {
                        newTaskDiv.style.textDecoration = '';
                    }
                });
            }
        });
    });

    tasks.appendChild(addTaskButton);

}
export default todo2;