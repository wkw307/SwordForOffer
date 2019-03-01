function hasPath(matrix, rows, cols, path)
{
  // write code here
  if(path.length === 0) return true;
  if(matrix === null || matrix.length === 0) return false;

  let Matrix = [];
  for(let i = 0; i < rows; i++){
    let tmp = [];
    for(let j = 0; j < cols; j++){
      tmp.push(matrix[i * cols + j]);
    }
    Matrix.push(tmp);
  }
  matrix = Matrix;
  let start = path[0];
  let startArr = [];
  for(let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
      if(start === matrix[i][j]){
        startArr.push([i, j]);
      }
    }
  }
  if(startArr.length === 0) return false;
  let vector = [];
  for(let i = 0; i < cols; i++){
    vector.push(-1);
  }
  let dirtyMatrix = [];
  for(let i = 0; i < rows; i++){
    let v = vector.slice(0);
    dirtyMatrix.push(v);
  }
  while(startArr.length !== 0){
    let tmp = startArr.shift();
    dirtyMatrix[tmp[0]][tmp[1]] = 1;
    let result = findPath(matrix, tmp[0], tmp[1], path.slice(1), dirtyMatrix);
    if(result === true) return true;
  }
  return false;
}

function findPath(matrix, x, y, path, dirtyMatrix){
  if(path.length === 0) {
    dirtyMatrix[x][y] = -1;
    return true;
  }
  let left = false;
  let right = false;
  let up = false;
  let down = false;

  if(x > 0 && matrix[x - 1][y] === path[0] && dirtyMatrix[x - 1][y] !== 1){
    dirtyMatrix[x - 1][y] = 1;
    up = findPath(matrix, x - 1, y, path.slice(1), dirtyMatrix);
  }
  if(x < matrix.length - 1 && matrix[x + 1][y] === path[0] && dirtyMatrix[x + 1][y] !== 1){
    dirtyMatrix[x + 1][y] = 1;
    down = findPath(matrix, x + 1, y, path.slice(1), dirtyMatrix);
  }
  if(y > 0 && matrix[x][y - 1] === path[0] && dirtyMatrix[x][y - 1] !== 1){
    dirtyMatrix[x][y - 1] = 1;
    left = findPath(matrix, x, y - 1, path.slice(1), dirtyMatrix);
  }
  if(y < matrix[0].length && matrix[x][y + 1] === path[0] && dirtyMatrix[x][y + 1] !== 1){
    dirtyMatrix[x][y + 1] = 1;
    right = findPath(matrix, x, y + 1, path.slice(1), dirtyMatrix);
  }
  dirtyMatrix[x][y] = -1;
  return left || right || up || down;
}

result = hasPath("ABCEHJIGSFCSLOPQADEEMNOEADIDEJFMVCEIFGGS",5,8,"SGGFIECVAASABCEHJIGQEMS");
console.log(result);