export function addBookToLibrary(array, title, author, page, read) {
  const newBook = new Book(title, author, page, read);
  array.push(newBook);
}

export function addBookCard(title, author, page, read, id) {
  const li = document.createElement("li");
  li.classList.add("book-item");
  const div = document.createElement("div");
  li.appendChild(div);
  div.classList.add("book-card");
  const pTitle = document.createElement("p");
  div.appendChild(pTitle);
  pTitle.classList.add("book-title");
  pTitle.innerText = `${title}`;
  const pAuthor = document.createElement("p");
  div.appendChild(pAuthor);
  pAuthor.classList.add("book-author");
  pAuthor.innerText = `by ${author}`;
  const pPage = document.createElement("p");
  div.appendChild(pPage);
  pPage.classList.add("book-page");
  pPage.innerText = `${page} pages`;
  const pRead = document.createElement("p");
  div.appendChild(pRead);
  pRead.classList.add("book-read");
  pRead.innerText = `${read}`;
  const delBtn = document.createElement("button");
  div.appendChild(delBtn);
  delBtn.classList.add("book-del-btn");
  delBtn.innerText = `Delete book`;
  delBtn.setAttribute("data-id", id);
  return li;
}

export function Book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read ? "read" : " not read yet";
  this.id = crypto.randomUUID();
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.page} pages, ${this.read}.`;
  };
}
