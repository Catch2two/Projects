const buttons = function() {

    const div = document.createElement('div');
    div.classList.add('buttons');
  
    const button1 = document.createElement('button');
    button1.textContent = 'To Do 1';
    button1.addEventListener('click', function() {
      console.log('Button One Clicked');
    });
    div.appendChild(button1);
  
    const button2 = document.createElement('button');
    button2.textContent = 'To Do 2';
    button2.addEventListener('click', function() {
      console.log('Button Two Clicked')
    });
    div.appendChild(button2);
  
    const button3 = document.createElement('button');
    button3.textContent = 'To Do 3';
    button3.addEventListener('click', function() {
      console.log('Button Three Clicked')
    });
    div.appendChild(button3);
  
    document.querySelector('#content').appendChild(div);
  }
  export default buttons;