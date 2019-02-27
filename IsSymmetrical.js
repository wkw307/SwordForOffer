/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot)
{
    // write code here
    return IsSymmetrical(pRoot, pRoot);
}

function IsSymmetrical(pRoot1, pRoot2){
  if(pRoot1 === null && pRoot2 === null) return true;
  if(pRoot1 === null || pRoot2 === null) return false;

  if(pRoot1.val !== pRoot2.val) return false;

  return IsSymmetrical(pRoot1.left, pRoot2.right) && IsSymmetrical(pRoot1.right, pRoot2.left);
}