# 2026-04-20 — Find Missing Number

## Goal

Build a small JavaScript function that finds the missing number in an unordered array.

The array contains unique integers from `1` to `n + 1`, with exactly one number missing.

## File

`find-missing-number.js`

## What it does

The function takes an array of numbers and returns the single missing value.

## Approach

Instead of sorting or checking each number one by one, this solution uses the arithmetic series formula:

- calculate the expected sum of the full range from `1` to `n + 1`
- calculate the actual sum of the numbers in the array
- subtract the actual sum from the expected sum

That difference is the missing number.

## Example

```js
function findMissingNumber(numbers) {
  const n = numbers.length;
  const expectedSum = ((n + 1) * (n + 2)) / 2;
  const actualSum = numbers.reduce((acc, curr) => acc + curr, 0);
  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5])); // 3
console.log(findMissingNumber([2, 3, 1, 5])); // 4
console.log(findMissingNumber([2, 3])); // 1
```
