// Date-FNS
import * as dateFns from 'date-fns';
const formattedDate = dateFns.format(new Date(), 'yyyy-mm-dd');

function todolist() {
// Input Form
  const input = document.createElement('div');
  input.id = "input";
  input.textContent = 'Tasks';

  const titleInput = document.createElement('input');
  titleInput.id = "titleInput";
  titleInput.required = true;
  titleInput.maxlength = 30;
  titleInput.placeholder = 'Task Name';

  const descriptionInput = document.createElement('textarea');
  descriptionInput.id = "descriptionInput";
  descriptionInput.required = true;
  descriptionInput.placeholder = 'Task Description';

// Time options for Dropdown
  const timeSelect = document.createElement('select');
  timeSelect.id = "timeSelect";
  timeSelect.required = true;
  timeSelect.options.add(new Option(Date()));
  timeSelect.options.add(new Option('Today'));
  timeSelect.options.add(new Option('Sunday'));
  timeSelect.options.add(new Option('Monday'));
  timeSelect.options.add(new Option('Tuesday'));
  timeSelect.options.add(new Option('Wednesday'));
  timeSelect.options.add(new Option('Thursday'));
  timeSelect.options.add(new Option('Friday'));
  timeSelect.options.add(new Option('Saturday'));

  
// Append Form Inputs
  input.appendChild(titleInput);
  input.appendChild(descriptionInput);
  input.appendChild(timeSelect);

// Add New Task Button
  const addButton = document.createElement('button');
  addButton.classList.add('addBtn');
  addButton.textContent = 'New Task';
  addButton.addEventListener('click', addNewTask);

  input.appendChild(addButton);

// Append whole Input Form
  document.getElementById('content').appendChild(input);
}


// Add New Task Cards ---------

function addNewTask() {
  const titleInput = document.getElementById('titleInput');
  const descriptionInput = document.getElementById('descriptionInput');
  const timeSelect = document.getElementById('timeSelect');

  const taskAdded = document.createElement('div');
  taskAdded.classList.add('taskAdded');
  taskAdded.textContent = titleInput.value;
  taskAdded.date = timeSelect.value;


// Append the Task Card to DOM
  const cardDiv = document.getElementById('content');
  const cardInfo = document.createElement('div');
  cardDiv.appendChild(cardInfo);
  cardInfo.appendChild(taskAdded);

  // Append the description input to the task card
  const description = document.createElement('p');
  description.textContent = descriptionInput.value;
  description.classList.add('description');
  taskAdded.appendChild(description);

  // Append Due Date
  const dueDate = document.createElement('div');
  dueDate.textContent = timeSelect.value;
  dueDate.classList.add('dueDate');
  taskAdded.appendChild(dueDate);

  // Checkboxes
  const priorityDiv = document.createElement('div');
  priorityDiv.id = "priority";
  const priority = ['Important', 'Minor', 'Completed'];

  priority.forEach((priority) => {
    const checkbox = document.createElement('input');
    checkbox.classList.add('checkBox');
    checkbox.type = 'checkbox';
    checkbox.textContent = priority;
    taskAdded.appendChild(checkbox);

    const prio = document.createElement('label');
    prio.htmlFor = checkbox.id;
    prio.textContent = priority;
    taskAdded.appendChild(prio);
  });

  // X button (Delete)
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'x';
  deleteBtn.classList.add('deleteBtn');
  taskAdded.appendChild(deleteBtn);

  deleteBtn.addEventListener('click', function() {
    const confirmDelete = confirm('Are you sure you want to delete this Task?');
    if (confirmDelete) {
    cardInfo.remove();
  }
    
  });

  //Clear Inputs
  titleInput.value = '';
  descriptionInput.value = '';

}
todolist();
