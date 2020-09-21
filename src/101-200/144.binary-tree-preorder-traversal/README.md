## 144. 二叉树的前序遍历

标签：`栈` `树`

给定一个二叉树，返回它的*前序*遍历。

**示例:**

```
输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,2,3]
```

**进阶:**  递归算法很简单，你可以通过迭代算法完成吗？

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/binary-tree-preorder-traversal
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

### 题解

前序遍历首先访问根节点，然后遍历左子树，最后遍历右子树。

#### 解法一

递归遍历

运行耗时: 80 ms 内存消耗: 37.4 MB

```javascript
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
```

#### 解法二

迭代遍历，利用栈模拟递归调用的过程

运行耗时: 68 ms 内存消耗: 37.4 MB

```javascript
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
  // 根节点入栈
  var stack = [root];
  while (stack.length) {
    // 出栈，后入先出
    let node = stack.pop();
    if (node) {
      result.push(node.val);
      // 右节点先入栈，后出
      if (node.right) {
        stack.push(node.right);
      }
      // 左节点后入栈，先出
      if (node.left) {
        stack.push(node.left);
      }
    }
  }
  return result;
};
```
