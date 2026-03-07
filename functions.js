export function addBookCard(title, author, page, read) {
  const li = document.createElement("li");
  li.classList.add("book-item");
  const div = document.createElement("div");
  div.classList.add("book-card");
  const p = document.createElement("p");
  p.classList.add("book-content");
  p.innerText = `${title} by ${author}, ${page} pages, ${read}.`;
  return li;
}
