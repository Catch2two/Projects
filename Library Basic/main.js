// Prototypes
class Book {
  constructor(
    title = 'No title',
    author = 'No Author',
    pages = 0,
    isRead =  false
  ) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
  }
}
class Library {
  constructor() {
    this.books = []
  }

  addLibrary(newBook) {
    this.books.push(newBook)
  }
}
// CREATE BOOK CARD



// Modal Setup (UI)
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close")
const closeModalOverlay = document.querySelector(".overlay")
const submitBtn = document.querySelector('.btn submit')


const plusBookBtn = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

openModalBtn.addEventListener("click", plusBookBtn);
closeModalBtn.addEventListener("click", closeModal);
closeModalOverlay.addEventListener("click", closeModal);
closeModalOverlay.addEventListener("click", closeModal);

//Add Book Card to library

const createBookInput = () => {
  resetBookInput()
  for (let book of Library.books) {
    addBookCard(book)
  }
}

// Adding the HTML (Visual) of the New Book to Library

const addBookCard = (book) => {
  const bookCard = document.createElement('div')
  const title = document.createElement('p')
  const author =  document.createElement('p')
  const pages = document.createElement('p')

  bookCard.classList.add('')
}

// Animations
function animateInput() {
  document.getElementById('btn btn-open').className = 'classname';
}
