function VerifySquenceOfBST(sequence) {
  // write code here
  if (sequence.length === 0) {
    return false;
  }
  return adjust(sequence);
}

function adjust(sequence) {
  if (sequence.length === 0) {
    return true;
  }
  let root = sequence[sequence.length - 1];
  let index = -1;
  for (let i = 0; i < sequence.length - 1; i++) {
    if (sequence[i] > root) {
      index = i;
      break;
    }
  }
  if (index !== -1) {
    for (let i = index; i < sequence.length - 1; i++) {
      if (sequence[i] < root) {
        return false;
      }
    }
    return adjust(sequence.slice(0, index)) && adjust(sequence.slice(index, sequence.length - 1));
  }else{
    return adjust(sequence.slice(0,sequence.length - 1));
  }
}
console.log(VerifySquenceOfBST([5,7,6,9,11,10,8]));