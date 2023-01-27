const assert = require('assert');
const Stack = require('../stack/Stack.js');

describe('Stack Unit Testing - Data integrity testing on stack data structure.', () => {
    let stackTest = new Stack(4);

    describe('push()', () => {
        stackTest.push(100);
        stackTest.push(250);

        const headValue = stackTest.stack.head.data;

        it('The function should add an element to the head of the stack', () => {
            assert.equal(headValue, 250);
        });

        it('The function should throw an error when overflowed', () => {
            assert.ifError(stackTest.push(50));
        });
    });

    describe('peek()', () => {
        const peekValue = stackTest.peek();
        const currentHeadValue = stackTest.stack.head.data;

        it('The function should return the head element of the stack', () => {
            assert.equal(peekValue, currentHeadValue);
        });

        it('The function should return null if the list is empty', () => {
            const testStackPeek = new Stack();

            assert.equal(testStackPeek.peek(), null);
        });
    });

    describe('pop()', () => {
        stackTest.push(300)
        stackTest.push(350)
        const poppedValue = stackTest.pop();

        it('The function should remove and return the head element of the stack', () => {
            assert.equal(poppedValue, 350);
        });
    });

}); 