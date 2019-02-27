/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
var result = [];
function FindPath(root, expectNumber)
{
  // write code here
  if(root === null) return result;
  findPath(root, expectNumber, []);
  return result;
}

function findPath(root, expectNumber, arr){
  let currArr = [].concat(arr);
  currArr.push(root.val);
  // 叶子结点且路径之和
  if(root.left === null && root.right === null && (expectNumber - root.val) === 0){
    result.push(currArr);
    return;
  }
  if(root.left === null && root.right === null){
    return;
  }
  if(root.left !== null){
    findPath(root.left, expectNumber - root.val, currArr);
  }
  if(root.right !== null){
    findPath(root.right, expectNumber - root.val, currArr);
  }
}

a = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right:{
      val: 7,
      left: null,
      right: null
    }
  },
  right:{
    val:12,
    left: null,
    right: null
  }
}
console.log(FindPath(a, 29));
