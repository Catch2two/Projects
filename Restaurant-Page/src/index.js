// Style Sheets
import "./styles/home.css";
import "./styles/menu.css";
import "./styles/header.css";
import "./styles/about.css";
// Pages
import home from "./pages/home";
import menu from "./pages/menu";
import about from "./pages/about";
// functions
import render from "/functions/render";

const menuBtn = document.createElement("button")

menuBtn.addEventListener('click', function(){
    render()
    home()
});

console.log('HELLO')
console.log('JOSH')