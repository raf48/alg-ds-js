/*
 * Given a string containing digits from 2-9 inclusive, return all possible
 * letter combinations that the number could represent.
 *
 * A mapping of digit to letters (just like on the telephone buttons)
 * is given below. Note that 1 does not map to any letters.
 *
 * Example:
 *
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
*/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

  // edge case
  if (!digits || digits === 0) return [];

  const keyMap = {
    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r','s'],
    8: ['t','u','v'],
    9: ['w','x','y','z'],
  }

  // Brute force solution
  // Complexity is O(4^N) or to be more precise:
  // O(3^N * 4^M) where n is the number of digits in the input
  // that maps to 3 petters and M is the number of digits in the
  // input that maps to 4 letters

  // perform a top-down recursion
  const getAllKeys = function(digits, n) {
    // base case
    if (n === digits.length - 1) return keyMap[digits[n]];

    const current = getAllKeys(digits, n + 1);
    const out = [];

    for (let i = 0; i < current.length; i++) {
      const keys = keyMap[digits[n]];

      for (let j = 0; j < keys.length; j++) {
        out.push(keys[j] + current[i]);
      }
    }

    return out;
  }

  return getAllKeys(digits, 0);
};