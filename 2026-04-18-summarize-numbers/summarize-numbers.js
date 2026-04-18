function isValidNumberString(str) {
  if (typeof str !== "string") return false;
  if (str.trim() === "") return false;
  return !Number.isNaN(Number(str));
}

function getTopKeys(freq) {
  const entries = Object.entries(freq);

  if (entries.length === 0) return [];

  const maxCount = Math.max(...entries.map((entry) => entry[1]));

  return entries
    .filter((entry) => entry[1] === maxCount)
    .map((entry) => Number(entry[0]));
}

function summarizeNumbers(input) {
  const invalidTokens = [],
    validNumbers = [];
  const frequency = {};
  const inputArr = input.split(",").map((num) => num.trim());

  for (const i of inputArr) {
    if (isValidNumberString(i)) {
      validNumbers.push(Number(i));
    } else {
      if (i !== "") invalidTokens.push(i);
    }
  }
  validNumbers.map((i) => (frequency[i] = (frequency[i] || 0) + 1));

  const uniqueCount = new Set(validNumbers).size;

  const sum = validNumbers.reduce((acc, num) => acc + num, 0);
  const average =
    validNumbers.length > 0
      ? Number((sum / validNumbers.length).toFixed(2))
      : null;
  const min = validNumbers.length > 0 ? Math.min(...validNumbers) : null;
  const max = validNumbers.length > 0 ? Math.max(...validNumbers) : null;
  const count = validNumbers.length;

  const mostFrequent = getTopKeys(frequency);

  return {
    validNumbers,
    invalidTokens,
    count,
    uniqueCount,
    min,
    max,
    sum,
    average,
    frequency,
    mostFrequent,
  };
}

console.log(summarizeNumbers("1, 2, 2, x, 3"));
console.log(summarizeNumbers("foo, bar"));
console.log(summarizeNumbers(" 5, , 5, 5, -1 "));
