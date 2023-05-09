// Pages
import banner from "./pages/banner";
import home from "./pages/home";
import menu from "./pages/menu";
import about from "./pages/about";
init()

// Banner Buttons
function navButtons(){
    const homeBtn = document.getElementsByClassName('homeButton') 

    homeBtn.addEventListener('click', home)
}

function init() {
    banner()
    
}

// Test
/*
banner()
about()
menu()
home()*/
console.log("Hi")
console.log("josh")

