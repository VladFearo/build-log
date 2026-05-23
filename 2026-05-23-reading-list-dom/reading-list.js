const form = document.querySelector("#book-form");
const bookInput = document.querySelector("#book-input");
const errorText = document.querySelector("#error-text");
const counterText = document.querySelector("#counter-text");
const bookList = document.querySelector("#book-list");

const books = [];

function renderBooks() {
  bookList.innerHTML = "";

  for (const title of books) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      const idx = books.findIndex((t) => t === title);
      books.splice(idx, 1);
      renderBooks();
    });
    li.textContent = title;
    li.append(" ", deleteButton);
    bookList.append(li);
  }
  counterText.textContent = `Number of books: ${books.length}`;
}

function resetForm() {
  bookInput.value = "";
  errorText.textContent = "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = bookInput.value.trim();

  if (title !== "") {
    books.push(title);
    renderBooks();
    resetForm();
  } else {
    errorText.textContent = "Title can't be empty";
  }
});

renderBooks();
