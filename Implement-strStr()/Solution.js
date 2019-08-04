/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle.length === 0) return 0;
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack.charAt(i) === needle.charAt(0)) {
      let len = needle.length - 1;
      let j = 1;
      while (len > 0) {
        if (haystack.charAt(i + j) !== needle.charAt(j)) {
          break;
        }
        j++;
        len--;
      }
      if (len === 0) {
        return i;
      }
    }
  }
  return -1;
};

var strStr = function(haystack, needle) {
  if (needle.length === 0) return 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.charAt(i) === needle.charAt(0) && haystack.slice(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1;
};