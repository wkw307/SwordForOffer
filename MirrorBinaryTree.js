/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
  // write code here
  if(root === null) return;
  if(root.left === null && root.right === null) return;

  let tmp = root.left;
  root.left = root.right;
  root.right = tmp;

  Mirror(root.left);
  Mirror(root.right);
  return root;
}