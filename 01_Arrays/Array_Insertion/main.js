let arr = [60, 30, 10, 67, 40];
const newElement = 70;
const position = 2;

// for (let i = arr.length - 1; i >= 0; i--) {
//     if (i >= position) {
//         arr[i + 1] = arr[i]; // Shifts thecurrent element one position to the right
//         if (position === i) {
//             arr[i] = newElement; // Insert the new element at the specified position
//         }
//     }
// }

// better code 
for(let i = arr.length - 1; i >= position; i--) {
    arr[i + 1] = arr[i];
}
arr[position] = newElement;

console.log(`vanilla js: [${arr}]`)

/* 
NOTES:
1. Backward traversal is essential in array insertion because it maintains the array's data integrity by safely shifting elements and creating space for the new element, without risking overwriting any existing data.
*/

function insertElement() {

    let arr = [60, 30, 10, 67, 40];
    const newElement = parseInt(document.getElementById('newElement').value);
    const position = parseInt(document.getElementById('index').value);

    // since every output we get from an input box is a string we have to convert it into an integer it will not recognize the index as it is an integer and neither will put in the number. 
    // error-eg: [60, 30, 10, 10, 67, 47] incase of index 2 and element 70

    for (let i = arr.length - 1; i >= position; i--) {
        arr[i + 1] = arr[i]; // put the value of the very next index in the current index
    }
    arr[position] = newElement;
    console.log(arr)
}

// The same thing can be done using splice function 
// arr.splice(2, 0, 70)
// console.log(arr)

/* if (index < arr.length) {
    for (let i = arr.length - 1; i >= index; i--) {
        arr[i + 1] = arr[i];
    }
    arr[index] = newElement;
    console.log(arr)
} else {
    console.log('Out of bounds.')
} */

// Array element insertion in a 2d array

const arr2d = [[2, 4, 6], [8, 10 ,12]];
const internal_arr = 0; // arr2d[0]
const internal_arr_index = 1; // arr2d[0][1]
const value = 200; // insert 200 at arr2d[0][1]

// for (let i = arr2d.length - 1; i >= internal_arr; i--) {
//     for (let j = arr2d[i].length - 1; j >=internal_arr_index; j--) {
//         arr2d[i][j + 1] = arr2d[i][j]; // put the value of the very next index of the internal array in the current index
//     }
// }
// arr2d[internal_arr][internal_arr_index] = value;
// console.log(arr2d); // [ [ 2, 200, 4, 6 ], [ 8, 10, 10, 12 ] ]


// there is a better approach to do it as well 

// 1. This will save us from running an outer loop. We eliminated the outer loop entirely, focusing only on the specific row (internal_arr). This avoids unnecessary iterations across other rows, which makes your code more efficient.
// 2. You're shifting elements within the row starting from the last index and moving towards the target insertion index (internal_arr_index). This ensures that each element in the row is moved exactly once, keeping the time complexity proportional to the length of the row (O(n)), where n is the number of columns in that row.

for (let i = arr2d[internal_arr].length - 1; i >= internal_arr_index; i--) { 
    arr2d[internal_arr][i + 1] = arr2d[internal_arr][i] 
}
arr2d[internal_arr][internal_arr_index] = value;
console.log(arr2d) // [ [ 2, 200, 4, 6 ], [ 8, 10, 12 ] ]

// create a generalized function to traverse and insert an element in a 2d array

function insertElementin2dArray (arr, internal_arr, internal_arr_index, value) {

    // for (let i = arr.length - 1; i >= internal_arr; i--) {
    //     for (let j = arr[i].length - 1; j >= internal_arr_index; j--) {
    //         arr[i][j + 1] = arr[i][j]
    //     }
    // }
    // arr[internal_arr][internal_arr_index] = value;
    // return arr;

    // similarly we will use the efficient approach here as well
    for (let i = arr[internal_arr].length - 1; i >= internal_arr_index; i--) { // this will save us from running an outer loop
        arr[internal_arr][i + 1] = arr[internal_arr][i]
    }
    arr[internal_arr][internal_arr_index] = value;
    return arr;
}

console.log(insertElementin2dArray([[1, 2, 3], [4, 5 ,6]], 1, 2, 2300)) // [ [ 1, 2, 3 ], [ 4, 5, 2300, 6 ] ]

