function todolist() {
// Input Form
  const input = document.createElement('div');
  input.classList.add('input')
  input.textContent = 'Tasks';

  const titleInput = document.createElement('input');
  titleInput.placeholder = 'Title';

  const descriptionInput = document.createElement('input');
  descriptionInput.placeholder = 'Description';

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

  input.appendChild(titleInput);
  input.appendChild(descriptionInput);
  input.appendChild(timeSelect);

// Add New Task
  const addButton = document.createElement('button');
  addButton.textContent = 'Add New List';
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
  const task = document.createElement('task');
  task.textContent = titleInput.value;
  task.description = descriptionInput.value;
  task.date = timeSelect.value;

  const checkbox = document.createElement('input');
  checkbox.classList.add('checkBox');
  checkbox.type = 'checkbox';
  task.appendChild(checkbox);

  const deleteBtn =  document.createElement('button')
  deleteBtn.textContent = 'x'
  deleteBtn.classList.add('deleteBtn')
  task.appendChild(deleteBtn)

  const div = document.getElementById('content');
  const li = document.createElement('li');
  div.appendChild(li);
  li.appendChild(task);

  const description = document.createElement('p');
  description.textContent = descriptionInput.value;
  description.classList.add('description');
  task.appendChild(description);

  deleteBtn.addEventListener('click', function() {
    li.remove();
  });

  return li;
}

todolist();