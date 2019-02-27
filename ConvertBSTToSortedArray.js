/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

let sorted = null;
function Convert(pRootOfTree)
{
  // write code here
  sorted = null;
  if(pRootOfTree === null) return null;
  if(pRootOfTree.left === null && pRootOfTree.right === null) return pRootOfTree;

  convert(pRootOfTree);

  while(sorted.left !== null){
    sorted = sorted.left;
  }
  return sorted;
}

function convert(root){
  if(root === null) return;
  if(root.left !== null) convert(root.left);
  root.left = sorted;
  if(sorted !== null) sorted.right = root;
  sorted = root;
  if(root.right !== null) convert(root.right);
  return sorted;
}

function FindRightest(root){
  if(root === null) return null;
  if(root.right === null) return root;
  return FindRightest(root.right);
}

function FindLeftest(root){
  if(root === null) return null;
  if(root.left === null) return root;
  return FindLeftest(root.left);
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
console.log(Convert(a));
