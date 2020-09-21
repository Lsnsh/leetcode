// 94. 二叉树的中序遍历
// 栈、树、哈希表

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
var inorderTraversal = function (root) {
  let result = [];
  function loop(node) {
    if (node) {
      loop(node.left);
      result.push(node.val);
      loop(node.right);
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
// var inorderTraversal = function (root) {
//   let result = [];
//   let stack = [];
//   while (root || stack.length) {
//     while (root) {
//       stack.push(root);
//       root = root.left;
//     }
//     root = stack.pop();
//     result.push(root.val);
//     root = root.right;
//   }
//   return result;
// };
