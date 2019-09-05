var results = [];
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  results = [];  
  cal(target, [], candidates.sort((a, b) => a - b));
  return results;
};

function cal(target, current, rest) {
  if (target === 0) {
    results.push(current);
    return;
  }
  if (rest.length === 0 || rest[0] > target) {
    return;
  }
  if (target - rest[0] === 0) {
    results.push(current.concat(rest[0]));
    return;
  }
  cal(target - rest[0], current.concat(rest[0]), rest.slice(1));
  for (let i = 1; i < rest.length; i++) {
    if (rest[i] === rest[0]) {
      continue;
    } else {
      cal(target, current, rest.slice(i));
      break;
    }
  }
  
}

console.log(combinationSum2([2,5,2,1,2], 5))