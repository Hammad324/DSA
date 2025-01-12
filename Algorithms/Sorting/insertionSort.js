let arr = [64, 25, 12, 22, 11];

function insertionSort(arr) { // Time complexity is O(n^2)
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        let prev = i - 1;

        while(prev >= 0 && arr[prev] > curr) {
            arr[prev + 1] = arr[prev]
            prev--;
        }

        arr[prev + 1] = curr;
    }
}

console.log(arr);
insertionSort(arr);
console.log(arr);