export function addBookToLibrary(array, title, author, page, read) {
  const newBook = new Book(title, author, page, read);
  array.push(newBook);
}

export function addBookItem(title, author, page, read, id) {
  const li = document.createElement("li");
  li.classList.add("book-item");
  const pTitle = document.createElement("p");
  li.appendChild(pTitle);
  pTitle.classList.add("book-title");
  pTitle.innerText = `${title}`;
  const pAuthor = document.createElement("p");
  li.appendChild(pAuthor);
  pAuthor.classList.add("book-author");
  pAuthor.innerText = `by ${author}`;
  const pPage = document.createElement("p");
  li.appendChild(pPage);
  pPage.classList.add("book-page");
  pPage.innerText = `${page} pages`;
  const pRead = document.createElement("p");
  li.appendChild(pRead);
  pRead.classList.add("book-read");
  pRead.innerText = `${read}`;
  const spanBtn = document.createElement("span");
  li.appendChild(spanBtn);
  spanBtn.classList.add("btn-wrapper");
  const delBtn = document.createElement("button");
  spanBtn.appendChild(delBtn);
  delBtn.classList.add("book-del-btn");
  delBtn.innerText = `Delete`;
  delBtn.setAttribute("data-id", id);
  const readBtn = document.createElement("button");
  spanBtn.appendChild(readBtn);
  readBtn.classList.add("book-read-btn");
  readBtn.innerText = `Read`;
  readBtn.setAttribute("data-id", id);
  return li;
}

export function Book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read ? "read" : "not read yet";
  this.id = crypto.randomUUID();
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.page} pages, ${this.read}.`;
  };
  this.toggleRead = function () {
    this.read = this.read === "not read yet" ? "read" : "not read yet";
  };
}

export function delBook(event) {
  const bookToDel = document.querySelector("");
  event.target.parentElement;
}

export function removeBookById(array, id) {
  return array.filter((Book) => {
    return Book.id !== id;
  });
}

export function removeLiBookById(event) {
  event.target.parentElement.parentElement.remove();
}
