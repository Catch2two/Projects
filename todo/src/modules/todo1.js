const todo1 = function() {
    const content = document.querySelector('#content');

    const importantTasks = document.createElement('div');
    importantTasks.textContent = 'Important Tasks';
    content.appendChild(importantTasks);

    const tasks = [
        {
            id: 'task1',
            text: 'Task 1',
        },
        {
            id: 'task2',
            text: 'Task 2',
        },
        {
            id: 'task3',
            text: 'Task 3',
        },
        {
            id: 'task4',
            text: 'Task 4',
        },
    ];

    tasks.forEach((task) => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = task.id;
        checkbox.name = 'task';
        checkbox.value = task.text;
        checkbox.checked = false;

        const taskDiv = document.createElement('div');
        taskDiv.textContent = task.text;

        importantTasks.appendChild(checkbox);
        importantTasks.appendChild(taskDiv);
    });
    
}
export default todo1;