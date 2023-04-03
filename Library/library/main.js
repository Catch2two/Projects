/* eslint-disable array-callback-return */
const books = document.querySelector('.books');
const myLibrary = [{
  title: 'book1',
  author: 'author',
  pages: 666,
  read: true,
},
{
  title: 'book Two',
  author: 'author Bob',
  pages: 626,
  read: false,
},
];

function createBookElement(el, content, className) {
  const element = document.createElement(el);
  element.textContent = content;
  element.setAttribute('class', className);
  return element;
}

function createBookItem(book, index) {
  const bookItem = document.createElement('div');
  bookItem.setAttribute('id', index);
  bookItem.setAttribute('key', index);
  bookItem.setAttribute('class', 'books cards');
  bookItem.appendChild(
    createBookElement('h1', `Title: ${book.title}`, 'book-title'),
  ); // template literal `${}`, also this creates the element on DOM

  bookItem.appendChild(
    createBookElement('h1', `Author: ${book.author}`, 'book-author'),
  );
  bookItem.appendChild(
    createBookElement('h1', `Pages: ${book.pages}`, 'book-pages'),
  );
}

function renderBooks() {
  books.textConent = '';
  myLibrary.map((book, index) => {
    createBookItem(book, index);
  });
}

// call renderBooks
renderBooks();
