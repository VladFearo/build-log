````md
# Reading Log API

Date: 2026-05-03

## Goal

Build a small Express API for tracking books in a reading log.

## What it does

This project creates a basic HTTP server with Express. It stores a small list of books in memory and allows the user to:

- Get all books
- Get one book by ID
- Add a new book

The data is not saved to a database or file. It resets whenever the server restarts.

## File

`server.js`

## How to run

Install dependencies:

```bash
npm install
```
````

Start the server:

```bash
node server.js
```

The server runs on:

```txt
http://localhost:3000
```

## Routes

### GET /books

Returns all books.

Example:

```bash
curl http://localhost:3000/books
```

### GET /books/:id

Returns one book by ID.

Example:

```bash
curl http://localhost:3000/books/1
```

If the book is not found, the API returns:

```json
{
  "error": "Book not found"
}
```

with status `404`.

### POST /books

Adds a new book.

Example:

```bash
curl -X POST http://localhost:3000/books -H "Content-Type: application/json" -d "{\"title\":\"The Prince\",\"author\":\"Machiavelli\",\"finished\":true}"
```

Expected body:

```json
{
  "title": "The Prince",
  "author": "Machiavelli",
  "finished": true
}
```

Validation rules:

- `title` must be a non-empty string
- `author` must be a non-empty string
- `finished` must be a boolean

If the data is invalid, the API returns:

```json
{
  "error": "Invalid book data"
}
```

with status `400`.

If the data is valid, the API adds the book and returns the created book with status `201`.

## What was practiced

- Creating a basic Express server
- Using `express.json()` middleware
- Defining GET and POST routes
- Reading URL params with `req.params`
- Reading JSON body data with `req.body`
- Validating input
- Returning JSON responses
- Using HTTP status codes
- Mutating an in-memory array
