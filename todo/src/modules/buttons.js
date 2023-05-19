const buttons = function() {
    const content = document.querySelector('#content');

    const button1 = document.createElement('button');
    button1.textContent = 'Important Tasks';
    button1.addEventListener('click', function() {
        const todo1 = require('./todo1');
        todo1.render();
        console.log('Button One Clicked');
    });
    const button2 = document.createElement('button');
    button2.textContent = 'Weekly Tasks';
    button2.addEventListener('click', function() {
        const todo2 = require('./todo2');
        todo2.render();
        console.log('Button Two Clicked')
    });
    const button3 = document.createElement('button');
    button3.textContent = 'Daily Tasks';
    button3.addEventListener('click', function() {
        const todo3 = require('./todo3');
        todo3.render();
        console.log('Button Three Clicked')
    });
    document.querySelector('#content').appendChild(button1);
    document.querySelector('#content').appendChild(button2);
    document.querySelector('#content').appendChild(button3);
}
export default buttons;