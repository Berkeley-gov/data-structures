const Node = require("../node/Node.js");

module.exports = class LinkedList {
    constructor() {
        // Used to track the head and tail of the bidirectional list (doubley linked list).
        this.head = null;
        this.tail = null;
    }

    // Adds a new node to the beginning (head) of the list.
    addToHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;

        if(currentHead) {
            currentHead.setPreviousNode(newHead);
            newHead.setNextNode(currentHead);
        }

        this.head = newHead;

        if(!this.tail) {
            this.tail = newHead;
        }
    }

    // Adds a new node to the end (tail) of the list.
    addToTail(data) {
        const newTail = new Node(data);
        const currentTail = this.tail;

        if(currentTail) {
            currentTail.setNextNode(newTail);
            newTail.setPreviousNode(currentTail);
        }

        this.tail = newTail;

        if(!this.head) {
            this.head = newTail;
        }
    }
    
    // Removes a node from the begining (head) of the list.
    removeHead() {
        const removedHead = this.head;

        if(!removedHead) {
          return;
        }

        this.head = removedHead.getNextNode();

        if(this.head) {
          this.head.setPreviousNode(null);
        }

        if(removedHead === this.tail) {
          this.removeTail();
        }
        
        return removedHead.data;
    }
    
    // Removes a node from the end (tail) of the list.
    removeTail() {
        const removedTail = this.tail;

        if(!removedTail) {
          return;
        }

        this.tail = removedTail.getPreviousNode();

        if(this.tail) {
          this.tail.setNextNode(null);
        }

        if(removedTail === this.head) {
          this.removeHead();
        }

        return removedTail.data;
    }
    
    // Finds and removes a specific node by its data.
    removeByData(data) {
        let nodeToRemove;
        let currentNode = this.head;

        while (currentNode !== null) {
          if (currentNode.data === data) {
            nodeToRemove = currentNode;
            break;
          }
          currentNode = currentNode.getNextNode();
        }

        if (!nodeToRemove) {
          return null;
        }

        if(nodeToRemove === this.head) {
          this.removeHead();

        } else if(nodeToRemove === this.tail) {
          this.removeTail();

        } else {
          const nextNode = nodeToRemove.getNextNode();
          const previousNode = nodeToRemove.getPreviousNode();
          nextNode.setPreviousNode(previousNode);
          previousNode.setNextNode(nextNode);
        }

        return nodeToRemove;
    }
    
    // A function that allows for the printing of every node and its data.
    printList() {
        let currentNode = this.head;
        let output = '<head> ';

        while (currentNode !== null) {
          output += currentNode.data + ' ';
          currentNode = currentNode.getNextNode();
        }

        output += '<tail>';
        console.log(output);
    }

    findNodeIteratively(data) {
      let currentNode = this.head;
      while (currentNode !== null) {
        if (currentNode.data === data) {
          return currentNode;
        }
        currentNode = currentNode.next;
      }
      return null;
    }

    findNodeRecursively(data, currentNode = this.head) {
      if (currentNode === null) {
        return null;
      } else if (currentNode.data === data) {
        return currentNode;
      } else {
        return this.findNodeRecursively(data, currentNode.next);
      }
    }
}

