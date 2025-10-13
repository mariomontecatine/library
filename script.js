const myLibrary = [];

function Book(title, author, pages) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;

  this.id = crypto.randomUUID();
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;

  const book = new Book(title, author, pages);
  myLibrary.push(book);

  console.log('Añadido:', book);
  console.log(`${myLibrary}`);
}
