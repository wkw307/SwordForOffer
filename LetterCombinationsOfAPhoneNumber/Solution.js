/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  if (digits === '') return [];
  let result = map[digits.charAt(0)].split('');
  for (let i = 1; i < digits.length; i++) {
    let current = map[digits.charAt(i)];
    if (current.length === 3) {
      result = result.reduce((acc, element) => {
        return acc.concat([element + current.charAt(0), element + current.charAt(1), element + current.charAt(2)]);
      }, []);
    } else {
      result = result.reduce((acc, element) => {
        return acc.concat([element + current.charAt(0), element + current.charAt(1), element + current.charAt(2), element + current.charAt(3)]);
      }, []);
    }
  }
  return result;
};

console.log(letterCombinations('999'));