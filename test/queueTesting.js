const assert = require('assert');
const Queue = require('../queue/Queue.js');

describe('Queue Unit Testing - Data integrity testing on linked list data structure', () => {
    let queueTest = new Queue(5);

    describe('isEmpty()', () => {
        it('The function should return true if the list empty', () => {
            assert.equal(queueTest.isEmpty(), true);
        });
    });

    describe('isEmpty()', () => {
        it('The function should return false if the list is not empty', () => {
            queueTest.enqueue(10);

            assert.equal(queueTest.isEmpty(), false);
        });
    });

    describe('hasRoom()', () => {
        it('The function should return true if the list has room for more elements', () => {
            assert.equal(queueTest.hasRoom(), true);
        });
    });

    describe('hasRoom()', () => {
        it('The function should return false if the list has no room for elements', () => {
            queueTest.enqueue(9);
            queueTest.enqueue(8);
            queueTest.enqueue(7);
            queueTest.enqueue(6);

            assert.equal(queueTest.hasRoom(), false);
        });
    });

    describe('dequeue()', () => {
        it('The function should remove the current head of the queue and replaces it with the following node', () => {
            const removedData = queueTest.dequeue();
            assert.equal(removedData, 10);
            assert.equal(queueTest.hasRoom(), true)
        });
    });

    describe('dequeue()', () => {
        it('The function should add new nodes to the tail of the queue', () => {
            queueTest.enqueue(22)
            assert.equal(queueTest.queue.tail.data, 22);
            assert.equal(queueTest.hasRoom(), false)
        });
    });
})
