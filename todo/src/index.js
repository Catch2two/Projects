import buttons from './modules/buttons';
import todo1 from './modules/todo1';

const index = function() {
  const content = document.querySelector('#content');

  buttons();

  const button1 = document.querySelector('#important-tasks');
  button1.addEventListener('click', function() {
    todo1.render();
    console.log('Button One Clicked');
  });
};

index();