const myLibrary = [];

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

console.log(myLibrary);
addBookToLibrary("the hobbit", "tolkien", 152, true);
addBookToLibrary("La Distinction", "Bourdieu", 563, false);

console.log(myLibrary);
