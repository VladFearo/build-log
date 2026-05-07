````md
# GitHub User Report CLI

Small Node.js CLI that fetches public GitHub profile data and prints a clean user report.

## Date

2026-05-07

## Goal

Practice fetching data from an external API using `async` / `await`, handling HTTP responses, and formatting CLI output.

## File

```txt
github-user-report.js
```
````

## Usage

```bash
node github-user-report.js <username>
```

## Example

```bash
node github-user-report.js torvalds
```

Example output:

```txt
GitHub User Report
------------------
Username: torvalds
Name: Linus Torvalds
Public repos: 9
Followers: 243000
Following: 0
Profile: https://github.com/torvalds
```

## Features

- Reads a GitHub username from the command line
- Fetches public user data from the GitHub API
- Handles missing usernames
- Handles too many arguments
- Handles empty usernames
- Handles users that do not exist
- Handles failed GitHub requests
- Handles invalid JSON responses
- Formats selected profile fields into a readable CLI report

## Practiced

- `process.argv`
- `async` / `await`
- `fetch`
- HTTP status handling
- `response.ok`
- `response.json()`
- `try` / `catch` with async code
- `encodeURIComponent`
- Array-based string formatting with `.join("\n")`
- CLI error handling with `process.exit(1)`

## Notes

The report is built as an array of lines and joined with newline characters. This keeps the formatting cleaner than a large multiline template string, especially when using Prettier.
