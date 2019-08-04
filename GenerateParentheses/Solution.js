/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let result = [['', 0, 0]];
  for (let i = 0; i < 2 * n; i++) {
    let tmpResult = [];
    result.forEach(element => {
      if (element[2] === n) {
        tmpResult.push([element[0] + ')', element[1] - 1, n]);
      } else {
        if (element[1] > 0) {
          tmpResult.push([element[0] + '(', element[1] + 1, element[2] + 1]);
          tmpResult.push([element[0] + ')', element[1] - 1, element[2]]);
        } else {
          tmpResult.push([element[0] + '(', element[1] + 1, element[2] + 1]);
        }
      }
    });
    result = tmpResult;
  }
  return result.map(element => element[0]);
};

console.log(generateParenthesis(3));