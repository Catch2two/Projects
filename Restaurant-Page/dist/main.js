window.onload=()=>{const t=document.querySelector("div#content"),e=document.createElement("div");e.classList.add("header"),e.textContent="Oogli McKobbler Jr's Outback Rib House",t.appendChild(e);const n=document.createElement("div");n.classList.add("about"),t.appendChild(n);const o=document.createElement("img");o.src="/src/img/food.png",n.appendChild(o);const d=document.createElement("p");d.classList.add("aboutInfo"),d.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scio enim esse quosdam, qui quavis lingua philosophari",n.appendChild(d);const c=document.createElement("div");c.classList.add("menu"),c.innerHTML="<h1>Menu</h1>",t.appendChild(c);const l=document.createElement("div");l.classList.add("columns"),c.appendChild(l);const i=document.createElement("div");i.classList.add("columnLeft"),l.appendChild(i);const a=document.createElement("div");a.classList.add("columnRight"),l.appendChild(a);for(let t=0;t<6;t++){const e=document.createElement("li");e.classList.add("leftMenu"),e.textContent=`Menu Entry ${t+1}`,i.appendChild(e)}for(let t=0;t<6;t++){const e=document.createElement("li");e.classList.add("rightMenu"),e.textContent=`Menu Entry ${t+1}`,a.appendChild(e)}const s=i.querySelectorAll("li"),r=a.querySelectorAll("li");s[0].textContent="Fish",s[1].textContent="Taco",s[2].textContent="Pizza",s[3].textContent="Soup",s[4].textContent="Burrito",s[5].textContent="Salad",r[0].textContent="Chicken",r[1].textContent="Potato",r[2].textContent="Bread",r[3].textContent="Chili",r[4].textContent="Burger",r[5].textContent="Turkey Burger"},console.log("HELLO"),console.log("JOSH");