/* eslint-disable no-unused-vars */
// array of books in library
const myLibrary = [];
// Start at 0 for myLibrary Array
let i = 0;
// Book Prototype
class Book {
constructor(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}
}
/* i = index (array[Library]) */
class Library {
    constructor() {
        this.books = [];
    }

    addBook (title, author, pages, read) {
        this.books.push (new Book(title, author, pages, read));
    }
}

function render () {
    const libraryCard = document.querySelector('#library')
    // Start a Fresh input to the Index, instead of carrying over previous book aswell.
    libraryCard.innerHTML = ''
    // Use for...of
    for (const book of myLibrary) {
        const bookCard = document.createElement('div');
        bookCard.innerHTML = 
        `
        <div class="card">
            <div class="card-title">
                <h3 classs="title">${book.title}</h3>
                <h5 class="author"><i>by ${book.author}</i></h5>
            </div>
            <div class="card-body">
            <p>${book.pages} pages</p>
                <p class="checkbox">${book.read ? 'Read' : 'Not Read yet'}</p>
                <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
                <button class="toggle-read-btn" onclick="toggleRead(${book.i})">Toggle</button>
            </div>
        </div
        `;
        libraryCard.appendChild(bookCard);
  }
}
const books = [];

/* LibraryCard Functions */
function removeBook(i) {
    myLibrary.splice(i, 1)
    render()
}
function toggleRead(i) {
  const book = myLibrary.find(b => b.id === i);
  book.read = !book.read;
  render();
}
/* Form Input */
const bookInput = document.querySelector('#bookInput');

const addBookToLibrary = () => {
  const title = document.querySelector('#title').value
  const author = document.querySelector('#author').value
  const pages = document.querySelector('#pages').value
  const read = document.querySelector('#read').unchecked

  // Check if all of the required fields are filled out
  if (title === '' || author === '' || pages === '') {
    alert('Please fill out all of the required fields.');
    return;
    }
  
  // New Book Object
  const book = new Book(title, author, pages, read);
  // Add book to Library
  myLibrary.push(book);
  // Render to Library
  render();
};

// Button to add to the DOM. Calls Render() and AddBooktoLibrary
document.querySelector('#bookInput').addEventListener('submit', function (event) {
    event.preventDefault()
    addBookToLibrary()
    render()
    closeModal()
      // Clear the form fields.
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  });

// --------------------------------------------------------------------------------------------------------
// Popup Model Form Functionality
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
