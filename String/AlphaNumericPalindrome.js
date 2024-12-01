/**
 * @function alphaNumericPalindrome
 * @description alphaNumericPalindrome should return true if the string has alphanumeric characters that are palindrome irrespective of special characters and the letter case.
 * @param {string} str the string to check
 * @returns {boolean}
 * @see [Palindrome](https://en.wikipedia.org/wiki/Palindrome)
 * @example
 * The function alphaNumericPalindrome() receives a string with varying formats
 * like "racecar", "RaceCar", and "race CAR"
 * The string can also have special characters
 * like "2A3*3a2", "2A3 3a2", and "2_A3*3#A2"
 *
 * But the catch is, we have to check only if the alphanumeric characters
 * are palindrome i.e remove spaces, symbols, punctuations etc
 * and the case of the characters doesn't matter
 */
const alphaNumericPalindrome = (str) => {
  // Graceful check for invalid input (non-string)
  if (typeof str !== 'string') {
    return false;
  }

  // Removing non-alphanumeric characters and converting to lowercase
  const newStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Early return for empty string (after filtering)
  if (newStr === '') {
    return true;
  }

  const midIndex = Math.floor(newStr.length / 2);

  // Check palindrome by comparing characters from both ends
  return [...newStr].every((char, i) => i >= midIndex || char === newStr[newStr.length - 1 - i]);
};

export default alphaNumericPalindrome;

  return true
}

export default alphaNumericPalindrome
