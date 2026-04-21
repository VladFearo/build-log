# Inventory Summary

## Date

2026-04-21

## Goal

Practice working with arrays and objects by building a function that summarizes a list of inventory items.

## What it does

The program defines a `summarizeInventory(items)` function that takes an array of product objects and returns a summary object with:

- total number of items
- number of items in stock
- number of items out of stock
- total value of in-stock items
- average price of all items
- item with the highest price
- category counts
- names of in-stock items

## Input format

An array of objects like:

```js
{ name: "apple", category: "fruit", price: 4, inStock: true }
```

## Output format

An object like:

```js
{
  totalItems: 5,
  inStockCount: 3,
  outOfStockCount: 2,
  totalValueInStock: 11,
  averagePrice: 3.6,
  mostExpensive: { name: "pear", category: "fruit", price: 5, inStock: true },
  categories: {
    fruit: 3,
    vegetable: 2
  },
  inStockNames: ["apple", "carrot", "pear"]
}
```

## Main features

- counts total items
- separates in-stock and out-of-stock items
- sums the value of items currently in stock
- calculates the average price
- tracks the most expensive item
- groups items by category
- preserves the original order of in-stock item names
- handles an empty array correctly

## Example

Input:

```js
const items = [
  { name: "apple", category: "fruit", price: 4, inStock: true },
  { name: "banana", category: "fruit", price: 3, inStock: false },
  { name: "carrot", category: "vegetable", price: 2, inStock: true },
  { name: "pear", category: "fruit", price: 5, inStock: true },
  { name: "cucumber", category: "vegetable", price: 4, inStock: false },
];
```

Output:

```js
{
  totalItems: 5,
  inStockCount: 3,
  outOfStockCount: 2,
  totalValueInStock: 11,
  averagePrice: 3.6,
  mostExpensive: { name: "pear", category: "fruit", price: 5, inStock: true },
  categories: {
    fruit: 3,
    vegetable: 2
  },
  inStockNames: ["apple", "carrot", "pear"]
}
```

## What I practiced

- looping through arrays with `for...of`
- reading object properties
- updating counters and totals
- building a frequency object
- tracking a maximum value while iterating
- handling an empty-array edge case
- returning a structured summary object

## File

`summarizeInventory.js`
