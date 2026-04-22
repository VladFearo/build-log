# Analyze Orders

## Date

2026-04-22

## Goal

Practice processing arrays of objects by analyzing a list of orders and returning a summary based on paid, pending, and cancelled orders.

## What it does

The program defines an `analyzeOrders(orders)` function that takes an array of order objects and returns a summary object.

It:

- counts total orders
- counts paid, pending, and cancelled orders
- calculates total revenue from paid orders only
- calculates the average amount of paid orders
- builds a totals object for customers based on paid orders only
- finds the top customer by highest paid total
- finds the largest paid order

## Input format

An array of objects like:

```js
{ id: 1, customer: "Dana", amount: 120, status: "paid" }
```

## Output format

An object like:

```js
{
  totalOrders: 5,
  paidOrders: 3,
  pendingOrders: 1,
  cancelledOrders: 1,
  totalRevenue: 210,
  averagePaidAmount: 70,
  customerTotals: {
    Dana: 170,
    Noam: 40
  },
  topCustomer: "Dana",
  largestPaidOrder: { id: 1, customer: "Dana", amount: 120, status: "paid" }
}
```

## Rules

- `totalOrders` is the total number of orders
- `paidOrders`, `pendingOrders`, and `cancelledOrders` count orders by status
- `totalRevenue` includes paid orders only
- `averagePaidAmount` is based on paid orders only
- `customerTotals` includes paid amounts only
- `topCustomer` is the customer with the highest paid total
- `largestPaidOrder` is the full paid order object with the highest amount
- if there are no paid orders:
  - `totalRevenue` is `0`
  - `averagePaidAmount` is `0`
  - `customerTotals` is `{}`
  - `topCustomer` is `null`
  - `largestPaidOrder` is `null`

- if the input array is empty, all counts are `0`

## Example

Input:

```js
const orders = [
  { id: 1, customer: "Dana", amount: 120, status: "paid" },
  { id: 2, customer: "Noam", amount: 80, status: "pending" },
  { id: 3, customer: "Dana", amount: 50, status: "paid" },
  { id: 4, customer: "Gil", amount: 200, status: "cancelled" },
  { id: 5, customer: "Noam", amount: 40, status: "paid" },
];
```

Output:

```js
{
  totalOrders: 5,
  paidOrders: 3,
  pendingOrders: 1,
  cancelledOrders: 1,
  totalRevenue: 210,
  averagePaidAmount: 70,
  customerTotals: {
    Dana: 170,
    Noam: 40
  },
  topCustomer: "Dana",
  largestPaidOrder: { id: 1, customer: "Dana", amount: 120, status: "paid" }
}
```

## Main features

- processes orders in one main loop
- separates counts by status
- calculates revenue from paid orders only
- groups paid totals by customer
- finds the top customer from grouped totals
- tracks the largest paid order
- handles empty input and no-paid-order cases

## What I practiced

- looping through arrays with `for...of`
- reading and comparing object properties
- counting by condition
- accumulating totals
- building a grouped totals object
- finding a maximum value
- using `Object.entries()` with sorting
- handling edge cases cleanly

## File

`analyzeOrders.js`
