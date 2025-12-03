//Reverse an Array 
// using build-in Methods
function Reverse(arr) {
    return arr.slice('').reverse();
}
console.log(Reverse([1, 2, 1, 2, 3, 4]));
// build-in for strings
function ReverseFun(str) {
    return str.split('').reverse().join();
}
console.log(ReverseFun("krish"));
//Without build-in and timecomplexity of O(n)
function reverseFunct(arr) {
    var _a;
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        _a = [arr[right], arr[left]], arr[left] = _a[0], arr[right] = _a[1];
        left++;
        right--;
    }
    return arr;
}
console.log(reverseFunct([1, 2, 3, 4, 5, 6]));
