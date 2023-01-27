const assert = require('assert');
const Tree = require('../tree/Tree.js');

describe('Tree Unit Testing - Data integrity testing on tree node data structure', () => {
    let treeTest = new Tree(1);
    
    describe('addChild()', () => {
        it('The function should add children to the root node of the tree', () => {
            treeTest.addChild(35);
            assert.equal(treeTest.children[0].data, 2);
        });
    });

    treeTest.addChild(2);
    treeTest.addChild(3);

    describe('removeChild()', () => {
        it('The function should remove a child element if found', () => {
            treeTest.removeChild(3);
            assert.notEqual(treeTest.children[1].data, 3);
        });
    });
});