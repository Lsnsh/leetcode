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
