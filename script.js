import {
  addBookToLibrary,
  addBookCard,
  Book,
  removeBookById,
  removeLiBookById,
} from "./functions.js";

let myLibrary = [];
const myBooks = document.querySelector(".list-books");

const initBook1 = new Book("the hobbit", "tolkien", 152, true);
addBookToLibrary(
  myLibrary,
  initBook1.title,
  initBook1.author,
  initBook1.page,
  initBook1.read,
);
myBooks.appendChild(
  addBookCard(
    initBook1.title,
    initBook1.author,
    initBook1.page,
    initBook1.read,
    initBook1.id,
  ),
);
const initBook2 = new Book("La Distinction", "Bourdieu", 563, false);
addBookToLibrary(
  myLibrary,
  initBook2.title,
  initBook2.author,
  initBook2.page,
  initBook2.read,
);
myBooks.appendChild(
  addBookCard(
    initBook2.title,
    initBook2.author,
    initBook2.page,
    initBook2.read,
    initBook2.id,
  ),
);

function activeDelBtn() {
  const delButtons = document.querySelectorAll(".book-del-btn");
  delButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const bookId = e.target.getAttribute("data-id");
      myLibrary = removeBookById(myLibrary, bookId);
      removeLiBookById(e);
    });
  });
}
activeDelBtn();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const obj = Object.fromEntries(formData);
    const newBook = new Book(obj.title, obj.author, obj.pages, obj.read);
    myBooks.appendChild(
      addBookCard(
        newBook.title,
        newBook.author,
        newBook.page,
        newBook.read,
        newBook.id,
      ),
    );
    activeDelBtn();
  });
});
