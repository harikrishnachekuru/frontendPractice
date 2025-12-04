//How to check if two strings are anagrams?
// Basically Anagram means if we have two strings like listen , silent so, in these two strings we have the same characters which are just rearranged.

function Anagram(str1, str2) {
    return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(Anagram("silent","listen"));