/**
 * ============================================================
 * Insertion Sort Algorithm
 * ============================================================
 *
 * Description:
 * Insertion Sort builds a sorted sequence one element at a time.
 * Each element is taken from the unsorted portion and inserted
 * into its correct position within the sorted portion.
 *
 * Time Complexity:
 * - Best Case:    O(n)
 * - Average Case: O(n²)
 * - Worst Case:   O(n²)
 *
 * Space Complexity:
 * - O(1) - In-place sorting
 *
 * ============================================================
 */


/**
 * Sorts an array in ascending order using Insertion Sort.
 *
 * @param {number[]} arr - The array to sort.
 * @returns {number[]} The sorted array.
 */
function insertionSort(arr) {

    // Start from index 1 because the first element
    // at index 0 is considered already sorted.
    for (let i = 1; i < arr.length; i++) {

        // Store the current element that we want
        // to insert into the sorted sequence.
        const key = arr[i];

        // Start comparing with the element immediately
        // before the current element.
        let j = i - 1;

        // Move elements greater than 'key'
        // one position to the right.
        while (j >= 0 && arr[j] > key) {

            arr[j + 1] = arr[j];

            // Move one position backward
            // through the sorted sequence.
            j--;
        }

        // Insert the key into its correct position.
        arr[j + 1] = key;
    }

    // Return the sorted array.
    return arr;
}


// ============================================================
// Example 1: Basic Sorting
// ============================================================

const numbers = [7, 3, 8, 2, 6, 4, 5];

console.log("Before sorting:", numbers);

// Output:
// Before sorting: [7, 3, 8, 2, 6, 4, 5]

const sortedNumbers = insertionSort(numbers);

console.log("After sorting:", sortedNumbers);

// Output:
// After sorting: [2, 3, 4, 5, 6, 7, 8]


// ============================================================
// Example 2: Already Sorted Array
// ============================================================

const sortedArray = [1, 2, 3, 4, 5];

console.log("\nAlready sorted array:", sortedArray);

// Output:
// Already sorted array: [1, 2, 3, 4, 5]

insertionSort(sortedArray);

console.log("Result:", sortedArray);

// Output:
// Result: [1, 2, 3, 4, 5]


// ============================================================
// Example 3: Reverse Sorted Array
// ============================================================

const reverseArray = [5, 4, 3, 2, 1];

console.log("\nReverse sorted array:", reverseArray);

// Output:
// Reverse sorted array: [5, 4, 3, 2, 1]

insertionSort(reverseArray);

console.log("Result:", reverseArray);

// Output:
// Result: [1, 2, 3, 4, 5]


// ============================================================
// Example 4: Array with Duplicate Values
// ============================================================

const duplicateArray = [4, 2, 4, 1, 3, 2];

console.log("\nArray with duplicates:", duplicateArray);

// Output:
// Array with duplicates: [4, 2, 4, 1, 3, 2]

insertionSort(duplicateArray);

console.log("Result:", duplicateArray);

// Output:
// Result: [1, 2, 2, 3, 4, 4]


// ============================================================
// Example 5: Single Element
// ============================================================

const singleElement = [10];

console.log("\nSingle element:", singleElement);

// Output:
// Single element: [10]

insertionSort(singleElement);

console.log("Result:", singleElement);

// Output:
// Result: [10]


// ============================================================
// Example 6: Empty Array
// ============================================================

const emptyArray = [];

console.log("\nEmpty array:", emptyArray);

// Output:
// Empty array: []

insertionSort(emptyArray);

console.log("Result:", emptyArray);

// Output:
// Result: []