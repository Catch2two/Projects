const menu = function(){
    const content = document.querySelector('#content');

    // Home Div
    const menu = document.createElement('div')
    menu.classList.add('menu');
    content.appendChild(menu);

    const title = document.createElement('h1');
    title.classList.add("title");
    title.textContent = 'Our Beautiful Meals'
    content.appendChild(title);
}

export default menu;