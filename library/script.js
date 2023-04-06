const darkModeBtn = document.querySelector('.header__darkMode-btn');
const addBook = document.querySelector('.add__book');
const libraryBlock = document.querySelector('.all__books-block');
const searchInput = document.querySelector('.header__search');

let library = [];
let index = 1;

function Book(bookName, authorName, selection) {
  this.bookName = bookName;
  this.authorName = authorName;
  this.readed = selection === 'read' ? true : false;
  this.index = index;

  this.setReader = () => {
    this.readed = !this.readed;
  };
}

function addBookToLibrary(book) {
  index = index + 1;
  library.push(book);
}

function handleDarkMode() {
  darkModeBtn.classList.toggle('dark__mode-btn');
  document.body.classList.toggle('dark__mode');
}

function handleDeleteBook({ target }) {
  let index = parseInt(target.getAttribute('data-key'));
  if (index) {
    library = library.filter((book) => book.index !== index);

    updateBooks();
  }
}

function handleChangeReadBook({ target }) {
  let index = parseInt(target.getAttribute('data-book'));
  if (index) {
    let bookToRead = library.find((book) => book.index === index);
    bookToRead.setReader();

    library = library.map((book) => (book.index === index ? bookToRead : book));

    updateBooks();
  }
}

function handleAddBook(e) {
  e.preventDefault();
  let bookName = document.querySelector('.bookName');
  let authorName = document.querySelector('.authorName');
  let selection = document.querySelector('.bookReaded');

  if (!bookName.value || !authorName.value) return;

  let book = new Book(bookName.value, authorName.value, selection.value);
  addBookToLibrary(book);

  bookName.value = '';
  authorName.value = '';
  selection.value = 'read';

  updateBooks();
}

function handleSearch() {
  let searchValue = searchInput.value.toLowerCase();

  let filteredLibrary = library.filter((book) => {
    return (
      book.bookName.toLowerCase().includes(searchValue) ||
      book.authorName.toLowerCase().includes(searchValue)
    );
  });

  updateBooks(filteredLibrary);
}

function updateBooks(filteredLibrary = library) {
  libraryBlock.innerHTML = '';

  const booksHtml = filteredLibrary
    .map((book) => {
      return `
        <div class='book'>
          <p class='book-p'>Book: ${book.bookName}</p>
          <p class='book-p'>Author: ${book.authorName}</p>
          <button data-book="${book.index}" class='book-btn'>${
        book.readed ? 'Read' : 'Not read'
      }</button>
          <button data-key="${book.index}" class='book-delete__btn'>Delete</button>
        </div>
      `;
    })
    .join('');

  libraryBlock.innerHTML = booksHtml;
}

function init() {
  darkModeBtn.addEventListener('click', handleDarkMode);
  addBook.addEventListener('submit', handleAddBook);
  libraryBlock.addEventListener('click', handleDeleteBook);
  libraryBlock.addEventListener('click', handleChangeReadBook);
  searchInput.addEventListener('change', handleSearch);

  updateBooks();
}

init();
