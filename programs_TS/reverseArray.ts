//Reverse an Array 

// using build-in Methods

function Reverse(arr) {
    return arr.slice('').reverse();
}
console.log(Reverse([1,2,1,2,3,4]));

// build-in for strings

function ReverseFun(str){
    return str.split('').reverse().join()
}
console.log(ReverseFun("krish"));

//Without build-in and timecomplexity of O(n)

function reverseFunct(arr) {
    let left = 0;
    let right = arr.length-1;

    while(left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++;
        right--;
    }
    return arr;
}
console.log(reverseFunct([1,2,3,4,5,6]));