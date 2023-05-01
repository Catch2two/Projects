/* eslint-disable no-unused-vars */
const myLibrary = []
// Book Prototype
function Book (title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}
/* i = index (array[Library]) */
function render () {
  const libraryCard = document.querySelector('#library')
  // Start a Fresh input to the Index, instead of carrying over previous book aswell.
  libraryCard.innerHTML = ''
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i]
    const bookCard = document.createElement('div')
    bookCard.innerHTML = `
    <div class="card">
    <div class="card-title">
      <h3 classs="title">${book.title}</h3>
      <h5 class="author"><i>by ${book.author}</i></h5>
    </div>
    <div class="card-body">
      <p>${book.pages} pages</p>
      <p class="checkbox">${book.read ? 'Read' : 'Not Read yet'}</p>
      <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
      <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle</button>
    </div>
    </div
    `
    libraryCard.appendChild(bookCard)
  }
}

function addBookToLibrary () {
  const title = document.querySelector('#title').value
  const author = document.querySelector('#author').value
  const pages = document.querySelector('#pages').value
  const read = document.querySelector('#read').unchecked
  const newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)
  console.log(newBook)
}
/* Remove from Array and ReRender to Update HTML */
function removeBook (index) {
  myLibrary.splice(index, 1)
  render()
}

Book.prototype.toggleRead = function () {
  this.read = !this.read
}

function toggleRead (index) {
  myLibrary[index].toggleRead()
  render()
}

// Button to add to the DOM. Calls Render() and AddBooktoLibrary
document.querySelector('#bookInput').addEventListener('submit', function (event) {
  event.preventDefault()
  addBookToLibrary()
  render()
})

// --------------------------------------------------------------------------------------------------------
// Popup Model Form
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const openModalBtn = document.querySelector('.btn-open')
const closeModalBtn = document.querySelector('.btn-close')
const closeModalOverlay = document.querySelector('.overlay')
// Open Model Form
const plusBookBtn = () => {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}
// Close Model Form
const closeModal = () => {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}
// Open Input Form CLICK Listener
openModalBtn.addEventListener('click', plusBookBtn)
closeModalBtn.addEventListener('click', closeModal)
// Animations
function animateInput () {
  document.getElementById('btn btn-open').className = 'classname'
}
// --------------------------------------------------------------------------------------------------------
