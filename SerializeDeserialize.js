function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
} 
function Serialize(pRoot)
{
  // write code here
  if(pRoot === null) return null;
  let result = [];
  serialize(pRoot, result);
  return result;
}
function Deserialize(s)
{
  // write code here
  if(s.length === 0) return null;
  let value = s.shift();
  let node = null;
  if(typeof value === 'number'){
    node = new TreeNode(value);
    node.left = Deserialize(s);
    node.right = Deserialize(s);
  }
  return node;
}
function serialize(root, result){
  if(root === null){
    result.push('$');
  } else{
    result.push(root.val);
    serialize(root.left, result);
    serialize(root.right, result);
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
console.log(a)
console.log(Serialize(a));
console.log(Deserialize(Serialize(a)))