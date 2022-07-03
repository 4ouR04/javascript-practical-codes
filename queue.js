//Author 4ouR04
//File: queue.js
//Implements a queue First In First Out
class Queue {
  constructor(items) {
    this.items = [];
  }
  enqueue(element) {
    return this.items.push(element);
  }
  dequeue() {
    if (this.items.length > 0) {
      return this.items.shift();
    }
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length == 0;
  }
  size() {
    return this.items.length;
  }
  clear() {
    return (this.items = []);
  }
}

let queue = new Queue();
