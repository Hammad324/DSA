// Merge two arrays using for loops 

function meregeTwoArrays() {
    let arr1 = [3, 7, 12, 34, 56, 90];
    let arr2 = [20, 30, 40, 50 ,100, 1000];

    let arr = [];

    for (let i = 0; i < arr1.length; i++) {
        arr[i] = arr1[i]
    }

    for (let i = 0; i < arr2.length; i++) {
        arr[arr1.length + i] = arr2[i]
    }

    return arr;
}

console.log(meregeTwoArrays())

//default way of doing it is by using spread operator 

// let merge = [...arr1, ...arr2];
// console.log(merge)


// Merge two arrays using while loop


