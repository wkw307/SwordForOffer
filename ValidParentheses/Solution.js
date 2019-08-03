/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const left = ['(', '{', '['];
  const map = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  for (let i = 0; i < s.length; i++) {
    if (left.indexOf(s.charAt(i)) !== -1) {
      stack.push(s.charAt(i));
    } else {
      if (stack[stack.length - 1] === map[s.charAt(i)]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isValid('()[]{}'))