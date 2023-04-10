const parent = document.getElementById ('parent').lastElementChild
console.log(parent)

const parent2 = document.getElementById('parent').children[3]
console.log(parent2)

const secondchild = document.getElementById('secondchild')
console.log(secondchild)

console.log(secondchild.parentNode)

console.log(secondchild.nextElementSibling)

console.log(secondchild.previousElementSibling)


// Create the Element, add CONTENT to the Element, Show the element in DOM.
/*
const createEl = document.createElement('div')
console.log(createEl)

const innerhtml = createEl.innerHTML = 'i am a frontend developer'

// Now make it APPEAR

const parentE1 = document.getElementById('parent')

parentE1.appendChild(createEl)

console.log(parentEl)*/

// This lets you select where to put the DIV instead of at the last spot by Default.

const parentEl = document.getElementById('parent')
const firstchildEl = document.getElementById('firstchild')

const createEl = document.createElement('div')

const innerhtml = createEl.innerHTML = 'i am a frontend developer'

parentEl.insertBefore(createEl, firstchildEl)
  console.log(parentEl)

  // REPLACE a CHILD ELEMENT
  // document.replaceChild(newNode, existingNode)

/* parentEl.replaceChild(createEl, firstchildEl)
console.log(parentEl) */

// REMOVE CHILD
// document.removeChild(element)

parentEl.removeChild(firstchildEl)
console.log(parentE1)



// STYLE IN JS


const buttonEl = document.getElementById('master')
buttonEl.addEventListener('click', addFunction)

    function addFunction(){
        buttonEl.classList.add('button')
    }