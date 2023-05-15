const menu = function() {
    const content = document.querySelector('#content');

    // Home Div
    const menu = document.createElement('div')
    menu.classList.add('menu');
    content.appendChild(menu);

    const title = document.createElement('h1');
    title.classList.add("title");
    title.textContent = 'Our Beautiful Meats'
    menu.appendChild(title);

    const menuList = () => {
    const menuList = document.createElement('div')
    menuList.classList.add('menuList');
    menu.appendChild(menuList);

    const gridItems = document.querySelectorAll('.grid-item');

    for (const item of [
        ['Pork'], 
        ['Chicken'],
        ["Steaks"],
        ['Fish'],
        ['Veggies'],
        ['Sides'],
        ['Drinks'],
        ['Deserts'],
        ['Special Menu']]) {
        const div = document.createElement('div');
        div.textContent = item;
        menuList.appendChild(div);
    }
};

    menuList()
};

export default menu;