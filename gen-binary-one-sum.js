/**
 * Generate an array which contains sum of binary 1's
 * for every number between [0...num]
 * Example output: [ 0, 1, 1, 2 ...]
 *   0000 = contains zero 1's, thus output = 0
 *   0001 = contains one 1's, thus output = 1
 *   ....
 *   0101 = contains two 1's, thus output = 2
 *   ....
 *   num
 */
/**
 * Using mod and division
 * @param {number} num
 * @return {number[]}
 */
var genBinSum1 = function(num) {
  const out = [];
 
  for (let i = 0; i < num; i++) {
    let n = i;
    let count = 0;
    while (n > 0) {
      if (n % 2 === 1) {
        count++;
      }
      n = Math.floor(n / 2);
    }
    out.push(count);
  }
 
  return out;
}
/**
 * Right shift and count 1's
 * @param {number} num
 * @return {number[]}
 */
var genBinSum2 = function(num) {
  const out = [];
 
  for (let i = 0; i < num; i++) {
    let n = i;
    let count = 0;
    while (n !== 0) {
      if (n & 1) count++;
      n >>= 1;
    }
    out.push(count);
  }
 
  return out;
}
/**
 * Convert each number to binary and count the 1's
 * @param {number} num
 * @return {number[]}
 */
var genBinSum3 = function(num) {
  const out = [];
 
  for (let i = 0; i < num; i++) {
    out.push(i.toString(2).split('').filter(el => el === '1').length);
  }
 
  return out;
}