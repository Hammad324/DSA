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
        arr[i + 1] = arr[i];
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