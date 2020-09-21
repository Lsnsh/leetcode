// 144. 二叉树的前序遍历
// 栈、树
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  var result = [];
  function loop(node) {
    if (!node || !node.val) {
      return;
    }
    result.push(node.val);
    if (node.left) {
      loop(node.left);
    }
    if (node.right) {
      loop(node.right);
    }
  }
  loop(root);
  return result;
};

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[]}
//  */
// var preorderTraversal = function (root) {
//   var result = [];
//   var stack = [root];
//   while (stack.length) {
//     let node = stack.pop();
//     if (node) {
//       result.push(node.val);
//       if (node.right) {
//         stack.push(node.right);
//       }
//       if (node.left) {
//         stack.push(node.left);
//       }
//     }
//   }
//   return result;
// };
