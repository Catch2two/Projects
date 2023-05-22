import buttons from './modules/buttons';
import buttonsController from './modules/buttons.controller'
import todo1 from './modules/todo1';
import todo2 from './modules/todo2';
import todo3 from './modules/todo3';
// Styles

// Calls
buttons();
todo1()
todo2()
todo3()
const button1 = document.querySelector('#toDo1');
if (button1) {
    button1.addEventListener('click', buttonsController.todo1);
}
