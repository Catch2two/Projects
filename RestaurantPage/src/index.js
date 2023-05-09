// Pages
import home from "./pages/home";
import menu from "./pages/menu";
import about from "./pages/about";

// Banner Buttons
const banner = function(){
    const content = document.querySelector("#content");

    const banner = document.createElement("div")
    banner.classList.add("banner")
    content.appendChild(banner)
    console.log("Banner")

    const bannerTitle = document.createElement("p");
    bannerTitle.classList.add("bannerTitle");
    bannerTitle.innerHTML = "<h1>Marv McRubaton Nightly Meat Market</h1>"
    banner.appendChild(bannerTitle);
}
// Buttons
function buttons() {
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttonContainer");
    content.appendChild(buttonContainer);

    const homeButton = document.createElement("button");
    homeButton.classList.add("homeButton");
    homeButton.innerText = "Home";
    buttonContainer.appendChild(homeButton);

    
    const aboutButton = document.createElement("button");
    aboutButton.classList.add("aboutButton");
    aboutButton.innerText = "About Us";
    buttonContainer.appendChild(aboutButton);

    
    const menuButton = document.createElement("button");
    menuButton.classList.add("menuButton");
    menuButton.innerText = "Menu";
    buttonContainer.appendChild(menuButton);
}

function init() {
    banner()
    buttons()
}

// Always load Banner on every page
document.addEventListener("DOMContentLoaded", init);


// Test
/*
about()
menu()
home()
console.log("Hi")
console.log("josh")

*/