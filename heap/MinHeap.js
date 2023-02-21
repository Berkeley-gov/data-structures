/* 
A heap data structure is a specialized tree data structure that satisfies the heap condition:

In a max-heap, for any given element, its parent’s value is greater than or equal to its value.
In a min-heap, for any given element, its parent’s value is less than or equal to its value.
A heap data structure is commonly implemented as a binary tree.

Building a min-heap.
Min-heaps efficiently keep track of the minimum value in a dataset, even as we add and remove elements.

Heaps enable solutions for complex problems such as finding the shortest path (Dijkstra’s Algorithm) or 
efficiently sorting a dataset (heapsort).
*/
class MinHeap {
    /**
     * MinHeap class will store two pieces of information:
     * 
     * An array of elements within the heap.
     * A count of the elements within the heap.
     * 
     *  To make our lives easier, we’ll always keep one element at the beginning of the array with the value null. 
     * By doing this, we can simplify our coding by always referencing our minimum element at index 1 instead of 0 
     * nd our last element at index this.size instead of this.size - 1. 
     */
    constructor() {
        this.heap = new Array(null);
        this.size = 0;
    }

    /**
     * The MinHeap class needs to satisfy to conditions:
     * The element at index 1 is the minimum value in the entire list.
     * Every child element in the list must be larger than its parent.
     */
    add(value) {
        // Use push to add elements to the end of the array, thus perserving the rules of a Min-Heap.
        this.heap.push(value);
        this.size++;
        this.bubbleUp();

    }

    /**
     * popMin() retrieves the minimum value of our heap.
     * 
     * Our internal heap mirrors a binary tree. There’s a delicate balance of parent and child 
     * relationships we would ruin by directly removing the minimum.
     * 
     * We need to remove an element that has no children, in this case, the last element. 
     * If we swap the minimum with the last element, we can easily remove the minimum from 
     * the end of the list.
     */
    popMin() {
        if (this.size === 0) {
            return null;
        }

        this.swap(1, this.size);
        const min = this.heap.pop();
        this.size--;
        this.heapify();
        return min;
    }

    /**
     * heapify(), which performs a similar role to .bubbleUp(), except now we’re moving down 
     * the tree instead of up. The current element is a parent that can have either a left 
     * child or two children, but not just a right child.
     * 
     * The MinHeap class method .heapify() restores the minimum element in the heap after it has been removed in.
     */
    heapify() {
        let current = 1;
        let leftChild = getLeft(current);
        let rightChild = getRight(current);
        
        while (this.canSwap(current, leftChild, rightChild)) {
            while (this.canSwap(current, leftChild, rightChild)) {
                if (this.exists(leftChild) && this.exists(rightChild)) {
                  if (this.heap[leftChild] < this.heap[rightChild]) {
                    this.swap(current, leftChild);
                    current = leftChild;
                  } else {
                    this.swap(current, rightChild);
                    current = rightChild;
                  }        
                } else {
                  this.swap(current, leftChild);
                  current = leftChild;
                }
                leftChild = getLeft(current);
                rightChild = getRight(current);
            }

            leftChild = getLeft(current);
            rightChild = getRight(current);
        }
    }

    /**
     * exists(index) is helper method used to conduct a verified swap in canSwap(). 
     * @param {*} index 
     * @returns index
     */
    exists(index) {
        return index <= this.size;
    }

    /**
     * canSwap(), to return true if swapping can occur for either child and false otherwise.
     * @param {*} current 
     * @param {*} leftChild 
     * @param {*} rightChild 
     * @returns 
     */
    canSwap(current, leftChild, rightChild) {
        // Check that one of the possible swap conditions exists
        return (
          this.exists(leftChild) && this.heap[current] > this.heap[leftChild]
          || this.exists(rightChild) && this.heap[current] > this.heap[rightChild]
        );
    }

    /**
     * bubbleUp() task is to preserve the heap properties after an element is 
     * added to the heap. For now, log a message 'Bubble Up' inside the method.
     * 
     * We use an array for storing internal elements, but we’re modeling it on a binary tree, 
     * where every parent element has up to two child elements.
     * 
     * Child and parent elements are determined by their relative indices within the internal heap. 
     * By doing some arithmetic on an element’s index, we can determine the indices for parent and 
     * child elements (if they exist).
     * 
     * Parent: (index / 2), rounded down
     * Left Child: index * 2
     * Right Child: (index * 2) + 1
     * These calculations are important for the efficiency of the heap, but they’re not necessary to memorize, so we have provided three helper functions: getParent(), getLeft(), and getRight() in MinHeap.js.
     * These helpers take an index as the sole parameter and return the corresponding parent or child index.
     * 
     * These calculations are important for the efficiency of the heap, but they’re not necessary to memorize
     */
    bubbleUp() {
        let current = this.size;

        while (current > 1 && this.heap[current] < this.heap[getParent(current)]) {
            this.swap(current, getParent(current));
            current = getParent(current);
        }
    }

    /**
     * swap() method swaps the parent index and the current index. 
     */
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }


};

// Helper functions for bubbleUp()
const getParent = current => Math.floor(current / 2);
const getLeft = current => current * 2;
const getRight = current => current * 2 + 1;

/**
 * To recap: MinHeap tracks the minimum element as the element at index 1 within an internal 
 * Javascript array.
 * 
 * When adding elements, we use .bubbleUp() to compare the new element with its parent, 
 * making swaps if it violates the heap condition: children must be greater than their parents.
 * 
 * 
 * When removing the minimum element, we swap it with the last element in the heap. 
 * Then we use .heapify() to compare the new root with its children, swapping with the smaller 
 * child if necessary.
 * 
 * Heaps are useful because they’re efficient in maintaining their heap condition. Building a 
 * heap using elements that decrease in value would ensure that we continually 
 * violate the heap condition.
 */

module.exports = {
    MinHeap,
    getParent,
    getLeft,
    getRight
}