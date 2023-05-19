const render = function() {
    const content = document.querySelector('#content');
  
    const importantTasks = document.createElement('div');
    importantTasks.textContent = 'Important Tasks';
    importantTasks.style.border = '1px solid black';
    importantTasks.style.padding = '10px';
    content.appendChild(importantTasks);
  
    const task1 = document.createElement('div');
    task1.textContent = 'Task 1';
    task1.style.border = '1px solid gray';
    task1.style.padding = '5px';
    importantTasks.appendChild(task1);
  
    const task2 = document.createElement('div');
    task2.textContent = 'Task 2';
    task2.style.border = '1px solid gray';
    task2.style.padding = '5px';
    importantTasks.appendChild(task2);
  
    const task3 = document.createElement('div');
    task3.textContent = 'Task 3';
    task3.style.border = '1px solid gray';
    task3.style.padding = '5px';
    importantTasks.appendChild(task3);
  }

export default render;