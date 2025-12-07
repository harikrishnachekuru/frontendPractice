// How to check if an array contains elements of another array.
// By using build-in methods we can check it as to check if the element available in that particular array or not
var arrayVal = [1, 2, 3, 4, 5, 6];
var anotherArray = [2, 4, 5];
// some is the method used to find any of the elments and includes methos is that it contains or matches.
var result = arrayVal.some(function (ele) { return anotherArray.includes(ele); });
console.log(result);
// Same for Strings we can check.
var names1 = ["hari", "krishna", "krish", "Raj"];
var names2 = ["Raj", "name", "oracle"];
var x;
for (var _i = 0, names1_1 = names1; _i < names1_1.length; _i++) {
    x = names1_1[_i];
    if (names2.includes(x)) {
        console.log(x);
        console.log(names2.includes(x));
    }
}
