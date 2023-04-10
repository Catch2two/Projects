const parent = document.getElementById('dingding');
parent.style.width = '150px';
parent.style.height = '150px';
parent.style.backgroundColor = 'red';

document.getElementById('newThing').addEventListener("click", newThing);

function newThing() {
  var newDiv = document.createElement('div');
  newDiv.style.width = '50px';
  newDiv.style.height = '50px';
  newDiv.textContent = 'Entry';
  newDiv.style.backgroundColor = 'white';
  parent.appendChild(newDiv);
}