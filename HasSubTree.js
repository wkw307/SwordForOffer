/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    let result = false;

    if(pRoot1 !== null && pRoot2 !== null){
      if(pRoot1.val === pRoot2.val){
        result = DoesTree1HasTree2(pRoot1, pRoot2);
      }
      if(!result){
        result = HasSubtree(pRoot1.left, pRoot2);
      }
      if(!result){
        result = HasSubtree(pRoot1.right, pRoot2);
      }
    }
    return result;
}

function DoesTree1HasTree2(pRoot1, pRoot2){
  if(pRoot2 === null) return true;
  if(pRoot1 === null) return false;

  if(pRoot1.val !== pRoot2.val) return false;
  return DoesTree1HasTree2(pRoot1.left, pRoot2.left) && DoesTree1HasTree2(pRoot1.right, pRoot2.right);
}