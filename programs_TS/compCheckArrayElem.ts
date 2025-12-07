// How to check if an array contains elements of another array.
// By using build-in methods we can check it as to check if the element available in that particular array or not

const arrayVal = [1, 2, 3, 4, 5, 6];
const anotherArray = [2, 4, 5];

// some is the method used to find any of the elments and includes methos is that it contains or matches.
const result = arrayVal.some(ele => anotherArray.includes(ele));

console.log(result);


// Same for Strings we can check.

const names1 = ["hari", "krishna", "krish", "Raj"];
const names2 = ["Raj", "name", "oracle"];

let x;
for (x of names1) {
    if (names2.includes(x)) {

        console.log(x);
        console.log(names2.includes(x));
    }

}