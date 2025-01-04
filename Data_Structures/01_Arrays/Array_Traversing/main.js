let arr = [2, 37, 6, 34, 7, 23, 0, 32, 5, 1, 62, 4, 89]; // Literal Method
let arr2 = new Array("Apple", "Banana", "Mango", 1, 2, 4, 5); // Constructor Method

// we can traverse through an array using a for loop.

// using literal method.
console.log("arr");

// Forward Treversal 
console.log("-------------------------");
console.log("arr: Forward Treversal");
console.log("-------------------------");
for (let i = 0; i < arr.length; i++) {
    console.log(`${i} : ${arr[i]}`);
    //Document.write(`${i} : ${arr[i]}`)
}

//console.log(`Length of arr: ${arr.length}`);
// give the total number of elements in an array.

// Backward Treversal 
console.log("-------------------------");
console.log("arr: Backward Treversal");
console.log("-------------------------");
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(`${i} : ${arr[i]}`);
}

// implement a function for obtaining values out of the given index and validations as well 
function getElement() {
    let value = document.getElementById("element").value;
        // case 1: the value is not greater than the elements of the array                  
        // case 2: check if it is a number or string datatype after conversion              
        // case 3 : all positive values to counter -ve value.
        // case 4: also check for -0.
    if (value < arr.length && typeof parseInt(value) === "number" && parseInt(value) >= 0 && value != -0) { 
        // the value we recieve from an input box is natively a string.
        alert(arr[value])
    } else {
        alert("Enter valid value (0-12).")
    }
}

// If i declare i as index variable in another for loop as well it will not be a problem as it is defined in a local scope in for-loop.

// using constructor method.
// console.log("arr2");

// for (let i = 0; i < arr2.length; i++) {
//     console.log(`${i} : ${arr2[i]}`);
// }

// console.log(`Length of arr2: ${arr2.length}`);

// Notes: 

// There are two methods of implementing arrays in JS.
// 1. Constructor Method and 2. Literal Method.
// Arrays in JS support multiple data types in same arrays.

// For accessing values in an array we have to access the corresponding index values.

// arr[0], arr[1], arr[10]

// 2d Arrays 

// Forward Traversal

let arr2d = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log('-------- 2d array forward traversal ---------')
for (let i = 0; i < arr2d.length; i++) { // loops through the outer array, can be called as the row
    for (let j = 0; j < arr2d[i].length; j++) { // he expression arr2d[i].length - 1 refers to the last index of the current row (or sub-array)
        console.log(arr2d[i][j])
    }
}

// Backward Traversal

console.log('-------- 2d array backward traversal ---------')
for (let i = arr2d.length - 1; i >= 0; i--) { // loops through the outer array in reverse order, we have used -1 since there is no relational operator so that it will not consider it infact it will give out of bounds error to cater this we use -1 which specifies that we need to start it fron the first index elese it will use the length of array
    for (let j = arr2d[i].length - 1; j >= 0; j--) { // the loop starts backwards and iterates through every element in the internal array
        console.log(arr2d[i][j])
    }
}

// create a genralized function for forward and backward traversal for a 2d array

function traverse2dArray(arr) {
    // forward 
    for (let i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
    // backward
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = arr[i].length - 1; j >= 0; j--) {
            console.log(arr[i][j]);
        }
    }
}

traverse2dArray([[2, 4, 6], [8, 10 ,12]]);