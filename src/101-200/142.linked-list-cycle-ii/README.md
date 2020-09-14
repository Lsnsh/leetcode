## 142. 环形链表 II

标签：`链表` `双指针`

给定一个链表，返回链表开始入环的第一个节点。  如果链表无环，则返回  `null`。

为了表示给定链表中的环，我们使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 `0` 开始）。 如果 `pos` 是 `-1`，则在该链表中没有环。

**说明：**不允许修改给定的链表。

**示例 1：**

```
输入：head = [3,2,0,-4], pos = 1
输出：tail connects to node index 1
解释：链表中有一个环，其尾部连接到第二个节点。
```

**示例  2：**

```
输入：head = [1,2], pos = 0
输出：tail connects to node index 0
解释：链表中有一个环，其尾部连接到第一个节点。
```

**示例 3：**

```
输入：head = [1], pos = -1
输出：no cycle
解释：链表中没有环。
```

进阶：
你是否可以不用额外空间解决此题？

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/linked-list-cycle-ii
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

### 题解

#### 解法一

使用 `Set / Map` 存储已遍历的链表节点，由于 `Set` 的值 和 `Map` 的键的唯一性，后续如果检测到相同的链表节点，则表明当前链表是环形链表

运行耗时: 88 ms 内存消耗: 38.6 MB

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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // 定义 set 用于存储已遍历过的节点
  var set = new Set();
  while (head) {
    // 判断当前链表节点 head 是否存储在 set 中
    if (set.has(head)) {
      // 如果存在，则表明当前链表节点 head 遍历过，返回 head
      return head;
    } else {
      // 否则将当前链表节点 head 存储在 set 中
      set.add(head);
      // 检查下一个链表节点
      head = head.next;
    }
  }
  // 链表遍历完都没终止执行，表明链表不是环形链表，返回 null
  return null;
};
```

#### 解法二

- 使用快慢指针找到首次相遇点，确定链表为环形链表
- 将快指针从头开始出发，慢指针从首次相遇点出发，每次都走一步，再次遇见的节点，就是环形链表入环点
- 具体如何推导出**再次相遇的节点**，就是**入环点**，可以看看这篇[题解](https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/141ti-de-kuo-zhan-ru-guo-lian-biao-you-huan-ru-he-/)

运行耗时: 84 ms 内存消耗: 38 MB

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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // 定义快慢指针
  var fast = head,
    slow = head;
  while (fast && fast.next) {
    // 快指针一次走两步，慢指针一次走一步
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      // 如果快指针和慢指针首次相遇，表示是环形链表，将快指针从头开始走起
      fast = head;
      while (true) {
        if (fast === slow) {
          // 如果快慢指针再次相遇，第二次相遇的节点，就是环形链表的入环点（链表开始入环的第一个节点）
          return fast;
        }
        // 快慢指针都是一次走一步，快指针从头开始出发，慢指针从首次相遇点出发
        fast = fast.next;
        slow = slow.next;
      }
    }
  }
  return null;
};
```
