function generateCombinations(n, k) {
  const allCombinations = []; // Store all combinations
  const currentCombination = []; // Current combination being built

  function findCombinations(start) {
    // Base case: if the combination is of size k, add it to the result
    if (currentCombination.length === k) {
      allCombinations.push([...currentCombination]);
      return;
    }

    // Iterate from the current starting point up to n
    for (let i = start; i <= n; i++) {
      currentCombination.push(i); // Include current element
      findCombinations(i + 1); // Recursive call with the next starting element
      currentCombination.pop(); // Backtrack to explore other possibilities
    }
  }

  findCombinations(1); // Start from 1
  return allCombinations;
}

export { generateCombinations };
