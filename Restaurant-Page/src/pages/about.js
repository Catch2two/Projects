const about = function(){
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

export default about;