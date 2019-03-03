/**
 * Given a string array words, find the maximum value of 
 * length(word[i]) * length(word[j]) where the two words do not
 * share common letters. You may assume that each word will contain
 * only lower case letters. If no such two words exist, return 0.
 */
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  let max = 0;
  
  const getByteMap = function(word) {
    let byteMap = 0;
    const baseCharCode = 'a'.charCodeAt(0); // Use 'a' as base
    
    for (let i = 0; i < word.length; i++) {
      byteMap |= 1 << (word.charCodeAt(i) - baseCharCode);
    }
    
    return byteMap;
  }
  
  // Generate byte map for quick word matching
  const byteMap = {};
  for (let i = 0; i < words.length; i++) {
    byteMap[words[i]] = getByteMap(words[i]);
  }
  
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      // Compares the bits set between the two word byteMaps
      // If any bits match then this will be false
      if (!(byteMap[words[i]] & byteMap[words[j]])) {
        max = Math.max(max, words[i].length * words[j].length);
      }
    }
  }
  
  return max;
};