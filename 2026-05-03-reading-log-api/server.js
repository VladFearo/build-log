const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

const books = [
  { id: 1, title: "Stoner", author: "John Williams", finished: true },
  {
    id: 2,
    title: "Beyond Good and Evil",
    author: "Nietzsche",
    finished: false,
  },
];

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim() !== "";
}

function isBoolean(value) {
  return typeof value === "boolean";
}
app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  const numberId = Number(id);
  const found = books.find((book) => book.id === numberId);
  if (found) {
    res.json(found);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});

app.post("/books", (req, res) => {
  const { title, author, finished } = req.body;
  if (
    isNonEmptyString(title) &&
    isNonEmptyString(author) &&
    isBoolean(finished)
  ) {
    const nextId = books.length + 1;
    const newBook = {
      id: nextId,
      title,
      author,
      finished,
    };
    books.push(newBook);
    res.status(201).json(newBook);
  } else {
    res.status(400).json({ error: "Invalid book data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
