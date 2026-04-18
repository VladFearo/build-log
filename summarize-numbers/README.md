# Summarize Numbers

Date: 2026-04-18

## Goal

Take a comma-separated input string, separate valid numbers from invalid tokens, and return a summary of the numeric data.

## What it does

This project:

- splits a comma-separated string into tokens
- trims whitespace from each token
- converts valid numeric strings into numbers
- collects invalid non-empty tokens separately
- calculates summary statistics
- counts how often each valid number appears
- returns the most frequent number or numbers

## Features

The output includes:

- `validNumbers` — all valid parsed numbers
- `invalidTokens` — non-empty invalid values
- `count` — total number of valid numbers
- `uniqueCount` — number of unique valid numbers
- `min` — smallest valid number
- `max` — largest valid number
- `sum` — sum of valid numbers
- `average` — average rounded to 2 decimal places
- `frequency` — how many times each number appears
- `mostFrequent` — all numbers tied for highest frequency

## Example inputs

```js
summarizeNumbers("1, 2, 2, x, 3");
summarizeNumbers("foo, bar");
summarizeNumbers(" 5, , 5, 5, -1 ");
```

## Example output

```js
{
  validNumbers: [1, 2, 2, 3],
  invalidTokens: ["x"],
  count: 4,
  uniqueCount: 3,
  min: 1,
  max: 3,
  sum: 8,
  average: 2,
  frequency: { 1: 1, 2: 2, 3: 1 },
  mostFrequent: [2]
}
```

## What I practiced

- string validation
- trimming and splitting input
- arrays
- objects as frequency counters
- `Set`
- `reduce`
- `Math.min` / `Math.max`
- top-frequency selection
- returning structured summary data

## Notes

- Empty tokens are ignored and not added to `invalidTokens`
- Numeric strings are converted using `Number(...)`
- If there are no valid numbers:
  - `min`, `max`, and `average` return `null`
  - `mostFrequent` returns `[]`

## File

- `summarize-numbers.js`
