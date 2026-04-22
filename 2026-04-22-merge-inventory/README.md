# Merge Inventory

## Date

2026-04-22

## Goal

Practice working with arrays, objects, and `Map` by merging duplicate inventory items and calculating derived values.

## What it does

The program defines a `mergeInventory(items)` function that takes an array of product objects and merges items with the same name into a single object.

For each merged item, it:

- keeps the name
- keeps the category
- keeps the price
- sums the quantity
- calculates `totalValue` as `quantity * price`

## Input format

An array of objects like:

```js
{ name: "apple", category: "fruit", quantity: 3, price: 4 }
```

## Output format

An array of merged objects like:

```js
[
  { name: "apple", category: "fruit", quantity: 4, price: 4, totalValue: 16 },
  { name: "banana", category: "fruit", quantity: 6, price: 3, totalValue: 18 },
  {
    name: "carrot",
    category: "vegetable",
    quantity: 5,
    price: 2,
    totalValue: 10,
  },
];
```

## Rules

- Items with the same `name` are merged together
- Same-name items are assumed to also share the same `category` and `price`
- `quantity` is summed across duplicates
- `totalValue` is calculated after merging
- The output preserves the order of first appearance
- An empty input array returns an empty array

## Example

Input:

```js
const items = [
  { name: "apple", category: "fruit", quantity: 3, price: 4 },
  { name: "banana", category: "fruit", quantity: 2, price: 3 },
  { name: "apple", category: "fruit", quantity: 1, price: 4 },
  { name: "carrot", category: "vegetable", quantity: 5, price: 2 },
  { name: "banana", category: "fruit", quantity: 4, price: 3 },
];
```

Output:

```js
[
  { name: "apple", category: "fruit", quantity: 4, price: 4, totalValue: 16 },
  { name: "banana", category: "fruit", quantity: 6, price: 3, totalValue: 18 },
  {
    name: "carrot",
    category: "vegetable",
    quantity: 5,
    price: 2,
    totalValue: 10,
  },
];
```

## Main features

- groups items by name using a `Map`
- updates quantity for duplicate items
- returns a new array of merged objects
- calculates a derived `totalValue` field
- preserves the insertion order of first-seen items

## What I practiced

- using `Map`
- checking keys with `.has()`
- reading values with `.get()`
- storing values with `.set()`
- looping through arrays with `for...of`
- updating existing grouped data
- transforming grouped data back into an array
- adding derived fields with `.map()`

## File

`mergeInventory.js`
