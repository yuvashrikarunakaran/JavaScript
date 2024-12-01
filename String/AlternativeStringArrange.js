// Alternative arrange the two given strings in one string in O(n) time complexity.

// Problem Source & Explanation: https://www.geeksforgeeks.org/alternatively-merge-two-strings-in-java/

/**
 * Alternative arrange the two given strings in one string in O(n) time complexity.
 * @param {String} str1 first input string
 * @param {String} str2 second input string
 * @returns `String` return one alternative arrange string.
 */
const alternativeStringArrange = (str1, str2) => {
  // Ensure inputs are converted to strings, even if not initially.
  str1 = String(str1 || '');
  str2 = String(str2 || '');

  // Initialize the output string.
  let outStr = '';

  // Calculate the maximum length of the two strings.
  const maxLength = Math.max(str1.length, str2.length);

  // Iterate through each character position up to the maximum length.
  for (let i = 0; i < maxLength; i++) {
    // Append character from the first string if within bounds.
    if (i < str1.length) outStr += str1[i];
    // Append character from the second string if within bounds.
    if (i < str2.length) outStr += str2[i];
  }

  // Return the combined string.
  return outStr;
};

export { alternativeStringArrange };
