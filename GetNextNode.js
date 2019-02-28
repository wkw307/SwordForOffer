/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
function GetNext(pNode)
{
  // write code here
  if(pNode === null) return null;
  if(pNode.left === null && pNode.right ===null && pNode.next === null) return null;
  if(pNode.right !== null) {
    let node = pNode.right;
    while(node.left !== null){
      node = node.left;
    }
    return node;
  }
  if(pNode.next === null) return null;
  if(pNode.next.left === pNode) return pNode.next;

  while(pNode.next !== null && pNode.next.right === pNode){
    pNode = pNode.next;
  }
  return pNode.next === null ? null:pNode.next;

}