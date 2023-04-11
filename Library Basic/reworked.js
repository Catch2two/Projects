// Modal Setup (UI)
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const closeModalOverlay = document.querySelector(".overlay");


const plusBookBtn = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

// Open Input Form
openModalBtn.addEventListener("click", plusBookBtn);
closeModalBtn.addEventListener("click", closeModal);
closeModalOverlay.addEventListener("click", closeModal);
closeModalOverlay.addEventListener("click", closeModal);


// Animations
function animateInput() {
  document.getElementById('btn btn-open').className = 'classname';
}
// Book Prototype
class Book {
  constructor(
    title = '',
    author = '',
    pages = '',
    isRead = false
  ) {
    this.title =  title
    this.author = author
    this.pages = pages
    this.isRead = isRead
  }
}
// Book Library (Array)
class Library {
  constructor() {
    this.archives = [];
  }

addBook(newBook) {
  if (!this.isInArchives(newBook)) {
  archives.push(newBook);
  }
}
}

const library = new Library()


// Add Book UI

const createBookCard = (book) => {
  const bookCard = document.createElement('div')
  const title = document.createElement('p')
  const author = document.createElement('p')
  const pages = document.createElement('p')
  const buttonGroup = document.createElement('div')
  const readBtn = document.createElement('button')
  const removeBtn = document.createElement('button')

  addBookForm.onsubmit = addBook
}
const getBookFromInput = () => {
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const pages = document.getElementById('pages').value
  const isRead = document.getElementById('isRead').checked
  return new Book(title, author, pages, isRead)
}
const addBook = (e) => {
  e.preventDefault()
  const newBook = getBookFromInput()
}

// Local Saving & Submit button (To log into library)
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('addBookBtn').addEventListener('click', Library);
})

const saveLocal = () => {
  localStorage.setItem('library', JSON.stringify(library.books))
}