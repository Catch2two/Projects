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

// Storage (The Library that stores the books)
class Library {
  constructor() {
    this.books = []  // Create Array of Added Books
  }

  addLibrary(newBook) {
    if (!this.isInLibrary(newBook)) {
      this.books.push(newBook)
    }
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title)
  }
}

const library = new Library()




// Modal Setup (UI)
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const closeModalOverlay = document.querySelector(".overlay");
const submitBtn = document.querySelector('.btn submit');
const booksGrid = document.querySelector('.books-grid');


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
  const buttonDiv = document.createElement('div')
  const haveReadBtn = document.createElement('button')
  const removeBookBtn = document.createElement('button')


  bookCard.classList.add('book-card')
  buttonDiv.classList.add('button-div')
  haveReadBtn.onclick = toggleRead
  removeBookBtn.onclick = removeBook

  title.textContent = `"${book.title}"`
  author.textContent = book.author
  pages.textContent = `${book.pages} pages`
  removeBookBtn.textContent = 'Remove'

// Appending to HTML

  bookCard.append(title)
  bookCard.append(author)
  bookCard.append(pages)
  buttonDiv.append(haveReadBtn)
  buttonDiv.append(removeBookBtn)
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


// Animations
function animateInput() {
  document.getElementById('btn btn-open').className = 'classname';
}
