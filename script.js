import {
  addBookToLibrary,
  addBookItem,
  Book,
  removeBookById,
  toogleRead,
  showBooks,
} from "./functions.js";

let myLibrary = [];
const myBooks = document.querySelector(".list-books");

const initBook1 = new Book("the hobbit", "tolkien", 152, true);
addBookToLibrary(myLibrary, initBook1);

const initBook2 = new Book("La Distinction", "Bourdieu", 563, false);
addBookToLibrary(myLibrary, initBook2);

showBooks(myLibrary, myBooks);
activeBtns();

function activeDelBtn() {
  const delButtons = document.querySelectorAll(".book-del-btn");
  delButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const bookId = event.target.getAttribute("data-id");
      removeBookById(myLibrary, bookId);
      showBooks(myLibrary, myBooks);
      activeBtns();
    });
  });
}

function activeReadBtn() {
  const delButtons = document.querySelectorAll(".book-read-btn");
  delButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const bookId = event.target.getAttribute("data-id");
      toogleRead(myLibrary, bookId);
      showBooks(myLibrary, myBooks);
      activeBtns();
    });
  });
}

function activeBtns() {
  activeDelBtn();
  activeReadBtn();
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const obj = Object.fromEntries(formData);
    const newBook = new Book(obj.title, obj.author, obj.pages, obj.read);
    addBookToLibrary(myLibrary, newBook);
    showBooks(myLibrary, myBooks);
    activeBtns();
  });
});
