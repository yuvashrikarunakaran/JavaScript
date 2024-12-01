// An [Anagram](https://en.wikipedia.org/wiki/Anagram) is a string that is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. Anagram check is not case-sensitive;
/**
 * @function checkAnagramRegex
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 * @description - check anagram with the help of Regex
 * @example - checkAnagramRegex('node', 'deno') => true
 * @example - checkAnagramRegex('Eleven plus two', 'Twelve plus one') => true
 */
const checkAnagramRegex = (str1, str2) => {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw new TypeError('Both arguments should be strings.');
  }

  // Remove spaces and ensure consistent casing
  str1 = str1.replace(/\s+/g, '').toLowerCase();
  str2 = str2.replace(/\s+/g, '').toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }

  return ![...str1].reduce(
    (str2Acc, cur) => str2Acc.replace(new RegExp(cur, 'i'), ''),
    str2
  );
};

const checkAnagramMap = (str1, str2) => {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw new TypeError('Both arguments should be strings.');
  }

  // Remove spaces and ensure consistent casing
  str1 = str1.replace(/\s+/g, '').toUpperCase();
  str2 = str2.replace(/\s+/g, '').toUpperCase();

  if (str1.length !== str2.length) {
    return false;
  }

  const str1List = Array.from(str1);

  const str1Occurs = str1List.reduce(
    (map, char) => map.set(char, map.get(char) + 1 || 1),
    new Map()
  );

  for (const char of str2) {
    if (!str1Occurs.has(char)) {
      return false;
    }

    let getCharCount = str1Occurs.get(char);
    str1Occurs.set(char, --getCharCount);

    getCharCount === 0 && str1Occurs.delete(char);
  }

  return true;
};

export { checkAnagramRegex, checkAnagramMap };




  

  
  

