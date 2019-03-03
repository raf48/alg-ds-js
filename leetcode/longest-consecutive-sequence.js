/**
 * Given an unsorted array of integers, find the length of the longest
 * consecutive elements sequence.
 *
 * Your algorithm should run in O(n) complexity.
 *
 * Example:
 * Input: [100, 4, 200, 1, 3, 2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]
 * Therefore it's length is 4.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  
  if (!nums || nums.length === 0) return 0;
  
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }
  
  // O(n + n)
  let longestSeq = 0;
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    if (!set.has(cur - 1)) {
      let currentStreak = 1;
      while (set.has(cur + 1)) {
        cur++;
        currentStreak++;
      }
      longestSeq = Math.max(longestSeq, currentStreak);
    }
  }
  
  return longestSeq;
};