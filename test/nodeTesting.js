const assert = require('assert');
const Node = require('../node/Node.js');

describe('NodeTesting', () => {
    
    describe('Node - Data integrity test', () => {
        it('Data Integrity - Passing', () => {
            const testNodePassing = new Node('Juan Ramirez');
            assert.equal(testNodePassing.data, 'Juan Ramirez');
        });
    });

    describe('Node - Data integrity test', () => {
        it('Data Integrity - Failing', () => {
            const testNodeFailing = new Node('Chimmy Changa');
            assert.notEqual(testNodeFailing.data, 'CHIMMY CHANGA');
        });
    });

    describe('Node - Testing setNextNode()', () => {
        it('setNextNode() - Failing', () => {
            const node = new Node(1);
            assert.ifError(node.setNextNode('test'), new Error());
        });
    });

    describe('Node - Testing setNextNode()', () => {
        it('setNextNode() - Passing', () => {
            const testNode = new Node('Juan R');
            testNode.setNextNode(new Node('Symone R'))
            assert.equal(testNode.getNextNode().data, 'Symone R');
        });
    });

    describe('Node - Testing setPreviousNode()', () => {
        it('setPreviousNode() - Passing', () => {
            const testNode = new Node('Smiley R');
            testNode.setPreviousNode(new Node('Rosa R'))
            assert.equal(testNode.getPreviousNode().data, 'Rosa R');
        });
    });

    describe('Node - Testing setNextNode()', () => {
        it('setNextNode() - Failing', () => {
            const nodeTest = new Node(1000);
            assert.ifError(nodeTest.setNextNode('Error'), new Error());
        });
    });
});