/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function KthNode(pRoot, k)
{
  // write code here
  if(pRoot === null) return null;
  if(k > sumOfNode(pRoot)) return null;
  if(k === (sumOfNode(pRoot.left) + 1)) return pRoot;
  if(k <= sumOfNode(pRoot.left)) return KthNode(pRoot.left, k);
  if(k > (sumOfNode(pRoot.left) + 1)) return KthNode(pRoot.right, k - sumOfNode(pRoot.left) - 1);
}

function sumOfNode(root){
  if(root === null) return 0;

  let arr = [root];

  let curr = root;
  let index = 0;
  while(index !== arr.length){
    if(curr.left !== null) arr.push(curr.left);
    if(curr.right !== null) arr.push(curr.right);
    index ++;
    if(index !== arr.length){
      curr = arr[index];
    }
  }
  return arr.length;
}