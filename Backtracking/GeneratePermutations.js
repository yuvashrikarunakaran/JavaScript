/*
 * Problem Statement: Generate all distinct permutations of an array (all permutations should be in sorted order);
 *
 * What is permutations?
 * - Permutation means possible arrangements in a set (here it is an array);
 *
 * Reference to know more about permutations:
 * - https://www.britannica.com/science/permutation
 *
 */
const swap = (arr, i, j) => {
  // Swap elements in the array
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

const permutations = (arr) => {
  const P = []; // Array to store all permutations

  const permute = (arr, low, high) => {
    if (low === high) {
      P.push([...arr]); // Add a copy of the array to results
      return;
    }

    for (let i = low; i <= high; i++) {
      swap(arr, low, i); // Swap to create a new permutation
      permute(arr, low + 1, high); // Recurse to permute the rest
      swap(arr, low, i); // Backtrack to restore original array
    }
  };

  permute(arr, 0, arr.length - 1); // Start recursion
  return P.sort((a, b) => a.join('').localeCompare(b.join(''))); // Ensure permutations are in sorted order
};

export { permutations };


    
