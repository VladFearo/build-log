````md
# Parse Query

Date: 2026-05-02

## Goal

Build a small JavaScript utility that parses a URL query string into an object.

## What It Does

`parseQuery` takes a query string such as:

```js
"?name=vlad&age=30";
```
````

and returns:

```js
{
  name: "vlad",
  age: "30"
}
```

It supports query strings with or without a leading `?`.

## Main Features

- Removes a leading `?` if present
- Returns an empty object for an empty query
- Splits query parameters by `&`
- Splits each parameter into `key=value`
- Decodes encoded URL characters with `decodeURIComponent`
- Stores the result in an object
- Allows duplicate keys, where the last value wins
- Throws an error for missing keys
- Throws an error for missing or empty values

## Example Inputs / Outputs

```js
parseQuery("");
// {}

parseQuery("?");
// {}

parseQuery("name=vlad");
// { name: "vlad" }

parseQuery("?name=vlad");
// { name: "vlad" }

parseQuery("?name=vlad&age=30");
// { name: "vlad", age: "30" }

parseQuery("?q=hello%20world");
// { q: "hello world" }

parseQuery("?city=beer%20sheva&lang=js");
// { city: "beer sheva", lang: "js" }

parseQuery("?name=vlad&name=david");
// { name: "david" }
```

## Validation Rules

Invalid:

```js
parseQuery("?name");
// Error: Missing Value

parseQuery("?name=");
// Error: Missing Value

parseQuery("?=vlad");
// Error: Missing Key
```

For this version, empty values are treated the same as missing values.

## What Was Practiced

- String trimming
- `startsWith`
- `slice`
- `split`
- `for...of` loops
- Array destructuring
- Object construction
- Dynamic object keys
- Error throwing
- URL decoding with `decodeURIComponent`
- Basic parser-style input validation

## File

`parse-query.js`
