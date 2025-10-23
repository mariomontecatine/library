const myLibrary = [];

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this._read = false;

    this.id = crypto.randomUUID();
  }

  toggleRead() {
    this._read = !this._read;
  }

  get readStatus() {
    return this._read ? "Read" : "Not read";
  }

  set read(value) {
    if (typeof value === "boolean") {
      this._read = value;
    }
  }
}

const book1 = new Book("El Quijote", "Miguel de Cervantes", 537);
const book2 = new Book("Cien Años de Soledad", "Gabriel García Márquez", 496);
const book3 = new Book(
  "Breves Respuestas a las Grandes Preguntas",
  "Stephen Hawking",
  256
);

myLibrary.push(book1, book2, book3);
displayBooks();

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = parseInt(document.getElementById("pages").value);

  const book = new Book(title, author, pages);
  myLibrary.push(book);

  displayBooks();

  document.getElementById("formulario").closest("dialog").close(); // cierra el dialog
  document.getElementById("formulario").reset(); // limpia el formulario
}

function displayBooks() {
  const booksContainer = document.getElementById("books-container");
  booksContainer.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.id = book.id;

    const titleElem = document.createElement("h3");
    titleElem.textContent = book.title;

    const authorElem = document.createElement("p");
    authorElem.textContent = `Author: ${book.author}`;

    const pagesElem = document.createElement("p");
    pagesElem.textContent = `Pages: ${book.pages}`;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");

    const trashLogo = document.createElement("img");
    trashLogo.classList.add("logo");
    trashLogo.src = "library/images/trash-fill.svg";
    trashLogo.alt = "Delete";

    const readButton = document.createElement("button");
    readButton.textContent = book.readStatus;
    readButton.classList.add("readButton");

    readButton.addEventListener("click", () => {
      book.toggleRead(); // Cambia el estado
      displayBooks(); // Re-renderiza la lista
    });
    readButton.classList.add("readButton");

    deleteButton.appendChild(trashLogo);
    deleteButton.addEventListener("click", () => {
      const index = myLibrary.findIndex((b) => b.id === book.id);
      if (index > -1) {
        myLibrary.splice(index, 1);
      }
      displayBooks();
    });
    bookDiv.appendChild(titleElem);
    bookDiv.appendChild(authorElem);
    bookDiv.appendChild(pagesElem);
    bookDiv.appendChild(deleteButton);
    bookDiv.appendChild(readButton);

    booksContainer.appendChild(bookDiv);
  });
}
