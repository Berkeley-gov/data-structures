const LinkedList = require('../linkedlist/LinkedList.js');

module.exports = class Stack {
    // Infinity so that the stack is unlimited unless we define a size for it upon instantiation later.
    constructor(maxSize = Infinity) {
        this.stack = new LinkedList();
        this.size = 0;
        this.mazSize = maxSize;
    }

    hasRoom() {
        return (this.size < this.mazSize);
    }

    isEmpty() {
        return (this.size === 0);
    }

    peek() {
        if (!this.isEmpty()) {
            return this.stack.head.data;
        } else {
            return null;
        }
    }

    push(data) {
        if (this.hasRoom()) {
            this.stack.addToHead(data);
            this.size++;
        } else {
            throw new Error('The stack is full -- Stack Overflow!');
        }
    }

    pop() {
        if (!this.isEmpty()) {
            this.size--;
            return this.stack.removeHead();
        } else {
            throw new Error('The stack is empty -- Stack underflow!');
        }
    }
};