function todolist() {
    
    const div = document.createElement('div');
    div.textContent = 'To Do List';
  
    const ul = document.createElement('ul');
  
    const titleInput = document.createElement('input');
    titleInput.placeholder = 'Title';
  
    const descriptionInput = document.createElement('input');
    descriptionInput.placeholder = 'Description';
  
    const timeSelect = document.createElement('select');
    timeSelect.options.add(new Option('Today'));
    timeSelect.options.add(new Option('Tomorrow'));
    timeSelect.options.add(new Option('Next Week'));
    timeSelect.options.add(new Option('Next Month'));
  
    div.appendChild(titleInput);
    div.appendChild(descriptionInput);
    div.appendChild(timeSelect);
  
    const addButton = document.createElement('button');
    addButton.textContent = 'Add New List';
    addButton.addEventListener('click', addNewList);
  
    div.appendChild(addButton);
  
    document.body.appendChild(div);
  }
  
  function addNewList() {
    const li = document.createElement('li');
    li.textContent = titleInput.value;
    li.description = descriptionInput.value;
    li.date = timeSelect.value;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);
  
    const ul = document.querySelector('ul');
    ul.appendChild(li);
  
    return li;
  }
  
  todolist();