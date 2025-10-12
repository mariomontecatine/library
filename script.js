const myLibrary = [];

function Book(title, author, pages) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.pages = pages;
  this.title = title;
  this.author = author;
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
  
}
