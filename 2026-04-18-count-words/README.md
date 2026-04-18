# Count Words

Date: 2026-04-18

## Goal

Take a text string, split it into words, and return basic word statistics.

## What it does

This project:

- trims the input
- converts words to lowercase
- splits text by whitespace
- ignores empty tokens
- counts total words
- counts unique words
- finds the longest word
- finds the shortest word
- builds a frequency object
- returns the most frequent word or words

## Features

The output includes:

- `wordCount` — total number of words
- `uniqueWordCount` — number of unique words
- `longestWord` — longest word in the input
- `shortestWord` — shortest word in the input
- `frequency` — object showing how many times each word appears
- `mostFrequent` — array of word(s) tied for highest frequency

## Example inputs

```js
analyzeText("hi hi hello hello world");
analyzeText("");
analyzeText("     ");
analyzeText("  hi   hello   world  ");
```

## Example output

```js
{
  wordCount: 5,
  uniqueWordCount: 3,
  longestWord: "hello",
  shortestWord: "hi",
  frequency: {
    hi: 2,
    hello: 2,
    world: 1
  },
  mostFrequent: ["hi", "hello"]
}
```

## What I practiced

- string normalization
- `trim`
- `toLowerCase`
- regex splitting with `split(/\s+/)`
- filtering empty values
- objects as frequency counters
- `Set`
- looping through arrays
- longest/shortest tracking
- extracting tied top-frequency values

## Notes

- words are treated case-insensitively
- punctuation is not removed, so `"hello"` and `"hello,"` count as different words
- if there are no valid words:
  - `wordCount` is `0`
  - `uniqueWordCount` is `0`
  - `longestWord` is `null`
  - `shortestWord` is `null`
  - `frequency` is `{}`
  - `mostFrequent` is `[]`

## File

- `count-words.js`
