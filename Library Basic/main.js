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

addBook(book) {
  if (!this.isInArchives(book)) {
  archives.push(book);
  }
}
  isInArchives(book) {
    return this.archives.some((book) => book.title === book.title)
  }
}
  const library = new Library
  document.forms[0].reset();


// Local Saving & Submit button (To log into library)
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('addBookBtn').addEventListener('click', Library);
})