## 141. 环形链表

标签：`链表` `双指针`

给定一个链表，判断链表中是否有环。

为了表示给定链表中的环，我们使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 `0` 开始）。 如果 `pos` 是 `-1`，则在该链表中没有环。

**示例 1：**

```
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

![](./1.png)

**示例  2：**

```
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
```

![](./2.png)

**示例 3：**

```
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
```

![](./3.png)

**进阶：**

你能用 O(1)（即，常量）内存解决此问题吗？

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/linked-list-cycle
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

### 题解

#### 解法一

遍历链表，给已遍历的节点添加标记

运行耗时: 76 ms 内存消耗: 38.2 MB

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 遍历链表
  while (head) {
    if (head.visited) {
      // 如果遍历到被标记过的节点，直接返回 true
      return true;
    }
    // 标记遍历过的节点
    head.visited = true;
    // 往下遍历
    head = head.next;
  }
  // 遍历结束都每遇到过被标记的节点，表明不是环形链表，返回 false
  return false;
};
```

#### 解法二

遍历链表，结合快慢指针、快指针一次走两步，慢指针一次走一步，每走一轮比较一次，环形链表的话肯定会再遇见

运行耗时: 76 ms 内存消耗: 37.9 MB

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  var fast = head;
  var slow = head;
  while (fast && fast.next) {
    // 慢指针一次走一步
    slow = slow.next;
    // 快指针一次走两步
    fast = fast.next.next;
    // 如果快指针位置对应节点与慢指针对应节点相等，表明快指针赶上慢指针，即是环形链表，返回 true
    if (fast === slow) {
      return true;
    }
  }
  return false;
};
```
