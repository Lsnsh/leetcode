// 141. 环形链表
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
 * @return {boolean}
 */
var hasCycle = function (head) {
  while (head) {
    if (head.visited) {
      return true;
    }
    head.visited = true;
    head = head.next;
  }
  return false;

  // 解法二
  // var fast = head;
  // var slow = head;
  // while (fast && fast.next) {
  //   slow = slow.next;
  //   fast = fast.next.next;
  //   if (fast === slow) {
  //     return true;
  //   }
  // }
  // return false;
};
