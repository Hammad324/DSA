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