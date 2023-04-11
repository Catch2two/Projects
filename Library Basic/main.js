"use strict";

const libraryContainer = document.querySelector("#libraryContainer");
const libraryCard = document.querySelector(".library");
const submitBtn = document.getElementById("#submitBtn")


let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  }
}

function addBook (i) {
  let bookCard = document.createElement("div");
  bookCard.classList.add("book")
  bookCard.setAttribute("data-index", `${i}`);

  const title = document.getElementById("title").value;
  let bookTitle = document.createElement("h2");
  bookTitle.setAttribute(`Title: ${title}`);

  const author = document.getElementById("author").value;
  let bookAuthor = document.createElement("p");
  bookAuthor.setAttribute(`Author: ${author}`);

  const pages = document.getElementById("pages").value;
  let bookPages = document.createElement("p");
  bookPages.setAttribute(`Pages: ${pages}`);

  const read = document.getElementById("read").value;
  let bookRead = document.createElement("p");
  bookRead.innerHTML = `Did you Read this book?: ${read}`;

  let statusUpdate = document.createElement("button");
  statusUpdate.classList = "update";
  statusUpdate.innerHTML =  `Update`;

  let deleteBook = document.createElement("button");
  deleteBook.classList = "delete";
  deleteBook.innerHTML = `Delete`

  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPages);
  bookCard.appendChild(bookRead);
  bookCard.appendChild(statusUpdate);
  bookCard.appendChild(deleteBook);
}
//--------------------------------------------------------------------------------------------------------
// Popup Model Form
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const closeModalOverlay = document.querySelector(".overlay");

// Open Model Form
const plusBookBtn = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
// Close Model Form
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

// Open Input Form CLICK Listener
openModalBtn.addEventListener("click", plusBookBtn);
closeModalBtn.addEventListener("click", closeModal);



// Animations
function animateInput() {
  document.getElementById('btn btn-open').className = 'classname';
}
//--------------------------------------------------------------------------------------------------------