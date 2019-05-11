/**
 * We need to find out the maximum difference
 * (which will be the maximum profit) between two numbers in the given array.
 * Also, the second number (selling price) must be larger than the
 * first one (buying price).
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // edge case
  if (!prices || prices.length <= 1) return 0;

  // O(n^2) solution, brute force
  // Loop runs (n*(n-1)) / 2 times
  // let maxProfit = 0;
  // for (let i = 0; i < prices.length - 1; i++) {
  //   let localMaxProfit = 0;
  //   for (let j = i + 1; j < prices.length; j++) {
  //     localMaxProfit = Math.max(localMaxProfit, prices[j] - prices[i]);
  //   }
  //   maxProfit = Math.max(maxProfit, localMaxProfit);
  // }

  // O(n) solution, one pass
  let maxProfit = 0;
  let minPrice = Infinity;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
   }
  }

  return maxProfit;
};