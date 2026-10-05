# 🔢 Insertion Sort — JavaScript Algorithm

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Algorithm-Insertion%20Sort-6C63FF?style=for-the-badge" alt="Insertion Sort">
  <img src="https://img.shields.io/badge/Complexity-O(n²)-FF6B6B?style=for-the-badge" alt="Time Complexity">
  <img src="https://img.shields.io/badge/License-MIT-2EA44F?style=for-the-badge" alt="MIT License">
</p>

<p align="center">
  <strong>A clean and efficient implementation of the Insertion Sort algorithm using JavaScript.</strong>
</p>

---

## 📋 Table of Contents

* [📖 Overview](#-overview)
* [🎯 Objectives](#-objectives)
* [🧠 Algorithm Concept](#-algorithm-concept)
* [⚙️ How It Works](#️-how-it-works)
* [💻 Implementation](#-implementation)
* [📊 Example](#-example)
* [⏱️ Complexity Analysis](#️-complexity-analysis)
* [📁 Project Structure](#-project-structure)
* [🚀 Getting Started](#-getting-started)
* [🧪 Testing](#-testing)
* [✨ Key Features](#-key-features)
* [📚 Learning Outcomes](#-learning-outcomes)
* [🔮 Possible Improvements](#-possible-improvements)
* [👨‍💻 Author](#-author)
* [📄 License](#-license)

---

## 📖 Overview

This project implements the **Insertion Sort algorithm** using modern JavaScript.

Insertion Sort is a simple comparison-based sorting algorithm that builds the final sorted array one element at a time. It works similarly to the way people organize playing cards in their hands: each new element is inserted into its appropriate position within the already sorted portion.

The implementation focuses on understanding:

* Array manipulation
* Iteration and loops
* Element comparison
* Element shifting
* In-place sorting
* Algorithmic complexity

---

## 🎯 Objectives

The main objectives of this checkpoint are to:

1. Implement **Insertion Sort** using JavaScript.
2. Work progressively with the first `i - 1` elements of the array.
3. Select `arr[i]` as the current element.
4. Insert `arr[i]` into the correct position within the sorted sequence.
5. Use loops and conditional logic to shift elements.
6. Produce a correctly sorted array in ascending order.
7. Understand the algorithm's time and space complexity.

---

## 🧠 Algorithm Concept

Insertion Sort divides the array conceptually into two sections:

```text
Sorted Section | Unsorted Section
---------------|----------------
      ↑        |       ↑
   0 → i-1     |      i → n-1
```

At every iteration:

```text
1. Select arr[i]
2. Store it as key
3. Compare key with previous elements
4. Shift larger elements to the right
5. Insert key into its correct position
```

The sorted section grows by one element after every iteration.

---

## ⚙️ How It Works

Consider the following array:

```text
[7, 3, 8, 2, 6, 4, 5]
```

### Step 1 — Initial State

The first element is considered sorted:

```text
[7] | 3 8 2 6 4 5
```

### Step 2 — Insert 3

`3` is smaller than `7`, so `7` is shifted to the right.

```text
[3, 7] | 8 2 6 4 5
```

### Step 3 — Insert 8

`8` is already greater than `7`.

```text
[3, 7, 8] | 2 6 4 5
```

### Step 4 — Insert 2

`2` is smaller than all elements in the sorted section.

```text
[2, 3, 7, 8] | 6 4 5
```

### Step 5 — Insert 6

```text
[2, 3, 6, 7, 8] | 4 5
```

### Step 6 — Insert 4

```text
[2, 3, 4, 6, 7, 8] | 5
```

### Step 7 — Insert 5

```text
[2, 3, 4, 5, 6, 7, 8]
```

The entire array is now sorted.

---

## 💻 Implementation

### `insertionSort.js`

```javascript
/**
 * Insertion Sort Algorithm
 *
 * Sorts an array in ascending order using
 * the Insertion Sort algorithm.
 *
 * Time Complexity:
 * Best Case:    O(n)
 * Average Case: O(n²)
 * Worst Case:   O(n²)
 *
 * Space Complexity:
 * O(1)
 *
 * @param {number[]} arr - Array to sort
 * @returns {number[]} - Sorted array
 */

function insertionSort(arr) {

    // Start from the second element.
    // The first element is considered already sorted.
    for (let i = 1; i < arr.length; i++) {

        // Store the current element.
        const key = arr[i];

        // Start comparing with the previous element.
        let j = i - 1;

        // Shift elements greater than key
        // one position to the right.
        while (j >= 0 && arr[j] > key) {

            arr[j + 1] = arr[j];

            // Move backward through the sorted section.
            j--;
        }

        // Insert key into its correct position.
        arr[j + 1] = key;
    }

    // Return the sorted array.
    return arr;
}


// Example array
const numbers = [7, 3, 8, 2, 6, 4, 5];

console.log("Before sorting:", numbers);

// Execute Insertion Sort
const sortedNumbers = insertionSort(numbers);

console.log("After sorting:", sortedNumbers);
```

---

## 📊 Example

### Input

```javascript
const numbers = [7, 3, 8, 2, 6, 4, 5];
```

### Output

```text
Before sorting: [7, 3, 8, 2, 6, 4, 5]

After sorting: [2, 3, 4, 5, 6, 7, 8]
```

---

## ⏱️ Complexity Analysis

| Scenario         | Time Complexity | Explanation                         |
| ---------------- | --------------: | ----------------------------------- |
| Best Case        |        **O(n)** | Array is already sorted             |
| Average Case     |       **O(n²)** | Elements generally require shifting |
| Worst Case       |       **O(n²)** | Array is sorted in reverse order    |
| Space Complexity |        **O(1)** | Sorting is performed in-place       |

### Why O(1) Space?

The algorithm does not create another array proportional to the input size.

It only uses a few variables:

```javascript
const key = arr[i];
let j = i - 1;
```

Therefore, the additional memory requirement is **constant: O(1)**.

---

## 📁 Project Structure

A simple and professional structure can be used:

```text
insertion-sort/
│
├── insertionSort.js
├── README.md
└── .gitignore
```

### File Description

| File               | Description                             |
| ------------------ | --------------------------------------- |
| `insertionSort.js` | Main JavaScript implementation          |
| `README.md`        | Project documentation                   |
| `.gitignore`       | Files and directories excluded from Git |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the Project

```bash
cd insertion-sort
```

### 3. Run the Algorithm

If Node.js is installed:

```bash
node insertionSort.js
```

Expected result:

```text
Before sorting: [7, 3, 8, 2, 6, 4, 5]
After sorting: [2, 3, 4, 5, 6, 7, 8]
```

---

## 🧪 Testing

You can test the algorithm with different input arrays.

### Already Sorted

```javascript
insertionSort([1, 2, 3, 4, 5]);
```

Expected:

```text
[1, 2, 3, 4, 5]
```

### Reverse Order

```javascript
insertionSort([5, 4, 3, 2, 1]);
```

Expected:

```text
[1, 2, 3, 4, 5]
```

### Duplicate Values

```javascript
insertionSort([4, 2, 4, 1, 3, 2]);
```

Expected:

```text
[1, 2, 2, 3, 4, 4]
```

### Single Element

```javascript
insertionSort([10]);
```

Expected:

```text
[10]
```

### Empty Array

```javascript
insertionSort([]);
```

Expected:

```text
[]
```

---

## ✨ Key Features

* ✅ Pure JavaScript implementation
* ✅ No built-in `Array.sort()` used
* ✅ In-place sorting
* ✅ Ascending-order sorting
* ✅ Constant auxiliary space
* ✅ Detailed code comments
* ✅ Handles duplicate values
* ✅ Handles empty and single-element arrays
* ✅ Easy to understand and maintain
* ✅ Suitable for algorithmic learning and technical evaluation

---

## 📚 Learning Outcomes

Through this project, the following programming and algorithmic concepts are demonstrated:

### JavaScript

* Variables
* Arrays
* `for` loops
* `while` loops
* Conditional statements
* Functions
* Parameters and return values
* Array indexing

### Algorithms

* Comparison-based sorting
* Iterative algorithms
* In-place algorithms
* Sorted and unsorted partitions
* Element shifting
* Time complexity
* Space complexity

### Problem Solving

The project demonstrates how a complex operation such as sorting can be broken into a sequence of simple and deterministic operations.

---

## 🔮 Possible Improvements

The project can be extended with additional functionality such as:

* Descending-order sorting
* Sorting strings alphabetically
* Sorting objects using custom comparison functions
* Interactive browser visualization
* Performance benchmarking
* Unit tests with Jest
* TypeScript implementation
* Step-by-step console visualization
* Comparison with Bubble Sort and Selection Sort

For example, a comparison function could eventually make the algorithm more reusable:

```javascript
insertionSort(array, compareFunction);
```

This would allow the same implementation to support different data types and sorting strategies.

---

## 🏆 Technical Summary

This implementation demonstrates the fundamental principles behind **Insertion Sort**:

```text
                ┌─────────────────────┐
                │   Input Array       │
                └──────────┬──────────┘
                           ↓
                ┌─────────────────────┐
                │ Select arr[i]       │
                │       → key         │
                └──────────┬──────────┘
                           ↓
                ┌─────────────────────┐
                │ Compare with        │
                │ sorted elements     │
                └──────────┬──────────┘
                           ↓
                ┌─────────────────────┐
                │ Shift larger        │
                │ elements right      │
                └──────────┬──────────┘
                           ↓
                ┌─────────────────────┐
                │ Insert key          │
                │ at correct position │
                └──────────┬──────────┘
                           ↓
                ┌─────────────────────┐
                │ Sorted Array        │
                └─────────────────────┘
```

The implementation respects the fundamental requirement of working with the first **`i - 1` elements as the sorted sequence** and inserting **`arr[i]`** into its appropriate position.

---

## 👨‍💻 Author

**Yassine Kalthoum**

**Software & Network Engineering**

Focused on:

* Software Engineering
* Web Development
* Network Engineering
* Cybersecurity
* Algorithms & Data Structures

---

## 📄 License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute this project for educational and development purposes.

---

<p align="center">
  <strong>Built with JavaScript • Algorithm Design • Problem Solving</strong>
</p>

<p align="center">
  ⭐ If you found this project useful, consider giving the repository a star.
</p>
