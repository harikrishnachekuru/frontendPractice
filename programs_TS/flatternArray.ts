// Create a program that clears flatternArray 
// create using both build-in and without build-in Methods.

function flatternArray(arr, result = []){
    for(let i =0; i< arr.length;i++){
        if(typeof arr[i] === "number"){
            result.push(arr[i]);
        } else {
            flatternArray(arr[i],result)
        }
    }
    return result;
}

console.log(flatternArray([1,[2,3,[4,5,6]]]));

// Using build-in Method

function flattern(arr){
    return arr.flat(Infinity);
}
console.log(flattern([1,[2,3,[4,5,6]]]));

// Using Reduce Method

function flatArr(arr) {
    return arr.reduce((acc, value) => {
        return acc.concat(Array.isArray(value) ? flatArr(value) : value)
    },[])
}
console.log(flatArr([1,[2,3,[4,5,6]]]));


//Using Arr.Prototype Method by using bind method / just reduce it will clear only one step 

function flatternArr(arr){
    return Array.prototype.concat.apply([], arr)
}
console.log(flatternArr([1,[2,3,[4,5,6]]]));
