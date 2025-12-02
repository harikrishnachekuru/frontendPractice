//Find the duplicate array from the given array 

// First try using build-in methods
//Time Complexity for this is o(n2)
function duplicate(arr){
    return arr.filter((val, index) => arr.indexOf(val) !== index)
}
console.log(duplicate([1,2,1,3,4,2]));

function dupli(arr){
    return [...new Set(arr.filter((val, index) => arr.indexOf(val) !== index))]
}
console.log(dupli([1,2,1,3,4,2]));

// using freq to have performance and time Complexity is O(n)

function dup(arr) {
    const freq = {};
    const duplicates = [];

    for (let val of arr) {
        freq[val] = (freq[val] || 0) + 1;
    }
    for (let key in freq) {
        if (freq[key] > 1) {
            duplicates.push(Number(key));
        }
    }

    return duplicates;
}
console.log(dup([1,23,2,1,2,23,4,5,6]));

// Just using for loops:

function dupfind(arr) {
    let dup = [];

    for(let i = 0; i < arr.length;i++){
        for(let j = i+1;j<arr.length;j++) {

            if((arr[i] === arr[j]) && !dup.includes(arr[i])){
                dup.push(arr[i]);
            }
        }
    }
    return dup
}
console.log(dupfind([1,2,32,3,2,1,2,32]));