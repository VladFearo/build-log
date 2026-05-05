````md
# Books API

A small Express.js REST API for managing a list of books.

This project uses an in-memory array, so all data resets when the server restarts.

## Features

- Get all books
- Get one book by ID
- Add a new book
- Partially update an existing book
- Delete a book
- Basic validation for request bodies

## Tech Used

- Node.js
- Express.js

## Setup

Install dependencies:

```bash
npm install
```
````

Start the server:

```bash
node server.js
```

The server runs at:

```txt
http://localhost:3000
```

## Data Shape

Each book has this structure:

```js
{
  id: 1,
  title: "Stoner",
  author: "John Williams",
  finished: true
}
```

## Routes

### GET /books

Returns all books.

Example:

```bash
GET /books
```

### GET /books/:id

Returns one book by ID.

Example:

```bash
GET /books/1
```

If the book does not exist:

```json
{
  "error": "Book not found"
}
```

### POST /books

Creates a new book.

Required fields:

- `title` must be a non-empty string
- `author` must be a non-empty string
- `finished` must be a boolean

Example body:

```json
{
  "title": "The Old Man and the Sea",
  "author": "Ernest Hemingway",
  "finished": true
}
```

Invalid body response:

```json
{
  "error": "Invalid book data"
}
```

### PATCH /books/:id

Partially updates an existing book.

Allowed fields:

- `title`
- `author`
- `finished`

Example body:

```json
{
  "finished": false
}
```

Invalid field examples:

```json
{
  "title": ""
}
```

```json
{
  "finished": "yes"
}
```

Possible error responses:

```json
{
  "error": "Book not found"
}
```

```json
{
  "error": "Invalid title"
}
```

```json
{
  "error": "Invalid author"
}
```

```json
{
  "error": "Invalid finished"
}
```

### DELETE /books/:id

Deletes a book by ID.

Successful response:

```txt
204 No Content
```

If the book does not exist:

```json
{
  "error": "Book not found"
}
```

## PowerShell Test Commands

Get all books:

```powershell
Invoke-RestMethod http://localhost:3000/books
```

Get one book:

```powershell
Invoke-RestMethod http://localhost:3000/books/1
```

Create a book:

```powershell
Invoke-RestMethod -Method Post -Uri "http://localhost:3000/books" -ContentType "application/json" -Body '{"title":"The Old Man and the Sea","author":"Ernest Hemingway","finished":true}'
```

Update a book:

```powershell
Invoke-RestMethod -Method Patch -Uri "http://localhost:3000/books/1" -ContentType "application/json" -Body '{"finished":false}'
```

Delete a book:

```powershell
Invoke-RestMethod -Method Delete -Uri "http://localhost:3000/books/1"
```

## What I Practiced

- Creating Express routes
- Reading route parameters with `req.params`
- Reading JSON bodies with `req.body`
- Returning status codes like `201`, `400`, `404`, and `204`
- Validating request data
- Using `findIndex`
- Updating objects with spread syntax
- Deleting array items with `splice`
- Testing API routes from PowerShell
