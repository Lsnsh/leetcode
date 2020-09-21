// 145. 二叉树的后序遍历
// 栈、树
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  let result = [];
  function loop(node) {
    if (node) {
      loop(node.left);
      loop(node.right);
      result.push(node.val);
    }
  }
  loop(root);
  return result;
};

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[]}
//  */
// var postorderTraversal = function (root) {
//   let result = [];
//   var stack = [root];
//   while (stack.length) {
//     let node = stack.pop();
//     if (node) {
//       result.unshift(node.val);
//       if (node.left) {
//         stack.push(node.left);
//       }
//       if (node.right) {
//         stack.push(node.right);
//       }
//     }
//   }
//   return result;
// };
