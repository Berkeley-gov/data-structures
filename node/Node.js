module.exports = class Node {
    // A node should only keep track of the following node pointers: next and previous.
    constructor(data) {
        // A previous and next node are needed to create a linked list that is bidirectional.
        this.data = data;
        this.next = null;
        this.previous = null;
    }

    // Sets the pointer of the next node to reference object that was passed as an argument.
    setNextNode(node) {
        try {
            if(node instanceof Node || node === null) {
                this.next = node;
            } else {
                throw new Error('The next node must be a member of the Node class.\n');
            }
        } catch(error) {
            console.log('Error stack trace: ', error);
        }
    }

    // Retrieves the next node in the list.
    getNextNode() {
        return this.next;
    }

    // Sets the pointer to the previous node to reference the object that was passed as an agrument.
    setPreviousNode(node) {
        try {
            if(node instanceof Node || node === null) {
                this.previous = node;

            } else {
                throw new Error('Error: failure to set the previous node.');
            }
        } catch(error) {
            console.log('Error stack trace: ', error);
        }
    }

    // Retrieves the previous node in the list.
    getPreviousNode() {
        return this.previous;
    }
}

