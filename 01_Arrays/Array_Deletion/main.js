let arr = [30, 20, 45, 76, 20, 80];
let index = 3;

// Backward traversal can be less efficient than forward traversal for large arrays, especially when the index to be deleted is near the beginning of the array. This is because accessing elements from the end of an array can involve more memory jumps, which can be slower.

// Backward traversal can introduce potential edge cases that need to be handled carefully. For example, if the element to be deleted is the first element in the array, backward traversal might require special handling to avoid out-of-bounds errors.

for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1] // the statement is copying the element at index i + 1 to the index i of the array arr.
}
arr.length = arr.length - 1; // here we make the length of the array constant. This effectively removes the last element from the array.
console.log(arr)


function deleteElement() {
    let arr = [30, 20, 45, 76, 20, 80];
    let index = parseInt(document.getElementById('index').value);
    //console.log(arr);
    //console.log(arr.length)
    if (index < arr.length && typeof index === 'number' && index >= 0) {
        for (let i = index; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1]
            //console.log(arr[i])
        }
        arr.length--;
        //console.log(arr);
        document.getElementById('solution').textContent = `arr = [${arr}]`
    } else {
        console.log('Out of bounds / This is not a number')
    }
}