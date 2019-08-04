// 先对字符串遍历，按word宽度的滑动窗口，string -> index
// words -> map
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
// words 可以重复
// var findSubstring = function(s, words) {
//   if (words.length === 0) return [];
//   let flag = [];
//   let wLen = words[0].length;
//   let wSum = words.length;
//   let result = [];
//   for (let i = 0; i < s.length - wLen + 1; i++) {
//     flag.push(words.indexOf(s.slice(i, i + wLen)));
//   }
//   for (let i = 0; i < flag.length - wSum + 1; i++) {
//     if (flag[i] === -1) continue;
//     // let tmp = flag.slice(i, i + wSum);
//     let tmp = [];
//     for (let k = i; k < i + wSum * wLen; k += wLen) {
//       tmp.push(flag[k]);
//     }
//     if (tmp.indexOf(-1) !== -1) continue;
//     for (let j = 0; j < wSum; j++) {
//       let temp = tmp.shift();
//       if (tmp.indexOf(temp) !== -1) {
//         break;
//       }
//     }
//     if (tmp.length === 0) result.push(i);
//   }
//   return result;
// };
var findSubstring = function(s, words) {
  if (words.length === 0) return [];
  const map = {};
  for (let word of words) {
    map[words.indexOf(word)] = ~~map[words.indexOf(word)] + 1;
  }
  let flag = []; 
  let wLen = words[0].length;
  let wSum = words.length;
  let result = [];
  for (let i = 0; i < s.length - wLen + 1; i++) {
    flag.push(words.indexOf(s.slice(i, i + wLen)));
  }
  for (let i = 0; i < flag.length - wSum + 1; i++) {
    if (flag[i] === -1) continue;
    // let tmp = flag.slice(i, i + wSum);
    let tmp = [];
    for (let k = i; k < i + wSum * wLen; k += wLen) {
      tmp.push(flag[k]);
    }
    if (tmp.indexOf(-1) !== -1) continue;
    let copy = Object.assign({}, map);
    let j;
    for (j = 0; j < wSum; j++) {
      let current = tmp[j];
      if (copy[current]) {
        copy[current]--;
        if (copy[current] === 0) delete copy[current];
      } else {
        break;
      }
    }
    if (j === wSum) result.push(i);
  }
  return result;
};

let s = "wordgoodgoodgoodbestword";
let words = ["word","good","best","word"];

console.log(findSubstring(s, words));