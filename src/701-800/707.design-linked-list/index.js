// 707. 设计链表
// 设计、链表
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
  this.val = {};
  this.length = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * 获取链表中第 index 个节点的值。如果索引无效，则返回-1。
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index, isAboutNext) {
  // if (!isAboutNext) {
  //   console.log(this.val, this.length)
  // }
  if (index < 0 || index >= this.length) {
    return -1;
  }
  var cur = this.val;
  for (var i = 0; i < index; i++) {
    if (cur && cur.next) {
      cur = cur.next;
    }
  }
  return isAboutNext ? cur : cur && cur.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * 在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  if (this.length === 0) {
    this.val = {
      val: val
    }
  } else {
    this.val = {
      val: val,
      next: this.val
    }
  }
  this.length++;
};

/**
 * Append a node of value val to the last element of the linked list.
 * 将值为 val 的节点追加到链表的最后一个元素。
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  this.get(this.length - 1, true).next = {
    val: val
  }
  this.length++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * 在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.length) {
    return;
  }
  if (index === this.length) {
    this.addAtTail(val);
  } else if (index <= 0) {
    this.addAtHead(val);
  } else {
    var prev = this.get(index - 1, true);
    var next = this.get(index, true);
    prev.next = {
      val: val,
      next: next
    }
    this.length++;
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * 如果索引 index 有效，则删除链表中的第 index 个节点。
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.length) {
    return;
  }

  var cur = this.get(index, true);
  if (index === 0) {
    this.val = this.get(index + 1, true);
  } else {
    var prev = this.get(index - 1, true);
    var next = this.get(index + 1, true);
    prev.next = next;
  }
  this.length--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
