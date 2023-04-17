const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
// class Stack {
//   push() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   pop() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   peek() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// }

class Stack {
  constructor() {
    this.arr = []
  }
  push(el) {
    return this.arr.push(el);
  }
  pop(el) {
    return this.arr.pop(el);
  }
  peek() {
    return this.arr[this.arr.length - 1];
  }
}

// const stack = [];
// stack.push(1);
// console.log(stack);
// stack.push(2);
// console.log(stack);

// stack.peek();
// console.log(stack);

// stack.pop(1);
// console.log(stack);

// stack.pop();
// console.log(stack);



module.exports = {
  Stack
};
