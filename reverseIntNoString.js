/**
 * Reverse an integer without converting it to a string
 **/
var reverseInteger = function(num) {

  if (num % 10 === num) {
    return num;
  }

  let res = 0;
  const reverse = function(num, digitNum) {
    // base case
    if (digitNum < 0) {
      return num;
    }
    res += (num % 10) * Math.pow(10, digitNum);
    reverse(
      num < 0 ?
        Math.ceil(num / 10) :
        Math.floor(num / 10),
      digitNum - 1
    );
  }

  const numberOfDigits = Math.floor(Math.log10(Math.abs(num)));
  reverse(num, numberOfDigits);
  return res;
}

console.log(reverseInteger(0) === 0);
console.log(reverseInteger(-11) === -11);
console.log(reverseInteger(-123) === -321);
console.log(reverseInteger(-1230) === -321);
console.log(reverseInteger(-12309) === -90321);
console.log(reverseInteger(987) === 789);
console.log(reverseInteger(-1245789) === -9875421);