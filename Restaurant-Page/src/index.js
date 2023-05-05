window.onload = () => {
    const content = document.querySelector("div#content");
    // Header
    const header = document.createElement("div");
    header.classList.add("header");
    header.textContent = "Header";
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
    content.appendChild(menu);

  };

console.log('HELLO')
console.log('JOSH')