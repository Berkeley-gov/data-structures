const LinkedList = require('../linkedlist/LinkedList.js');

module.exports = class Queue {
    constructor(maxSize = Infinity) {
        this.queue = new LinkedList();
        this.size = 0;
        this.maxSize = maxSize;
    }

    // Helper function used to check if the queue is empty.
    isEmpty() {
        return this.size === 0;
    }

    // Helper function used to check if there is room in the queue for more elements.
    hasRoom() {
        return this.size < this.maxSize;
    }

    // Enqueue function will add all new nodes to the tail of the list as FIFO protocol.
    enqueue(data) {
        if (this.hasRoom()) {
            this.queue.addToTail(data);
            this.size++;
        } else {
            throw new Error('Queue is full: cannot add new data.');
        }
    }

    // Dequeue function removes the current head of the queue and replaces it with the following node.
    dequeue() {
        if (!this.isEmpty()) {
            const data = this.queue.removeHead();
            this.size--;
            return data;
        } else {
            throw new Error('Queue is empty: there is no data to remove.');
        }
    }
}