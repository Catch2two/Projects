/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
const myLibrary = [
  {
    title: 'Test Book',
    author: 'Joe Bob',
    pages: 666,
    read: false,
  },
];

// DOM Objects
$newButton = document.querySelector('.new');
$table = document.querySelector('.table');
$tbody = document.querySelector('tbody');

function Book(title, author, pages, read) {
  // constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const title = $titleInput.value;
  const author = $authorInput.value;
  const pages = $pagesInput.value;
  const read = getReadValue();
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  // do stuff
}
