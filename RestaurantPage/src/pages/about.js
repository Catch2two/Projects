const about = function(){
    const content = document.querySelector("#content");

    // About Div
    const about = document.createElement("div");
    about.classList.add("about");
    content.appendChild(about);

    const title = document.createElement('h1');
    title.classList.add("title");
    title.textContent = 'About Us'

    about.appendChild(title)
    // About Img
    const img = document.createElement("img");
    img.src = "/src/assets/food.png";
    about.appendChild(img);

    // About Info
    const aboutInfo = document.createElement("p");
    aboutInfo.classList.add("aboutInfo");
    aboutInfo.innerHTML = 
    "<p>We love to cook. There is not just one kind of cooking we love, we do it all.</p>"
    about.appendChild(aboutInfo);

    // 
}

export default about;