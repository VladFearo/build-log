function findMissingNumber(numbers) {
  const n = numbers.length;
  const expectedSum = ((n + 1) * (n + 2)) / 2;
  const actualSum = numbers.reduce((acc, curr) => acc + curr, 0);
  return expectedSum - actualSum;
}

const a = findMissingNumber([1, 2, 4, 5]); // 3
const b = findMissingNumber([2, 3, 1, 5]); // 4
const c = findMissingNumber([1]); // 2
const d = findMissingNumber([1, 2, 3, 5]); // 4
const e = findMissingNumber([2, 1]); // 3
const f = findMissingNumber([3, 1, 2, 5, 6]); // 4
const g = findMissingNumber([2, 3]); // 1

console.log(a, b, c, d, e, f, g);
