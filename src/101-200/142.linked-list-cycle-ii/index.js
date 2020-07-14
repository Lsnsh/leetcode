// 142. 环形链表II
// 链表、双指针
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
  var set = new Set();
  while (head) {
    if (set.has(head)) {
      return head;
    } else {
      set.add(head);
      head = head.next;
    }
  }
  return null;

  // 解法二
  // var fast = head, slow = head;
  // while (fast && fast.next) {
  //   fast = fast.next.next;
  //   slow = slow.next;
  //   if (fast === slow) {
  //     fast = head;
  //     while (true) {
  //       if (fast === slow) {
  //         return fast;
  //       }
  //       fast = fast.next;
  //       slow = slow.next;
  //     }
  //   }
  // }
  // return null;
};
