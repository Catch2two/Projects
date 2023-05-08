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

export default banner;