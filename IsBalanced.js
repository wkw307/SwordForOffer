/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
let result = {};
let r = true;
function IsBalanced_Solution(pRoot)
{
  // write code here
  if(pRoot === null) return true;
  r = true;
  result = {};
  getDepth(pRoot);
  return r;
}

function getDepth(root){
  if(root.left === null && root.right === null){
    result[root.val] = 1;
    return;
  }
  if(root.left !== null && root.right === null){
    getDepth(root.left);
    if(result[root.left.val] !== 1){
      r = false;
    }
    result[root.val] = result[root.left.val] + 1;
    return;
  }

  if(root.right !== null && root.left === null){
    getDepth(root.right);
    if(result[root.right.val] !== 1){    
      r = false;
    }
    result[root.val] = result[root.right.val] + 1; 
    return;
  }

  getDepth(root.left);
  getDepth(root.right);
  if(result[root.left.val] - result[root.right.val] > 1 || result[root.left.val] - result[root.right.val] < -1){
    r = false;
  }
  if(result[root.left.val] > result[root.right.val]){
    result[root.val] = result[root.left.val] + 1;
  }else{
    result[root.val] = result[root.right.val] + 1;
  }
}
let a = {
  val: 1,
  left: {
    val:2,
    left:{
      val:4,
      left:null,
      right:null
    },
    right:{
      val:5,
      left:{
        val:6,
        left:null,
        right:null
      },
      right:null
    }
  },
  right: {
    val:3,
    left: null,
    right: null
  }
}
console.log(IsBalanced_Solution(a));