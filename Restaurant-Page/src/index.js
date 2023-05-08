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
//
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


// Adding to Menu List (Left)
function addMenuList() {}
for (let i = 0; i < 6; i++) {
    const leftMenu = document.createElement('li');
    leftMenu.classList.add('leftMenu')
    leftMenu.textContent = `Menu Entry ${i + 1}`;
    columnLeft.appendChild(leftMenu);
  }
// Adding to Menu List (right)
for (let j = 0; j < 6; j++) {
    const rightMenu = document.createElement('li');
    rightMenu.classList.add('rightMenu')
    rightMenu.textContent = `Menu Entry ${j + 1}`;
    columnRight.appendChild(rightMenu);
  }
const listItemsL = columnLeft.querySelectorAll('li');
const listItemsR = columnRight.querySelectorAll('li');
// Left
listItemsL[0].textContent = "Fish";
listItemsL[1].textContent = "Taco";
listItemsL[2].textContent = "Pizza";
listItemsL[3].textContent = "Soup";
listItemsL[4].textContent = "Burrito";
listItemsL[5].textContent = "Salad";
// Right
listItemsR[0].textContent = "Chicken";
listItemsR[1].textContent = "Potato";
listItemsR[2].textContent = "Bread";
listItemsR[3].textContent = "Chili";
listItemsR[4].textContent = "Burger";
listItemsR[5].textContent = "Turkey Burger";
}
// Footer

console.log('HELLO')
console.log('JOSH')