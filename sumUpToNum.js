/*
  Print all possible combinations of additions from a given set of
  numbers so they add up to a given final number
*/
const sumUpTo = function(numbers, target, partial) {

  // sum up all numbers
  let sum = 0;
  for (let i = 0; i < partial.length; i++) {
    sum += partial[i];
  }

  // print if target reached
  if (sum === target) {
    console.log(partial);
  }

  // end recursion over the target
  if (sum > target) {
    return;
  }

  // backtrack
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const remaining = numbers.slice(i + 1); // if unique numbers then i + 1
    sumUpTo(remaining, target, partial.concat(num)); // contat returns new array
  }
}

sumUpTo([3,9,8,4,5,7,10], 15, []);