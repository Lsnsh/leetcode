## 145. 二叉树的后序遍历

标签：`栈` `树`

给定一个二叉树，返回它的*后序*遍历。

**示例:**

```
输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [3,2,1]
```

**进阶:**  递归算法很简单，你可以通过迭代算法完成吗？

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/binary-tree-postorder-traversal
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

### 题解

后序遍历是先遍历左子树，然后遍历右子树，最后访问树的根节点。

#### 解法一

递归遍历

运行耗时: 88 ms 内存消耗: 37.2 MB

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
```

#### 解法二

迭代遍历，利用栈模拟递归调用的过程

运行耗时: 92 ms 内存消耗: 37.1 MB

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
var postorderTraversal = function (root) {
  let result = [];
  // 根节点入栈
  var stack = [root];
  while (stack.length) {
    // 出栈，后入先出
    let node = stack.pop();
    if (node) {
      // 逆序插入
      result.unshift(node.val);
      // 左节点先入栈，后出
      if (node.left) {
        stack.push(node.left);
      }
      // 右节点后入栈，先出
      if (node.right) {
        stack.push(node.right);
      }
    }
  }
  return result;
};
```
