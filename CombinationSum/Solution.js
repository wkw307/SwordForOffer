var results = [];
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  results = [];  
  cal(target, [], candidates.sort((a, b) => a - b));
  return results;
};

function cal(target, current, rest, flag = true) {
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
  if (flag) {
    cal(target - rest[0], current.concat(rest[0]), rest, false);
    cal(target - rest[0], current.concat(rest[0]), rest.slice(1));
    cal(target, current, rest.slice(1));
  } else {
    cal(target - rest[0], current.concat(rest[0]), rest, false);
    cal(target - rest[0], current.concat(rest[0]), rest.slice(1));
  }
}

console.log(combinationSum([2,3,5], 8))