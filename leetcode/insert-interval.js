/**
 * Given a set of non-overlapping intervals, insert a new interval into the
 * intervals (merge if necessary).
 *
 * You may assume that the intervals were initially sorted according to their
 * start times.
 *
 * Example 1:
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 *
 * Example 2:
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 * Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
  // Edge cases
  if (intervals.length === 0) return [newInterval];
  if (newInterval.length === 0) return intervals;

  // #1 if overlapping merge all the overlapping intervals
  // function to check if two intervals overlap
  const overlap = (x, y) => x[0] <= y[1] && x[1] >= y[0];

  // Iterate through intervals array and check every interval
  for (let i = 0; i < intervals.length; i++) {
    // if an interval is overlaping iterate to the next non-overlaping
    // interval and merge preceding intervals into one
    if (overlap(intervals[i], newInterval)) {
      let j = i + 1;
      while (j < intervals.length && overlap(intervals[j], newInterval)) {
        j++;
      }

      // at this point variable j should hold the index of the next
      // non-overlaping interval, therefore when caluclating max we need to
      // use previous (overlaping) interval
      intervals.splice(
        i,
        j - i,
        // construct a new interval
        [Math.min(newInterval[0], intervals[i][0]),
         Math.max(newInterval[1], intervals[j - 1][1])]
      );
      return intervals;
    }
  }

  // #2 if no overlaping interval is found insert newInterval at correct position
  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) {
      intervals.splice(i, 0, newInterval);
      return intervals;
    }
  }

  intervals.push(newInterval);
  return intervals;
};