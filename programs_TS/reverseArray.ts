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

// string reverse

function reverse(str){
  let rev = "";
  for(let i=str.length-1;i>=0;i--){
    rev += str[i];
  }
  return rev;
}
console.log(reverse("albthri"));

// Reversing each word from the satement
function reverseCharsInWordsBuiltIn(s){
  return s.split(' ').map(w => w.split('').reverse().join('')).join(' ');
}

console.log(reverseCharsInWordsBuiltIn("the sky is blue")); // "eht yks si eulb"

function reverseCharsInWords(s) {
  let res = [];
  let word = [];
  for (let i = 0; i <= s.length; i++) {
    if (i === s.length || s[i] === ' ') {
      // reverse word
      for (let j = word.length - 1; j >= 0; j--) res.push(word[j]);
      if (i !== s.length) res.push(' ');
      word = [];
    } else {
      word.push(s[i]);
    }
  }
  return res.join('');
}

console.log(reverseCharsInWords("the sky is blue")); // "eht yks si eulb"

//statement reverse

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(reverseWords("the sky is blue"));