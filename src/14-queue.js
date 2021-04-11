// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */
const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.node = null;
    this.last = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const node = new ListNode(element);
    if (this.node) {
      this.last.next = node;
      this.last = node;
    } else {
      this.node = node;
      this.last = node;
    }
    this.length++;
  }

  dequeue() {
    const current = this.node;
    this.node = this.node.next;
    this.length--;
    return current.value;
  }
}

module.exports = Queue;
