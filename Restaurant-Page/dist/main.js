window.onload=()=>{const e=document.querySelector("div#content"),t=document.createElement("div");t.classList.add("header"),t.textContent="Oogli McKobbler Jr's Outback Rib House",e.appendChild(t);const n=document.createElement("div");n.classList.add("about"),e.appendChild(n);const d=document.createElement("img");d.src="/src/img/food.png",n.appendChild(d);const s=document.createElement("p");s.classList.add("aboutInfo"),s.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scio enim esse quosdam, qui quavis lingua philosophari",n.appendChild(s);const i=document.createElement("div");i.classList.add("menu"),i.innerHTML="<h1>Menu</h1>",e.appendChild(i);const c=document.createElement("div");c.classList.add("columns"),i.appendChild(c);const o=document.createElement("div");o.classList.add("columnLeft"),c.appendChild(o);const a=document.createElement("div");a.classList.add("columnRight"),c.appendChild(a);const l=document.createElement("li");l.classList.add("leftMenu"),l.textContent="This is a new list item",o.appendChild(l);const m=document.createElement("li");m.classList.add("rightMenu"),m.textContent="This is a new list item",a.appendChild(m)},console.log("HELLO"),console.log("JOSH");