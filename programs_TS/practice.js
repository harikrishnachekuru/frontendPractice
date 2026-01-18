var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
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
//Group by property
var users = [{
        role: 'admin'
    },
    {
        role: 'user'
    },
    {
        role: 'admin'
    }
];
var userData = users.reduce(function (acc, cur) {
    acc[cur.role] = acc[cur.role] || [];
    acc[cur.role].push(cur);
    return acc;
}, {});
console.log(userData);
//Sort numbers
var sorted = [10, 2, 16, 12, 5, 8].sort(function (a, b) { return a - b; });
console.log(sorted);
//Count characters
// let str = "hello"
// const count = [...str].reduce((a,c)=>{
//  a[c]=(a[c]||0)+1; return a;
// },{})
// console.log(count);
//Remove duplicates (objects)
var arr = [{ id: 1 }, { id: 2 }, { id: 1 }];
var dupObj = __spreadArray([], new Map(arr.map(function (o) { return [o.id, o]; })).values(), true);
console.log(dupObj);
//Convert array to object
console.log(["a", "b", "c"].reduce(function (a, c, i) { return (a[i] = c, a); }, {}));
//Count vowels
console.log(((_a = 'krish'.match(/[aeiou]/gi)) === null || _a === void 0 ? void 0 : _a.length) || 0);
//Get unique values only
console.log([1, 2, 2, 3, 4, 4, 5].filter(function (x) { return [1, 2, 2, 3, 4, 4, 5].indexOf(x) === [1, 2, 2, 3, 4, 4, 5].lastIndexOf(x); }));
//Flatten one level (without flat)
//[].concat(...arr)
//Random number 1–10
console.log(Math.floor(Math.random() * 10));
