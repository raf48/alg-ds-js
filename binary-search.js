/*
  Function returns index of array element thats less or equal to val
*/
function binarySearchIterative(arr, val) {

  let l = 0;
  let r = arr.length;

  while (l < r) {
    let m = l+r>>1; // Math.floor((l + r) / 2);
    if (arr[m] < val) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  // if val < arr[0] will return '0'
  // if val > arr[max] will return max + 1
  return l;
}

function binarySearchRecursive(arr, val) {

  const helper = function(left, right, arr, val) {
    // if return left  => [0,  el, closest to the left of el, +1]
    if (left > right) return left;

    const mid = left + right >> 1; // Math.floor((left + right) / 2);
    if (val < arr[mid]) return helper(left, mid - 1, arr, val);
    if (val > arr[mid]) return helper(mid + 1, right, arr, val);
    return mid;
  }

  return helper(0, arr.length, arr, val);
}


console.log(binarySearchRecursive([-5, -1, 0, 5], -7)); // 0
console.log(binarySearchRecursive([-5, -1, 0, 5], -5)); // 0
console.log(binarySearchRecursive([-5, -1, 0, 5], -2)); // 1
console.log(binarySearchRecursive([-5, -1, 0, 5], -1)); // 1
console.log(binarySearchRecursive([-5, -1, 0, 5], 4));  // 3
console.log(binarySearchRecursive([-5, -1, 0, 5], 5));  // 3
console.log(binarySearchRecursive([-5, -1, 0, 5], 7));  // 4