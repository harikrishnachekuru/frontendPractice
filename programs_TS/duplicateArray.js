//Find the duplicate array from the given array 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// First try using build-in methods
//Time Complexity for this is o(n2)
function duplicate(arr) {
    return arr.filter(function (val, index) { return arr.indexOf(val) !== index; });
}
console.log(duplicate([1, 2, 1, 3, 4, 2]));
function dupli(arr) {
    return __spreadArray([], new Set(arr.filter(function (val, index) { return arr.indexOf(val) !== index; })), true);
}
console.log(dupli([1, 2, 1, 3, 4, 2]));
// using freq to have performance and time Complexity is O(n)
function dup(arr) {
    var freq = {};
    var duplicates = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var val = arr_1[_i];
        freq[val] = (freq[val] || 0) + 1;
    }
    for (var key in freq) {
        if (freq[key] > 1) {
            duplicates.push(Number(key));
        }
    }
    return duplicates;
}
console.log(dup([1, 23, 2, 1, 2, 23, 4, 5, 6]));
// Just using for loops:
function dupfind(arr) {
    var dup = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if ((arr[i] === arr[j]) && !dup.includes(arr[i])) {
                dup.push(arr[i]);
            }
        }
    }
    return dup;
}
console.log(dupfind([1, 2, 32, 3, 2, 1, 2, 32]));
//Another simple way 
function removeDup(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(removeDup([1, 2, 32, 3, 2, 1, 2, 32]));
