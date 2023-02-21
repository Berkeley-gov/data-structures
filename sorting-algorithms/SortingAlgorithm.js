
module.exports = class SortingAlgorithims {
    /**
     * The bubble sort algorithm swaps 
     * elements if the element on the left is 
     * larger than the one on the right.
     * 
     * temp = list[index_1]
     * list[index_1] = list[index_2]
     * list[index_2] = temp 
     * 
     * Given a moderately unsorted data-set, bubble sort requires 
     * multiple passes through the input before producing a sorted list. 
     * Each pass through the list will place the next largest value in its proper place.
     * 
     * We are performing n-1 comparisons for our inner loop. Then, we must go through 
     * the list n times in order to ensure that each item in our list has been placed 
     * in its proper order.
     * 
     * The n signifies the number of elements in the list. In a worst case scenario, 
     * the inner loop does n-1 comparisons for each n element in the list.
     * 
     * has runtime Big(0) of 0(n^2)
     * 
     * The bubble sort algorithm takes an array of elements and reorders the elements of 
     * the input from smallest to largest. To achieve this, bubble sort works by comparing a 
     * pair of neighboring elements and swapping their positions in the array so that the larger 
     * of the two elements is always on the right. Doing this continuously results in the largest 
     * element “bubbling” up to the end of the array, giving this sort its name. The algorithm 
     * only stops when there are no more values that need to be swapped.
     */
    bubbleSort = array => { //TODO: make this into a pure function.
        let swapping = true;

        while (swapping) {
            swapping = false;
            /**
             * The for loop should visit every element in the input array starting from 
             * the first element and stopping at the second-to-last element. Setting the 
             * condition for the loop this way allows us to stay within the bounds of our 
             * input array and only check elements that exist.
             */
            for (let i = 0; i < array.length - 1; i++) {
                if (array[i] > array[i + 1]) {
                    console.log(`Swapping pair ${array[i]}, ${array[i + 1]}, in [${array}]`);
                    this.swap(array, i, i + 1);
                    /**
                     * Keep our while loop running by changing the value of the while 
                     * condition variable so that it evaluates as true.
                     */
                    swapping = true;
                }

            }
        }

        return array;
    };

    swap = (array, indexOne, indexTwo) => {
        // Saving the value of the element at the indexTwo position of the array.
        const temporary = array[indexTwo]; 
        array[indexTwo] = array[indexOne];
        array[indexOne] = temporary;
    }

    /**
     * The algorithm consists of two distinct steps:
     * Splitting the input array – The algorithm recursively splits the input array until each element is in its own array. 
     * This portion of the algorithm is represented in the top half of the image to the right.
     * Merging sorted arrays – The algorithm compares and combines the elements of arrays until the input array is sorted. 
     * This is shown in the bottom half of the image.
     * 
     * An important point to remember about merge sort is that the algorithm is broken into two parts: splitting and merging.
     * 
     * @param {*} data 
     */
    mergeSort(data) {
        const length = data.length;

        // Base case for recursive step.
        if (length === 1) {
            return data;
        }

        const mid = Math.floor(length / 2);
        const leftArray = data.slice(0, mid); // from start of array to middle of it.
        const rightArray = data.slice(mid, length); // from the middle of the array to the end of it.


        // Recursive call to the mergeSort method.
        return this.merge(this.mergeSort(leftArray),  this.mergeSort(rightArray));
    }

    /**
     * Contains two sorted lists as input.
     * Returns a combined sorted array from the elements stored in the argument variables.
     * @param {*} leftArray 
     * @param {*} rightArray 
     */
    merge = (leftArray, rightArray) => {
        const sortedArray = [];

        while (leftArray.length > 0 && rightArray.length > 0) {
            if (leftArray[0] < rightArray[0]) {
                sortedArray.push(leftArray[0]);
                leftArray.shift();
            } else  {
                sortedArray.push(leftArray[0]);
                rightArray.shift();
            }

        }

        console.log(leftArray);
        console.log(rightArray);
        return sortedArray.concat(leftArray).concat(rightArray);
    }


    /**
     * Quicksort is an efficient sorting algorithm that is based on the divide and conquer strategy. 
     * Like merge sort, the input array is partitioned into smaller parts and then combined after the elements have been rearranged. 
     * Unlike merge sort, which requires additional memory for auxiliary arrays, quicksort is space-saving because it deploys in-place sorting.
     * 
     * On average, like merge sort, the runtime of quicksort is O(N * log N) if partition sizes are roughly equal.
     * 
     * The basic idea of the quicksort algorithm is to:
     * 
     * split the initial unsorted data set into a left partition and a right partition
     * sort each partition recursively until there is only one element left
     * return the sorted array
     * 
     * We use a pivot element to divide our unsorted array into two parts. The elements in these parts must meet these conditions after partitioning:
     * 
     * all elements in the left partition must be less than or equal to the pivot element
     * all elements in the right partition must be greater than or equal to the pivot element
     * Determining the pivot index is done through a procedure called partitioning. Our algorithm uses an array to store the data set and stipulates the boundary of the data set with left and right pointers.
     */
    quicksort = (array, leftBound = 0, rightBound = array.length - 1) => {
        if (rightBound > leftBound) {
            const pivotIndex = this.partition(array, leftBound, rightBound);
            // Recursive calls to quicksort.
            this.quicksort(array, leftBound, pivotIndex - 1);
            this.quicksort(array, pivotIndex, rightBound);
        }
        return array;
    }

    partition = (array, leftIndex, rightIndex) => {
        const pivot = array[Math.floor((leftIndex + rightIndex) / 2)];
        while (leftIndex <= rightIndex) {
            while(array[leftIndex] < pivot)  {
                leftIndex++;
            }
            while (array[rightIndex] > pivot) {
                rightIndex--;
            }
            if (leftIndex <= rightIndex) {
                this.swap(array, leftIndex, rightIndex);
                leftIndex++;
                rightIndex--;
            }
        }
        return leftIndex;
    }
};

