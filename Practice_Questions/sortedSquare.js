// https://leetcode.com/problems/squares-of-a-sorted-array/description/

// Brute Force 
const nums = [-10, -3, 5, 9 , 11, 12];

function sortedSquares(nums) { // Time Complexity = O(nlogn)
    let arr = new Array(nums.length).fill(0); 
    for (let i = 0; i < nums.length; i++) { // squaring each element of the array
        arr[i] = nums[i] ** 2;
    }
    arr.sort((a, b) => a - b); // sorting them in ascending order
    console.log(arr);
}

sortedSquares(nums);

// Optimized Approach using Two-pointer Technique

/*
Optimized Approach:

We will use a two-pointer technique to solve the problem effectively. We initialize two pointers: `left` and `right`, which correspond to the beginning and end of the array, respectively. Our goal is to traverse the array in reverse order and fill a new array from largest to smallest elements.

To do this, we compare the absolute values of the elements at the current `left` and `right` indices. If the absolute value at the `left` index is greater, we assign the value at that index to the current position in `newArr`, then increment the `left` pointer by one. Conversely, if the absolute value at the `right` index is greater, we assign that value to the current position in `newArr` and decrement the `right` pointer by one. This process continues until we have filled the new array. 
*/

function optimizedSortedSquares(nums) {
    let arr = []; // or new Array(nums.length).fill(0)
    let left = 0; // left pointer
    let right = nums.length - 1; // right pointer 
    for (let i = nums.length - 1; i >= 0; i--) { // reverse traversing as we have to fil it from largest to smallest
        if (Math.abs(nums[left]) > Math.abs(nums[right])) { // comparing the abs values of both elements 
            arr[i] = nums[left] ** 2; // if left val is greater push that in the current index of arr
            left++; // increment left by 1
        } else {
            arr[i] = nums[right] ** 2; //if right val is greater push that in the current index of arr
            right--; // decrement right by 1
        }
    }
    console.log(arr);
}

optimizedSortedSquares(nums);