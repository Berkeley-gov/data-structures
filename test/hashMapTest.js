const HashMap = require('../hash-map/HashMap.js');
const assert = require('assert');

describe('Hash Map Unit Testing - Data integrity testing on hash map data structure', () => {
    let hashMapTest = new HashMap(5);
    const hashedIndex = hashMapTest.hash('Juan');

    describe('hash()', () => {
        it('The function should return an integer index value after hashing a value', () => {
            assert.equal(hashedIndex, 4);
        });
    });


    describe('assign()', () => {
        hashMapTest.assign('Rosa Garcia', 'Hello world this is my first hash map');
        const retrieveAssignedValue = hashMapTest.retrieve('Rosa Garcia');
        it('The function should index the hashed value and assign the data to storage', () => {
            assert.equal(retrieveAssignedValue, 'Hello world this is my first hash map');
        });
    });


    describe('retrieve()', () => {
        hashMapTest.assign('Juan Ramirez', 24);
        const retrieveAssignedValue = hashMapTest.retrieve('Juan Ramirez');
        it('The function should retrieve the value based on searching for its hashed index', () => {
            assert.equal(retrieveAssignedValue, 24);
        });
    });
});