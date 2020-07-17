// 622. 设计循环队列
// 设计、队列
/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * 构造器，设置队列长度为 k 。
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.value = new Array(k);
  this.start = 0;
  this.end = -1;
  this.size = 0;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * 向循环队列插入一个元素。如果成功插入则返回真。
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.size === this.value.length) {
    return false;
  }
  this.end++;
  if (this.end >= this.value.length) {
    this.end = 0;
  }
  this.value[this.end] = value;
  this.size++;
  return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * 从循环队列中删除一个元素。如果成功删除则返回真。
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.size === 0) {
    return false;
  }
  this.value[this.start] = undefined;
  this.start++;
  if (this.start >= this.value.length) {
    this.start = 0;
  }
  this.size--;
  return true;
};

/**
 * Get the front item from the queue.
 * 从队首获取元素。如果队列为空，返回 -1 。
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.size === 0) {
    return -1;
  }
  return this.value[this.start];
};

/**
 * Get the last item from the queue.
 * 获取队尾元素。如果队列为空，返回 -1 。
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.size === 0) {
    return -1;
  }
  return this.value[this.end];
};

/**
 * Checks whether the circular queue is empty or not.
 * 检查循环队列是否为空。
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.size === 0;
};

/**
 * Checks whether the circular queue is full or not.
 * 检查循环队列是否已满。
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.size === this.value.length;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
