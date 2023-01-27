const assert = require('assert');
const LinkedList = require('../linkedlist/LinkedList.js');

describe('LinkedList Unit Testing - Data integrity testing on linked list data structure', () => {

    let testLinkedList = new LinkedList('Rosa Villagrana');

    describe('addToHead()', () => {
        testLinkedList.addToHead('Juan Ramirez');
        
        it('The function should add to the head-node of the linked list', () => {
            assert.equal(testLinkedList.head.data, 'Juan Ramirez');
        });
    });

    describe('addToTail()', () => {
        testLinkedList.addToTail('Peter Parker');
        testLinkedList.addToTail('John Parker');

        it('The function should add to the tail-node of the linked list', () => {
            assert.equal(testLinkedList.tail.data, 'Peter Parker');
        });
    });


    describe('removeHead()', () => {
        testLinkedList.addToHead('Rosa Villagrana');
        const removedHead = testLinkedList.removeHead();

        it('The function should remove the node at the front (head) of the list', () => {
            assert.equal(removedHead, 'Rosa Villagrana');
        });
    });


    describe('removeTail()', () => {
         const removedTailNode = testLinkedList.removeTail();

         it('The function should remove the node at the end (tail) of the list.', () => {
            assert.equal(removedTailNode, 'John Parker')
         });
    });


    describe('removeByData()', () => {
        testLinkedList.addToHead('Albert Villagrana');
        testLinkedList.addToHead('Fabiola Padilla');
        testLinkedList.addToHead('Juan Ramirez')

        const removedNode = testLinkedList.removeByData('Albert Villagrana');
        
        it('The function should remove a node based on searching for specific data input', () => {
            assert.equal(removedNode.data, 'Albert Villagrana');
        });
    })

    testLinkedList.printList();
});