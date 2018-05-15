/*
 * Desciption: 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含
 *             重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
 * Solution:
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin) {
    // write code here
    if (pre == null) return null;
    rootNum = vin.indexOf(pre[0]);
    root = new TreeNode(pre[0]);
    curr = root;
    before = [];
    for (var i = 0; i < pre.length; i++) {
        if (i < rootNum + 1) {
            if (vin.indexOf(curr.val) > vin.indexOf(pre[i + 1])) {
                curr.left = new TreeNode(pre[i + 1]);
            }
        }
    }
}