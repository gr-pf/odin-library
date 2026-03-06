const myLibrary = [];
const myBooks = document.querySelector(".list-books");

function Book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read ? "read" : " not read yet";
  this.id = crypto.randomUUID();
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.page} pages, ${this.read}.`;
  };
}

function addBookToLibrary(title, author, page, read) {
  const newBook = new Book(title, author, page, read);
  myLibrary.push(newBook);
}

addBookToLibrary("the hobbit", "tolkien", 152, true);
addBookToLibrary("La Distinction", "Bourdieu", 563, false);

function showBooks() {
  for (let book of myLibrary) {
    console.log(book.title);
  }
}

showBooks();
//console.log(myLibrary[0].title);

const list = document.createElement("li");
const para = document.createElement("p");

myBooks.appendChild(list);
list.appendChild(para);
para.innerText = myLibrary[0].title;
