// Searching an element through an array.
// we have used linear search alogrithm for this task, it iterates through the array one element at a time, comparing each element with the given target element.


// let arr = [20, 40, 60, 5, 10, 70, 80, 99];

function findElement () {
    let arr = [20, 40, 60, 5, 10, 70, 80, 99];
    const item = parseInt(document.getElementById('item').value)
    for (let i = 0; i < arr.length; i++) { // iterates throug the array.
        if (arr[i] === item) { // if the element matches the target array it return the element with its index.
            //console.log(`index ${i} : ${arr[i]}`) 
            document.getElementById('solution').textContent = `index ${i} : ${arr[i]}`
        }
    }
    // return -1; // else it returns -1 or whatever you like.
}

//console.log(findElement(arr, 20));

// How do we counter if there are 2 same elements at different indexes.

let list = [1, 2, 3, 4, 5, 3];
const targetElement = 3;
const items = []

// for (let i = 0; i < list.length; i++) {
//     if (searchValue === list[i]) { // if the element matches the target array it pushes the element with its index in an array. This way we can see if there are more than one same elements on different indexes.
//         //console.log(i, arr[i]); break
//         items.push(`index ${i} : ${list[i]}` )
//     }
// }
// console.log(items)

for (let i = 0; i < list.length; i++) {
    if (list[i] === targetElement) {
        items.push(targetElement);
    }
}

console.log(items)

