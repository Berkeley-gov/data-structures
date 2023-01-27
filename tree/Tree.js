/*
Trees are wonderful data structures that can model real life hierarchical information, 
including organizational charts, genealogical trees, computer file systems, HTML elements 
on a web page (also known as the Document Object Model, or DOM), state diagrams, and more.

A tree is composed of tree nodes. A tree node is a very simple data structure that contains:

-- Data
-- A list of children, where each child is itself a tree node

We can add data to and remove data from a tree and traverse it in two different ways:

-- Depth-first, or
-- Breadth-first
*/
module.exports = class TreeNode {
    constructor(data) {
        this.data = data;
        // Maintain children of TreeNode as a array. This will make it easier to add and remove a child.
        this.children = [];
    }

    addChild(child) {
        if (child instanceof TreeNode) {
            this.children.push(child);
        } else {
            const newTreeNode = new TreeNode(child);
            this.children.push(newTreeNode);
        }
    }

    removeChild(childToRemove) {
        const length = this.children.length;
        // Base case for the recursive call.
        this.children = this.children.filter((child) => {
            if (childToRemove instanceof TreeNode) {
                //  Returns true if childToRemove is not equal to child, else return false.
                return childToRemove !== child;
            } else {
                // Return true if childToRemove is not equal to child‘s data, else return false.
                return child.data !== childToRemove;
            }
        });

        if (length === this.children.length) {
            this.children.forEach((child) => child.removeChild(childToRemove));
        }
    }

    // Recursive method that fully traverses the tree with a top-down approach for each child of the tree
    depthFirstTraversal() {
        console.log(this.data);
        this.children.forEach((child) => child.depthFirstTraversal());
    }

    /*
    Iterative method that fully traverses the tree a level at a time, instead of a child at a time

    Breadth-first traversal visits each child in the children array starting from the first child before 
    visiting their children and further layers until the bottom level is visited. 
    */
    breadthFirstTraversal() {
        // Assigning it to an array that contains the current node as its only element.
        let queue = [ this ];

        while (queue.length > 0) {
            const current = queue.shift();
            console.log(current.data);
            queue = queue.concat(current.children);
        }
    }

    print(level = 0) {
        let result = '';

        for (let i = 0; i < level; i++) {
          result += '-- ';
        }

        console.log(`${result}${this.data}`);
        this.children.forEach(child => child.print(level + 1));
    }
}