let arr = [64, 34, 25, 12, 22, 11, 90] // n = 7
// Bubble sort is implemented
// sort the following array in ascending order

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) { // The outer loop runs n - 1 times because we don’t need to check the last element in the n-th pass; it is already in its correct position.     
    let isSwaped = false;
    for (let j = 0; j < arr.length - i - 1; j++) { // this loops runs n-i-1 times the external loop
      if (arr[j] > arr[j + 1]) { // if element at position j is greater than the element at position j + 1 swap both elements. For descending oreder jut replace > with <
        let temp = arr[j] // temp variable holds the actual value of arr[j]
        arr[j] = arr[j + 1];  // assigns the value of arr[j + 1] to arr
        arr[j + 1] = temp; // assings the actual value of arr[j] to arr[j + 1]
        isSwaped = true;
      }
    }
    if (!isSwaped) { // already sorted array
      break;
    }
  }
  return arr;
}

console.log(arr) // unsorted
bubbleSort(arr)
console.log(arr) // sorted

// the loop runs n * n the length of array.
// if 5 items in an array the loop will run 5 * 5 = 25 times.
// Time Complexity of bubble sort is O(n^2) wether it is optimized or not.
// the outer loop runs n - 1 times as the largest/smallest number is already in the end after swapping so no need to loop over it.