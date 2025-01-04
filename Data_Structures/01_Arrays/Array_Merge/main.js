// Merge two arrays using for loops 

function meregeTwoArrays() {
    let arr1 = [3, 7, 12, 34, 56, 90];
    let arr2 = [20, 30, 40, 50 ,100, 1000];

    let arr = [];

    for (let i = 0; i < arr1.length; i++) { // traversing through arr1 
        arr[i] = arr1[i] // adds items for arr1 into arr
    }

    for (let i = 0; i < arr2.length; i++) { // traversing through arr2
        arr[arr1.length + i] = arr2[i] // adds items of arr2 after the items of arr1 into arr
    }

    return arr;
}

//console.log(meregeTwoArrays())

//default way of doing it is by using spread operator 
// let merge = [...arr1, ...arr2];
// console.log(merge)


// Merge two arrays using while loop

// arrays to be merged
let data1 = [3, 7, 12, 34, 56, 90];
let data2 = [4, 9, 25, 45];

let data3 = []; // we created a new merged array 
let d1 = 0; // indices of respective arrays
let d2 = 0;
let d3 = 0;

while (d1 < data1.length && d2 < data2.length) { // The while loop continues as long as there are elements in both data1 and data2.
    if (data1[d1] < data2[d2]) {
        data3[d3] = data1[d1] // If the current element in data1 is smaller than the current element in data2, the smaller element from data1 is added to data3, and d1 is incremented.
        d1++;
    } else {
        data3[d3] = data2[d2]; // Otherwise, the smaller element from data2 is added to data3, and d2 is incremented.
        d2++;
    }
    d3++
}

/* After the main while loop, there might be remaining elements in either data1 or data2.
The second while loop checks if there are remaining elements in data1. If so, they are copied to arr3 until arr1 is exhausted.
Both d1 and d3 are incremented in this loop. */

while (d1 < data1.length) {
    data3[d3] = data1[d1];
    d3++;
    d1++;
}

console.log(data3); // [3, 4, 7, 9, 12, 25, 34, 45, 56, 90]

// The final value of data3 will be the merged sorted array containing all elements from data1 and data2 in ascending order.

// generalized function for merging two arrays 

function mergeArrays (arr1, arr2) {
    let arr3 = [];
    let i = 0;
    let j = 0;
    let k = 0;
    //  the while loop works when both arrays have data in them.
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            arr3[k] = arr1[i];
            i++;
        } else {
            arr3[k] = arr2[j];
            j++
        }
        k++;
    }
    // for pushing remaining elements in arr1 
    while (i < arr1.length) {
        arr3[k] = arr1[i];
        i++;
        k++
    }
    // for pushing remaining elements in arr2
    while (j < arr2.length) {
        arr3[k] = arr2[j];
        j++;
        k++
    }
    return arr3;
}

console.log(mergeArrays([4, 9, 25, 45], [3, 7, 12, 34, 56, 90]));
// this time arr1 is smaller than arr2