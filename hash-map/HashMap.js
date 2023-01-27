
const LinkedList = require('../linkedlist/LinkedList.js');
/* Hash maps are data structures that serve as efficient key-value stores. 
They are capable of assigning and retrieving data in the fastest way possible. 
This is because the underlying data structure that hash maps use is an array.
*/
module.exports = class HashMap {
    constructor(size = 0) {
        this.hashMap = new Array(size)
        .fill(null)
        .map(() => new LinkedList())
    }

    hash(key) {
        /* Add the result of calling .charCodeAt() on the current character 
         of key and hashCode to the hashCode variable. 
        */
        let hashCode = 0;
        for(let i = 0; i < key.length; i++) {
            hashCode += hashCode + key.charCodeAt(i);
        }
        /* compressing the value stored in hashCode by using modular arithmetic 
        to return the remainder of dividing hashCode by the length of the hash map. 
        */
        return hashCode % this.hashMap.length;
    }

    // Handles the logic needed to take in a key-value pair and store the value at a particular index.
    assign(key, value) {
        const arrayIndex = this.hash(key);
        const linkedList = this.hashMap[arrayIndex];

        if (linkedList.head === null) {
            linkedList.addToHead({ key, value });
            return;
        }

        let current = linkedList.head;

        while (current) {
            if (current.data.key === key) {
                current.data = { key, value };
            }

            if (!current.getNextNode()) {
                const newNode = new Node({ key, value });
                current.setNextNode(newNode);
                break;
            }

            current = current.getNextNode();
        }
    }

    /* This method will make use of .hash()‘s deterministic nature 
    to find the value we’re looking for in the hash map. */
    retrieve(key) {
        const arrayIndex = this.hash(key);
        let current = this.hashMap[arrayIndex].head;

        while (current) {
            if (current.data.key === key) {
                return current.data.value;
            }
            current = current.next;
        }
        return null;
    }
};