/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
  // write code here
  if(root === null) return [];
  let arr = [root];
  let result = [];
  while(arr.length !== 0){
    let curr = arr.shift();
    result.push(curr.val);
    if(curr.left !== null) {
      arr.push(curr.left);
    }
    if(curr.right !== null){
      arr.push(curr.right);
    } 
  }
  return result;
}

function test(a,b){
  let arr = [];
  if(a !== null) arr.push(a);
  if(b !== null) arr.push(b);
  return arr;
}