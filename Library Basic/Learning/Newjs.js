/* eslint-disable no-unused-vars */
const myLibrary = []

function Book (title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}
function render () {
  const libraryCard = document.querySelector('#library')
  libraryCard.innerHTML = ''
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i]
    const bookCard = document.createElement('div')
    bookCard.innerHTML = `
    <div class="card-title">
      <h3 classs="title">${book.title}</h3>
      <h5 class="author">by ${book.author}</h5>
    </div>
    <div class="card-body">
      <p>${book.pages} pages</p>
      <p class="read-status">${book.read ? 'Read' : 'Not Read yet'}</p>
    </div>
    `
    libraryCard.appendChild(bookCard)
  }
}

function addBookToLibrary () {
  const title = document.querySelector('#title').value
  const author = document.querySelector('#author').value
  const pages = document.querySelector('#pages').value
  const read = document.querySelector('#read').value
  const newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)
  console.log(newBook)
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
