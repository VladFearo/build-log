const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.json());

function loadBooks() {
  try {
    const data = fs.readFileSync("books.json", "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading books.json:", error.message);
    return [];
  }
}

let books = loadBooks();

function saveBooks() {
  try {
    const data = JSON.stringify(books, null, 2);
    fs.writeFileSync("books.json", data);
  } catch (error) {
    console.error("Error writing to books.json:", error.message);
  }
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim() !== "";
}

function isBoolean(value) {
  return typeof value === "boolean";
}

function findBook(id) {
  const numberId = Number(id);
  const bookIdx = books.findIndex((book) => book.id === numberId);
  const book = books[bookIdx];
  return [book, bookIdx];
}
app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const [book, bookIdx] = findBook(req.params.id);
  if (bookIdx !== -1) {
    res.json(book);
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
    const nextId =
      books.length === 0 ? 1 : Math.max(...books.map((book) => book.id)) + 1;
    const newBook = {
      id: nextId,
      title,
      author,
      finished,
    };
    books.push(newBook);
    saveBooks();
    res.status(201).json(newBook);
  } else {
    res.status(400).json({ error: "Invalid book data" });
  }
});

app.patch("/books/:id", (req, res) => {
  const [book, bookIdx] = findBook(req.params.id);

  if (bookIdx === -1) {
    return res.status(404).json({ error: "Book not found" });
  }

  const { title, author, finished } = req.body;
  const updates = {};

  if (title !== undefined) {
    if (!isNonEmptyString(title)) {
      return res.status(400).json({ error: "Invalid title" });
    }

    updates.title = title;
  }

  if (author !== undefined) {
    if (!isNonEmptyString(author)) {
      return res.status(400).json({ error: "Invalid author" });
    }

    updates.author = author;
  }

  if (finished !== undefined) {
    if (!isBoolean(finished)) {
      return res.status(400).json({ error: "Invalid finished" });
    }

    updates.finished = finished;
  }
  if (Object.keys(updates).length === 0) {
    return res.status(400).json({ error: "No valid fields to update" });
  }
  books[bookIdx] = { ...book, ...updates };
  saveBooks();
  res.json(books[bookIdx]);
});

app.delete("/books/:id", (req, res) => {
  const [, bookIdx] = findBook(req.params.id);

  if (bookIdx === -1) {
    return res.status(404).json({ error: "Book not found" });
  }

  books.splice(bookIdx, 1);
  saveBooks();
  res.status(200).json({ message: "Book deleted succesfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
