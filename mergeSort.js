/**
 * Merge sort
 * Wost case: O(nlogn)
 * Average case: O(nlogn)
 * Best case: O(nlogn)
 */

/**
 * @param {number[]} left
 * @param {number[]} right
 * @return {number[]}
 */
const merge = function(left, right) {
	
	const out = [];
	let i = 0;
	let j = 0;

	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			out.push(left[i]);
			i++;
		} else {
			out.push(right[j]);
			j++;
		}
	}

	if (i < left.length) {
		// Array.prototype.push.apply(out, left.slice(i))
		out.push(...left.slice(i));
	} else if (j < right.length) {
		out.push(...right.slice(j));
	}

	return out;
}

/**
 * @param {number[]} array
 * @return {number[]}
 */
const mergeSort = function(array) {

	if (array.length < 2) return array;

	const pivot = ~~(array.length / 2); // same as Math.floor(...)
	const left = array.slice(0, pivot);
	const right = array.slice(pivot, array.length);

	return merge(mergeSort(left), mergeSort(right));
}