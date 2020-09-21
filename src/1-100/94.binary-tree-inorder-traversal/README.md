## 94. 二叉树的中序遍历

标签：`栈` `树` `哈希表`

给定一个二叉树，返回它的中序   遍历。

**示例:**

```
输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,3,2]
```

**进阶:**  递归算法很简单，你可以通过迭代算法完成吗？

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/binary-tree-inorder-traversal
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

### 题解

中序遍历是先遍历左子树，然后访问根节点，然后遍历右子树。

#### 解法一

运行耗时: 72 ms 内存消耗: 37.4 MB

```javascript
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
```

#### 解法二

运行耗时: 80 ms 内存消耗: 37.2 MB

```javascript
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
  let stack = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    result.push(root.val);
    root = root.right;
  }
  return result;
};
```
