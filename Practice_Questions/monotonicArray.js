// Brute Force 

let nums = [1,2,2,3];

function monotonicArray (nums) {
    let left = nums[0]; // pointer for left 
    let right = nums[nums.length - 1]; // pointer for last element
    if (left === right) { // if equal
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] !== nums[i + 1]) return false; // if second and next element is not equal than return false.
        }
    }  else if (left > right) { // if first greater than last
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] < nums[i + 1]) return false; // if element at index i is less than next element
        }
    } else {
        for (let i = 0; i < nums.length - 1; i++) { // if first less than last
            if (nums[i] > nums[i + 1]) return false; // if element at index i is greater than next element
        }
    }
    return true; // return true if all above conditions are false.
}

//monotonicArray(nums)

function monotonicArrayTwo(nums) {
    let increasing = true; // flag one if it is increasing
    let decreasing = true; // flag two if it is decreasing

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) { // in value at index i + 1 is greater than the element at index i it is increasing monotone thus decreasing = false.
            decreasing = false;
        } else if (nums[i] > nums[i + 1]) { // in value at index i + 1 is less than the element at index i it is decreasing monotone thus increasing = false.
            increasing = false;
        }
    }
    return increasing || decreasing; // return the boolean that is true.
}

monotonicArrayTwo(nums);