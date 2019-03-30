/**
 * 
 * @param {Number} value --节点值 
 */
function TreeNode(value){
  this.value = value;
  this.left = null;
  this.right = null;
  this.parent = null;
}

/**
 * 
 * @param {Number} value --插入的值
 * @param {TreeNode} root --AVL树根节点
 */
function Insert(value, root){
  let curr = root;
  let node = new TreeNode(value);
  while(true){
    if(curr.value > value){
      if(curr.left !== null){
        curr = curr.left;
      }else{
        curr.left = node;
        node.parent = curr;
        break;
      }
    }else{
      if(curr.right !== null){
        curr = curr.right;
      }else{
        curr.right = node;
        node.parent = curr;
        break;
      }
    }
  }
  detectUnbalance(node.parent);
}

function isBalance(node){
  return getDepth(node.left) - getDepth(node.right);
}

function detectUnbalance(node){
  while(node !== null){
    switch(isBalance(node)){
      case 2:
        if(isBalance(node.left) === 1){
          LL(node);
        }else{
          LR(node);
        }
        break;
      case -2:
        if(isBalance(node.right) === 1){
          RL(node);
        }else{
          RR(node);
        }
        break;
      default:
        node = node.parent;
    }
  }
}

/**
 * 
 * @param {Number} value --插入的值
 * @param {TreeNode} root --AVL树根节点
 */
function Delete(value, root){
  let found = false;
  let curr = root;
  while(curr !== null){
    if(curr.value > value){
      curr = curr.left;
    }else if(curr.value < value){
      curr = curr.right;
    }else{
      found = true;
      curr = curr.parent;
      if(curr.left.value === value){
        curr.left = null;
      }else{
        curr.right = null;
      }
    }
  }
  detectUnbalance(curr);
}

/**
 * 最底层的不平衡的节点的左子树的左子树最深
 * @param {TreeNode} node --最底层的不平衡的节点 
 */
function LL(node){
  let parent = node.parent;
  let leftChild = node.left;
  let leftRightChild = node.left.right;
  if(parent.left === node){
    parent.left = leftChild;
  }else{
    parent.right = leftChild;
  }
  leftChild.parent = parent;
  leftChild.right = node;
  node.parent = leftChild;
  node.left = leftRightChild;
  leftRightChild.parent = node; 
}

/**
 * 最底层的不平衡的节点的右子树的右子树最深
 * @param {TreeNode} node --最底层的不平衡的节点 
 */
function RR(node){
  let parent = node.parent;
  let rightChild = node.right;
  let rightLeftChild = node.right.left;
  if(parent.left === node){
    parent.left = rightChild;
  }else{
    parent.right = rightChild;
  }
  rightChild.parent = parent;
  rightChild.left = node;
  node.parent = rightChild;
  node.right = rightLeftChild;
  rightLeftChild.parent = node;
}

/**
 * 最底层的不平衡的节点的左子树的右子树最深
 * @param {TreeNode} node --最底层的不平衡的节点 
 */
function LR(node){
  RR(node.left);
  LL(node);
}

/**
 * 最底层的不平衡的节点的右子树的左子树最深
 * @param {TreeNode} node --最底层的不平衡的节点 
 */
function RL(node){
  LL(node.right);
  RR(node);
}

/**
 * 获取节点的深度
 * @param {TreeNode} node 
 */
function getDepth(node){
  if(node === null) return 0;
  return 1 + (getDepth(node.left) > getDepth(node.right) ? getDepth(node.left) : getDepth(node.right));
}

/**
 * 先序遍历
 * @param {TreeNode} node 
 */
function NLR(node){
  let arr = [node];
  let result = [];
  while(arr.length !== 0){
    let curr = arr.pop();
    result.push(curr);
    if(result.right !== null){
      arr.push(result.right);
    }
    if(result.left !== null){
      arr.push(result.left);
    }
  }
  return result;
}

/**
 * 中序遍历
 * @param {TreeNode} node 
 */
function LNR(node){
  let arr = [];
  let result = [];
  if(node.right !== null){
    arr.push(node.right);
  }
  node.dirty = true;
  arr.push(node);
  if(node.left !== null){
    arr.push(node.left);
  }
  while(arr.length !== 0){
    let curr = arr.pop();
    if(curr.dirty){
      result.push(curr);
    }else{
      if(curr.right !== null){
        arr.push(curr.right);
      }
      curr.dirty = true;
      if(curr.left !== null){
        arr.push(curr.left);
      }
    }
  }
  return result;
}

/**
 * 后序遍历
 * @param {TreeNode} node 
 */
function LRN(node){
  let arr = [];
  let result = [];
  node.dirty = true;
  arr.push(node);
  if(node.right !== null){
    arr.push(node.right);
  }
  if(node.left !== null){
    arr.push(node.left);
  }
  while(arr.length !== 0){
    let curr = arr.pop();
    if(curr.dirty){
      result.push(curr);
    }else{
      curr.dirty = true;
      arr.push(curr);
      if(curr.right !== null){
        arr.push(curr.right);
      }
      if(curr.left !== null){
        arr.push(curr.left);
      }
    }
  }
  return result;
}