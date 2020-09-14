## 2. 两数相加

标签：`链表`、`数学`

给出两个 **非空** 的链表用来表示两个非负的整数。其中，它们各自的位数是按照**逆序**的方式存储的，并且它们的每个节点只能存储**一位**数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0  开头。

**示例：**

```
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/add-two-numbers
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

### 题解

#### 解法一

运行耗时: 208 ms 内存消耗: 15.6 MB

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let result = {},
    flag = false,
    count = 0;
  function add(l1, l2) {
    if (!l1) {
      l1 = {};
    }
    if (!l2) {
      l2 = {};
    }
    let sum = (l1.val ? l1.val : 0) + (l2.val ? l2.val : 0);
    if (flag) {
      sum++;
    }
    flag = sum >= 10;
    result[count] = sum % 10;
    count++;
    if (l1.next || l2.next) {
      add(l1.next, l2.next);
    } else {
      if (flag) {
        result[count] = 1;
        flag = false;
        count++;
      }
    }
  }
  add(l1, l2);
  function format(i) {
    return {
      val: result[i],
      next: i + 1 < count ? format(i + 1) : null,
    };
  }
  return format(0);
};
```
