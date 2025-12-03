//find if the given string is palindrome or not 

//build-in Method
function palindrom(str) {
    let rev = str.toLowerCase().split("").reverse().join("");
    console.log(rev);
    return str.toLowerCase() === rev ? true : false;
}

console.log(palindrom("Madam"));

// Without Build-in and two pointer Method for haveing O(n) time complexity

function palindrome(str){
    let left = 0;
    let right = str.length-1;

    while(left < right) {
        if(str[left] !== str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(palindrome("madam"), palindrome("Hello"));

// Try another way

function PalindromeFunct(str){
    let result = '';
    for(let i = str.length-1; i>=0; i--){
        result += str[i];
    }
    return str === result ? true : false;
}
console.log(PalindromeFunct("level"));

