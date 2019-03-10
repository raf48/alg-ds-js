/**
 * Given a non-empty string s and a dictionary wordDict containing a list
 * of non-empty words, determine if s can be segmented into a space-separated
 * sequence of one or more dictionary words.
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

  const set = new Set(wordDict);
  const cache = new Map();

  const helper = function(str, dict) {

    if (cache.has(str)) {
      return cache.get(str);
    }

    if (str.length === 0) {
      return true;
    }

    for (let i = 0; i < str.length; i++) {
      if (dict.has(str.slice(0, i + 1)) && helper(str.slice(i + 1), dict)) {
        cache.set(str, true);
        return true;
      }
    }

    cache.set(str, false);
    return false;
  }
  
  return helper(s, set);
}

console.assert(!wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']));
console.assert(wordBreak('quickbrownfox', ['quick', 'brown', 'fox']));
console.assert(wordBreak('aaaa', ['a', 'b', 'c']));
console.assert(!wordBreak('aaaaaaa', ['aaaa', 'aa']));
console.assert(wordBreak('aaaaaa', ['aaaa', 'aa']));
console.assert(!wordBreak(
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
  ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
));
console.assert(wordBreak('bbbbb', ['a', 'b', 'bbb']));
console.assert(wordBreak("abcd", ["a","abc","b","cd"]));