const myLibrary = [];

function Book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read ? "read" : " not read yet";
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.page} pages, ${this.read}.`;
  };
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}

const theHobbit = new Book("the hobbit", "tolkien", 152, true);

console.log(theHobbit.info());
