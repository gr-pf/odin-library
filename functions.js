/**
 *
 * @param {array} library
 * @param {Book} Book
 */
export function addBookToLibrary(library, Book) {
  library.push(Book);
}

/**
 *
 * @param {Book} Book
 * @returns {HTMLElement}
 */
export function addBookItem(Book) {
  const li = document.createElement("li");
  li.classList.add("book-item");
  const pTitle = document.createElement("p");
  li.appendChild(pTitle);
  pTitle.classList.add("book-title");
  pTitle.innerText = `${Book.title}`;
  const pAuthor = document.createElement("p");
  li.appendChild(pAuthor);
  pAuthor.classList.add("book-author");
  pAuthor.innerText = `by ${Book.author}`;
  const pPage = document.createElement("p");
  li.appendChild(pPage);
  pPage.classList.add("book-page");
  pPage.innerText = `${Book.page} pages`;
  const pRead = document.createElement("p");
  li.appendChild(pRead);
  pRead.classList.add("book-read");
  pRead.innerText = `${Book.read}`;
  const spanBtn = document.createElement("span");
  li.appendChild(spanBtn);
  spanBtn.classList.add("btn-wrapper");
  const delBtn = document.createElement("button");
  spanBtn.appendChild(delBtn);
  delBtn.classList.add("book-del-btn");
  delBtn.innerText = `Delete`;
  delBtn.setAttribute("data-id", Book.id);
  const readBtn = document.createElement("button");
  spanBtn.appendChild(readBtn);
  readBtn.classList.add("book-read-btn");
  readBtn.innerText = `Read`;
  readBtn.setAttribute("data-id", Book.id);
  return li;
}

export class Book {
  /**
   *
   * @param {string} title
   * @param {string} author
   * @param {number} page
   * @param {?string} read
   */
  constructor(title, author, page, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read ? "read" : "not read yet";
    this.id = crypto.randomUUID();
  }

  /**
   *
   * @returns {string}
   */
  info() {
    return `${this.title} by ${this.author}, ${this.page} pages, ${this.read}.`;
  }

  /**
   *
   * @returns {string}
   */
  toggleRead() {
    this.read = this.read === "not read yet" ? "read" : "not read yet";
  }
}

/**
 *
 * @param {array} myLibrary
 * @param {HTMLElement} ListBooks
 */
export function showBooks(myLibrary, ListBooks) {
  ListBooks.innerHTML = "";
  for (let book of myLibrary) {
    ListBooks.appendChild(addBookItem(book));
  }
}

/**
 *
 * @param {array} myLibrary
 * @param {string} id
 */
export function removeBookById(myLibrary, id) {
  const index = myLibrary.findIndex((book) => book.id === id);
  myLibrary.splice(index, 1);
}

/**
 *
 * @param {array} myLibrary
 * @param {string} id
 */
export function toogleRead(myLibrary, id) {
  const index = myLibrary.findIndex((book) => book.id === id);
  myLibrary[index].read =
    myLibrary[index].read === "read" ? "not read yet" : "read";
}
