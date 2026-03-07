export function addBookToLibrary(array, title, author, page, read) {
  const newBook = new Book(title, author, page, read);
  array.push(newBook);
}

export function addBookCard(title, author, page, read) {
  const li = document.createElement("li");
  li.classList.add("book-item");
  const div = document.createElement("div");
  li.appendChild(div);
  div.classList.add("book-card");
  const p = document.createElement("p");
  div.appendChild(p);
  p.classList.add("book-content");
  p.innerText = `${title} by ${author}, ${page} pages, ${read}.`;
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
