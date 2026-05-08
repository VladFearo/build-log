````md
# GitHub User Report CLI

Small Node.js CLI that fetches public GitHub profile data and prints a clean user report. It can also optionally fetch and display the user's top public repositories by star count.

## Date

2026-05-07  
Updated: 2026-05-08

## Goal

Practice fetching data from an external API using `async` / `await`, handling HTTP responses, formatting CLI output, and extending an existing CLI with an optional feature flag.

## File

```txt
github-user-report.js
```

## Usage

```bash
node github-user-report.js <username>
```

With repositories:

```bash
node github-user-report.js <username> --repos
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

Example with repositories:

```bash
node github-user-report.js torvalds --repos
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

Top repositories by stars:
- linux | ⭐ 205000 | C | https://github.com/torvalds/linux
- subsurface-for-dirk | ⭐ 600 | C | https://github.com/torvalds/subsurface-for-dirk
```

## Features

- Reads a GitHub username from the command line
- Fetches public user data from the GitHub API
- Supports an optional `--repos` flag
- Fetches public repositories when `--repos` is used
- Sorts repositories by star count
- Displays the top 5 repositories
- Handles repositories with no listed language
- Handles users with no public repositories
- Handles missing usernames
- Handles too many arguments
- Handles unknown options
- Handles empty usernames
- Handles users that do not exist
- Handles failed GitHub requests
- Handles invalid JSON responses
- Formats selected profile fields into a readable CLI report

## Practiced

- `process.argv`
- CLI argument validation
- Optional CLI flags
- `async` / `await`
- `fetch`
- HTTP status handling
- `response.ok`
- `response.json()`
- `try` / `catch` with async code
- `encodeURIComponent`
- Working with API objects
- Working with arrays of objects
- `.sort()`
- `.slice()`
- Spread syntax for copying arrays
- Nullish coalescing with `??`
- Array-based string formatting with `.join("\n")`
- CLI error handling with `process.exit(1)`

## Notes

The report is built as an array of lines and joined with newline characters. This keeps the formatting cleaner than a large multiline template string, especially when using Prettier.

The repository list is copied before sorting with `[...repos]` so the original API array is not mutated.
````
