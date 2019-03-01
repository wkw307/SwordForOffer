/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
let result = 0;
function TreeDepth(pRoot)
{
  // write code here
  if(pRoot === null) return 0;
  result = 0;
  treeDepth(pRoot, 0);
  return result;
}

function treeDepth(root, sum){
  if(root === null){
    if(sum > result){
      result = sum;
    }
    return;
  }

  treeDepth(root.left, sum + 1);
  treeDepth(root.right, sum + 1);
}