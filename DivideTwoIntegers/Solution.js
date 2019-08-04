/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (dividend === - Math.pow(2, 31) && divisor === -1) return Math.pow(2, 31) - 1;

  let positive = true;
  if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
    positive = false;
  }
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  let result = findResult(dividend, divisor);
  if (positive) {
    return result;
  } else {
    return - result;
  }
};

function findResult(num, div) {
  if (num < div) return 0;
  let tmp = 1;
  let rest = num - div;
  while (rest > 0) {
    tmp *= 2;
    rest = num - div * tmp;
  }
  return tmp / 2 + findResult(num - div * tmp / 2, div);
}

console.log(divide(2147483647, 2));