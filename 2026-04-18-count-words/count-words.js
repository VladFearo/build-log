function mostFrequentCalculator(frequency) {
  const sortedFreq = Object.entries(frequency).sort((a, b) => b[1] - a[1]);
  const mostFrequent = [];
  if (sortedFreq.length === 0) return mostFrequent;
  const maxCount = sortedFreq[0][1];
  for (const [word, count] of sortedFreq) {
    if (count === maxCount) mostFrequent.push(word);
    else break;
  }
  return mostFrequent;
}

function analyzeText(input) {
  const inputArr = input
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.trim() !== "");
  const wordCount = inputArr.length;
  const frequency = {};
  let longestWord = null;
  let longestWordLength = Number.NEGATIVE_INFINITY;
  let shortestWord = null;
  let shortestWordLength = Number.POSITIVE_INFINITY;
  const uniqueWordCount = new Set(inputArr).size;

  for (const word of inputArr) {
    frequency[word] = (frequency[word] || 0) + 1;
    if (word.length > longestWordLength) {
      longestWord = word;
      longestWordLength = word.length;
    }
    if (word.length < shortestWordLength) {
      shortestWord = word;
      shortestWordLength = word.length;
    }
  }
  const mostFrequent = mostFrequentCalculator(frequency);
  return {
    wordCount,
    uniqueWordCount,
    longestWord,
    shortestWord,
    frequency,
    mostFrequent,
  };
}

analyzeText("hi hi hello hello world");
analyzeText("");
analyzeText("     ");
analyzeText("  hi   hello   world  ");
