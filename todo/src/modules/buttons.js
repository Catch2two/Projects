const buttons = function() {

    const button1 = document.createElement('button');
    button1.textContent = 'Important Tasks';
    button1.addEventListener('click', function() {
        console.log('Button One Clicked');
    });
    const button2 = document.createElement('button');
    button2.textContent = 'Weekly Tasks';
    button2.addEventListener('click', function() {
        console.log('Button Two Clicked')
    });
    const button3 = document.createElement('button');
    button3.textContent = 'Daily Tasks';
    button3.addEventListener('click', function() {
        console.log('Button Three Clicked')
    });
    document.querySelector('#content').appendChild(button1);
    document.querySelector('#content').appendChild(button2);
    document.querySelector('#content').appendChild(button3);
}
export default buttons;