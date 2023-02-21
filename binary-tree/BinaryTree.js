/* 
A binary tree is an efficient data structure for fast data storage and retrieval due to its O(log N) runtime. 
It is a specialized tree data structure that is made up of a root node, and at most two child branches or subtrees. 
Each child node is itself a binary tree.

Each node has the following properties:

- data
- a depth value, where depth of 1 indicates the top level of the tree and a depth greater than 1 is a level somewhere lower in the tree
-  a left pointer that points to a left child which is itself a binary tree, and must have a data lesser than the root node’s data
- a right pointer that points to a right child which is itself a binary tree, and must have a data greater than the root node’s data
*/
module.exports = class BinaryTree {
    constructor(value, depth = 1) {
        this.value = value;
        this.depth = depth;
        this.left = null;
        this.right = null;
    }

    /* 
    The method inserts a new value into a binary tree, comparing it with the root node’s value:

        Insert 50
        50 < 100, left child node doesn't exist, create a left child node
            100
            /
            50 

        Insert 125
        125 > 100, right child node doesn't exist, create a right child node
                100
            /   \
            50    125

        Insert 75
        75 < 100, left child node of 50 exists, recursive insert at left child
        75 > 50, right child node doesn't exist, create a right child node
                100
            /   \
            50    125
            \
            75 

        Insert 25
        25 < 100, left child node of 50 exists, recursive insert at left child
        25 < 50, left child node doesn't exist, create a left child node
                100
            /   \
            50    125
            /  \
            25  75
    */
    insert(value) {
        if (value < this.value) {
            if (!this.left) {
                this.left = new BinaryTree(value, this.depth + 1);
            } else {
                this.left.insert(value); // Recursive call
            }
        } else {
            if (!this.right) {
                this.right = new BinaryTree(value, this.depth + 1);
            } else {
                this.right.insert(value); // Recursive call
            }
        }
    }

    /*
    Binary search tree provides a fast and efficient way to store and retrieve values. 
    Like with .insert(), the procedure to retrieve a tree node by its value is recursive. 
    We want to traverse the correct branch of the tree by comparing the target value to the 
    urrent node’s value.

    The base case for our recursive method is that when the values match, we return the current node. 
    The recursive step is to call itself from an existing left or right child node with the value.
    */
   getNodeByValue(value) {
        if (this.value === value) {
            return this;
        } else if ((this.left) && (value < this.value)) {
            return this.left.getNodeByValue(value);
        } else if (this.right) {
            return this.right.getNodeByValue(value);
        } else {
            return null;
        }
   }

   /*
   There are two main ways of traversing a binary tree: breadth-first and depth-first. 
   With breadth-first traversal, we begin traversing at the top of the tree’s root node, 
   displaying its data and continuing the process with the left child node and the right child 
   node. Descend a level and repeat this step until we finish displaying all the child nodes at the deepest 
   level from left to right.

    With depth-first traversal, we always traverse down each left-side branch of a tree fully before proceeding 
    down the right branch. However, there are three traversal options:

    - Preorder is when we perform an action on the current node first, followed by its left child 
    node and its right child node
    
    - Inorder is when we perform an action on the left child node first, followed by the current node and the right child node
    
    - Postorder is when we perform an action on the left child node first, followed by the right child node and then the current node
    For this lesson, we will implement the inorder option. The advantage of this option is that the data is displayed in a sorted order from the smallest to the biggest.
   */
    depthFirstTraversal() {
        if (this.left) {
          this.left.depthFirstTraversal();
        }
        
        console.log(`Depth=${this.depth}, Value=${this.value}`);
        if (this.right) {
          this.right.depthFirstTraversal();
        }
    }



};