const assert = require('assert');
const BinaryTree = require('../binary-tree/BinaryTree.js');

describe('Binary Search Tree Unit Testing - Data integrity testing on binary tree data structure', () => {
    const binaryTreeTest = new BinaryTree(50);

    describe('insert()', () => {
        // adding a root node upon instantion.
        binaryTreeTest.insert(29);
        it('The method should inserts a new value into a binary tree, comparing it with the root node’s value', () => {
            assert.equal(29, binaryTreeTest.left.value);
        });
    });

    describe('getNodeByValue', () => {
        const nodeRetrieved = binaryTreeTest.getNodeByValue(50);
        it('The method should return a node in the binary tree based on the inputed value', () => {
            assert.equal(nodeRetrieved.value, 50);
        });
    });

    describe('getNodeByValue', () => {
        const nodeRetrieved = binaryTreeTest.getNodeByValue(29);
        it('The method should return a node in the binary tree based on the inputed value', () => {
            assert.equal(nodeRetrieved.value, 29);
        });
    });
});