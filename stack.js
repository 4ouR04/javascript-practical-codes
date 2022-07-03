// Author 4ouR04-  Amos Mwongela Gabriel
//implemet stack: Last In First Out LIFO
//I will be rewriting this file in typescript as soon as  possible

class Stack {
  constructor() {
    this.items = [];
  }
  add(elem) {
    return this.items.push(elem);
  }
  remove() {
    if (this.items.length > 0) {
      return this.items.pop();
    }
  }
  //view the last element
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
    this.items = [];
  }
}

let stack = new Stack();
stack.add(23);
stack.add(43);
console.log(stack.clear());
console.log(stack.peek());
console.log(stack.size());
