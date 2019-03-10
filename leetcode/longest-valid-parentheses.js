/**
 * Given a string containing just the characters '(' and ')'
 * find the length of the longest valid (well-formed) parentheses substring.
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {

  if (!s || s.length === 0) return 0;

  let max = 0;
  const stack = [-1];
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (!stack.length) {
        stack.push(i);
      } else {
        max = Math.max(max, i - stack[stack.length - 1]);
      }
    }
  }

  return max;
};

console.assert(4  === longestValidParentheses('()())()'));
console.assert(10 === longestValidParentheses('(()((())())'));
console.assert(6  === longestValidParentheses('()()())()'));
console.assert(4  === longestValidParentheses('()())(()(()'));
console.assert(4  === longestValidParentheses(')()())'));
console.assert(2  === longestValidParentheses('(()'));
console.assert(20 === longestValidParentheses('((()()())(()())()()))()(()))(()(()()()('));
console.assert(0  === longestValidParentheses('(((('));
console.assert(8  === longestValidParentheses('()))))))(((())))))(((()))))((())))))))))))'));
console.assert(2  === longestValidParentheses('()'));
console.assert(4  === longestValidParentheses('(((((((())'));