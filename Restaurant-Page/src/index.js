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
    aboutInfo.innerHTML = "We make all kinds of Okay foods..."
    about.appendChild(aboutInfo);
}
// Footer

console.log('HELLO')
console.log('JOSH')