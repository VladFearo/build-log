# Count By Status

Date: 2026-04-27

## Goal

Build a small JavaScript utility that counts how many tasks belong to each status.

## What it does

The script takes an array of task objects and returns an object where each key is a task status and each value is the number of tasks with that status.

Example:

```js
{
  done: 2,
  pending: 2,
  skipped: 1
}
```

## Main features

- Counts tasks by their `status` field
- Ignores tasks with missing, empty, or invalid statuses
- Trims extra spaces around statuses
- Normalizes statuses to lowercase
- Sorts the final result from highest count to lowest count
- Returns an empty object if no valid statuses are found

## File

```txt
countByStatus.js
```

## Functions

### `countByStatus(tasks)`

Loops through the task list, validates each task’s status, normalizes it, and builds a counter object.

### `sortCounter(counter)`

Converts the counter object into entries, sorts them by count descending, and converts the result back into an object.

## What was practiced

- Looping through arrays of objects
- Object-based counting
- Bracket notation for dynamic object keys
- Input validation
- String cleanup with `trim()`
- Case normalization with `toLowerCase()`
- Sorting object entries
- Rebuilding objects with `Object.fromEntries()`

## Example input

```js
const tasks = [
  { title: "Gym", status: "done" },
  { title: "Read", status: "done" },
  { title: "Code", status: "pending" },
  { title: "Clean room", status: "skipped" },
  { title: "Meditate", status: "pending" },
];
```

## Example output

```js
{
  done: 2,
  pending: 2,
  skipped: 1
}
```

## Notes

This project was intentionally kept small and focused. The main goal was to practice counting, validating, normalizing, and sorting data in a clean utility-style function.
