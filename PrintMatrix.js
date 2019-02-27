function printMatrix(matrix) {
  // write code here
  if (matrix === null) return;
  let rows = matrix.length;
  let columns = matrix[0].length;
  let start = 0;
  let endR = rows - start - 1;
  let endC = columns - start - 1;
  let result = [];
  while (rows - start * 2 > 0 && columns - start * 2 > 0) {
    for (let i = 0; i < endC - start + 1; i++) {
      result.push(matrix[start][i+start]);
    }
    if (endR > start) {
      for (let i = 0; i < endR - start; i++) {
        result.push(matrix[start + i + 1][endC]);
      }
    }

    if (endC > start && endR > start) {
      for (let i = 0; i < endC - start; i++) {
        result.push(matrix[endR][endC - i - 1]);
      }
    }

    if (endC > start && endR > start + 1) {
      for (let i = 0; i < endR - start - 1; i++) {
        result.push(matrix[endR - i - 1][start]);
      }
    }

    start++;
    endR = rows - start - 1;
    endC = columns - start - 1;
  }
  return result;
}

a = [1, 2, 3, 4];
b = [];
b.push(a);
b.push(a);
b.push(a);
console.log(printMatrix(b));