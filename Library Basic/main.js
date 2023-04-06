// Modal Setup (UI)
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close")

const addBook = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};


openModalBtn.addEventListener("click", addBook);
closeModalBtn.addEventListener("click", closeModal)

// Add to Library Structure

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

// Card Actions

class Library {
  constructor() {
    this.book = []
  }

  addBook(newBook) {
    if (!this.isInLibrary(newBook)) {
      this.books.push(newBook)
    }
  }

  deleteBook(title) {
    this.books = this.books.filter
    ((book) => book.title !== title)
  }

  getBook(title) {
    return this.books.find
    ((book) => book.title === newBook.title)
  }
/* The some() method tests whether at least one element in the array passes 
the test implemented by the provided function. It returns true if, in 
the array, it finds an element for which the provided function returns true;
 otherwise it returns false. It doesn't modify the array. */
 
  isInLibrary(newBook) {
    return this.books.some
    ((book.title === newBook.title))
  }
}