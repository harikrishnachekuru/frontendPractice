//Recursion — factorial
function fact(n) {
    if (n <= 1)
        return 1;
    return n * fact(n - 1);
}
console.log(fact(5));
//Using Loop only not recursion
function factorial(n) {
    var fact = 1;
    for (var i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}
console.log(factorial(5)); // 120
