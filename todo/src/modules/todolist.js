function todolist() {
// Input Form
  const input = document.createElement('div');
  input.classList.add('input')
  input.textContent = 'Tasks';

  const titleInput = document.createElement('input');
  titleInput.classList.add('titleInput');
  titleInput.placeholder = 'Task Name';

  const descriptionInput = document.createElement('input');
  descriptionInput.classList.add('descriptionInput');
  descriptionInput.placeholder = 'Task Description';

// Time options for Dropdown
  const timeSelect = document.createElement('select');
  timeSelect.options.add(new Option('Today'));
  timeSelect.options.add(new Option('Tomorrow'));
  timeSelect.options.add(new Option('Next Week'));
  timeSelect.options.add(new Option('Next Month'));
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


// Add New Task
function addNewTask() {
  const titleInput = document.querySelector('input');
  const descriptionInput = document.querySelector('input');
  const timeSelect = document.querySelector('input');

  const taskAdded = document.createElement('div');
  taskAdded.classList.add('taskAdded');
  taskAdded.textContent = titleInput.value;
  taskAdded.date = timeSelect.value;

// Checkboxes
const priority = ['Important', 'Urgent', 'Trivial'];

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

// Append the Task to DOM
  const cardDiv = document.getElementById('content');
  const cardInfo = document.createElement('div');
  cardDiv.appendChild(cardInfo);
  cardInfo.appendChild(taskAdded);

  // Append the description input to the task card
  const description = document.createElement('p');
  description.textContent = descriptionInput.value;
  description.classList.add('description');
  taskAdded.appendChild(description);

  // X button (Delete)
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'x';
  deleteBtn.classList.add('deleteBtn');
  taskAdded.appendChild(deleteBtn);

  deleteBtn.addEventListener('click', function() {
    cardInfo.remove();
  });

  return cardInfo;
}

todolist();
