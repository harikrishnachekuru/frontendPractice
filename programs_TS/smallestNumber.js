//Write a function in JS to find the smallest number in an array.
//using build-in Method 
function smallest(arr) {
    return arr.sort(function (a, b) { return a - b; })[0];
}
console.log(smallest([1, 12, 3, 5, 7]));
// without using build-in
function smallestNum(arr) {
    var result = arr[0];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < result) {
                result = arr[j];
            }
        }
    }
    return result;
}
console.log(smallestNum([2, 4, 1, 5, 6, 1]));
function smallestNu(arr) {
    var result = arr[0];
    console.log(result);
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < result) {
            result = arr[i];
        }
    }
    return result;
}
console.log(smallestNu([2, 4, 1, 5, 6, 1]));
//Largest Number from the given array
function max(arr) {
    var m = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > m)
            m = arr[i];
    }
    return m;
}
console.log(max([2, 4, 1, 5, 6, 1]));
// Ascending Order / Descending Order
function bubbleSort(arr) {
    var _a;
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
            }
        }
    }
    return arr;
}
var numbers = [10, 2, 30, 4];
console.log(bubbleSort(numbers));
