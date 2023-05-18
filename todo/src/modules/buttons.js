export default function() {
    const button1 = document.createElement('button');
    button1.textContent = 'Add Button';
    button1.addEventListener('click', function() {
        console.log('Button One Clicked')
    });
    const button2 = document.createElement('button');
    button2.textContent = 'Add Button';
    button2.addEventListener('click', function() {
        console.log('Button Two Clicked')
    });
    document.querySelector('#content').appendChild(button1);
    document.querySelector('#content').appendChild(button2);
}