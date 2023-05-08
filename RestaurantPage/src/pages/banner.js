const banner = function(){
    const content = document.querySelector("#content");

    const banner = document.createElement("div")
    banner.classList.add("banner")
    content.appendChild(banner)
    console.log("Banner")

    const bannerInfo = document.createElement("p");
    bannerInfo.classList.add("bannerInfo");
    bannerInfo.innerHTML = "<h1>About Us</h1>"
    banner.appendChild(bannerInfo);
}

export default banner;