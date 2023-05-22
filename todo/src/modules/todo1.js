const todo1 = function() {
    const content = document.querySelector('#content');

    const importantTasks = document.createElement('div');
    importantTasks.textContent = 'Important Tasks';
    content.appendChild(importantTasks);
  
    const task1 = document.createElement('div');
    task1.textContent = 'Task 1';
    importantTasks.appendChild(task1);
  
    const task2 = document.createElement('div');
    task2.textContent = 'Task 2';
    importantTasks.appendChild(task2);
  
    const task3 = document.createElement('div');
    task3.textContent = 'Task 3';
    importantTasks.appendChild(task3);
}

export default todo1;