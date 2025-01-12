let arr = [64, 25, 12, 22, 11] 

// ascending order
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) { // b/c the last value will be smalles or largest depending on how you sort therefore no need to loop thill the end of the array.
        // assume that the starting value of the unsorted part is always the samllest value.
        let smallestIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallestIndex]) { // if element at index j is smaller than the value at index smallestIndex then spaw them.
                smallestIndex = j;
            }
        }
        // swaping the element at smallestIndex with the element at index i.
        // creates a temporary array containing these values
        [arr[i], arr[smallestIndex]] = [arr[smallestIndex], arr[i]]; // this part assigns them back arr[i] and arr[smallestIndex] effectively swaping them.
        // can also be written as
        // let temp = arr[i];
        // arr[i] = arr[smallestIndex]
        // arr[smallestIndex] = temp;
    }
    return arr;
}

console.log("Unsorted array: ", arr);
selectionSort(arr);
console.log("Sorted array: ", arr);

// Time complexity of selection sort is O(n^2) b/c of the double loops.
// Space Complexity is O(1)