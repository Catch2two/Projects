window.onload = () => {
    const content = document.querySelector("div#content");
// Header
    const header = document.createElement("div");
    header.classList.add("header");
    header.textContent = "Oogli McKobbler Jr's Outback Rib House";
    content.appendChild(header);
// About
    const about = document.createElement("div");
    about.classList.add("about");
    content.appendChild(about);
// About Img
    const img = document.createElement("img");
    img.src = "/src/img/food.png";
    about.appendChild(img);
// About Info
    const aboutInfo = document.createElement("p");
    aboutInfo.classList.add("aboutInfo");
    aboutInfo.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scio enim esse quosdam, qui quavis lingua philosophari"
    about.appendChild(aboutInfo);

// Menu

    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.innerHTML = "<h1>Menu</h1>";
    content.appendChild(menu);
// Menu Lists
    const columns = document.createElement("div")
    columns.classList.add("columns");
    menu.appendChild(columns)
// Left Menu
    const columnLeft = document.createElement("div");
    columnLeft.classList.add("columnLeft");
    columns.appendChild(columnLeft);
// Right Menu
    const columnRight = document.createElement("div");
    columnRight.classList.add("columnRight");
    columns.appendChild(columnRight);


// Adding to Menu (Left)
    const leftMenu = document.createElement('li');
    leftMenu.classList.add('leftMenu')
    leftMenu.textContent = "This is a new list item";
    columnLeft.appendChild(leftMenu);
// Adding to Menu (right)
    const rightMenu = document.createElement('li');
    rightMenu.classList.add("rightMenu");
    rightMenu.textContent = "This is a new list item";
    columnRight.appendChild(rightMenu);
}
// Footer

console.log('HELLO')
console.log('JOSH')