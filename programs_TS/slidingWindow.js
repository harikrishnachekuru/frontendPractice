// PROBLEM 1: Maximum Sum of Subarray (Size = K)
// Example:
// arr = [2, 1, 5, 1, 3, 2]
// k = 3
// Subarrays:
// [2,1,5] → 8
// [1,5,1] → 7
// [5,1,3] → 9 ✅
// [1,3,2] → 6
// Answer = 9
//Brute Force (O(n²))
function maxSumBrute(arr, k) {
    var max = 0;
    for (var i = 0; i <= arr.length - k; i++) {
        var sum = 0;
        for (var j = i; j < i + k; j++) {
            sum += arr[j];
        }
        max = Math.max(max, sum);
    }
    return max;
}
console.log(maxSumBrute([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
//OPTIMIZED SLIDING WINDOW (O(n))
function maxSumSliding(arr, k) {
    var maxSum = 0;
    var windowSum = 0;
    for (var i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    for (var i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}
console.log(maxSumSliding([2, 1, 5, 1, 3, 2], 3)); // 9
