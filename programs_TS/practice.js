//Given Combination of numbers and float in an array but want to separate the numbers and float values in that array 
function separateAndSort(arr) {
    var integers = [];
    var floats = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (Number.isInteger(num)) {
            integers.push(num);
        }
        else {
            floats.push(num);
        }
    }
    integers.sort(function (a, b) { return b - a; });
    floats.sort(function (a, b) { return b - a; });
    return { integers: integers, floats: floats };
}
var data = [1, 2.3, 5, 6.7, 9, 111, 11.2];
console.log(separateAndSort(data));
//Using build-in methods 
function sepSort(arr) {
    return {
        intg: arr.filter(Number.isInteger).sort(function (a, b) { return b - a; }),
        flt: arr.filter(function (n) { return !Number.isInteger(n); }).sort(function (a, b) { return b - a; })
    };
}
var data1 = [1, 2.3, 5, 6.7, 9, 111, 11.2];
console.log(sepSort(data1));
