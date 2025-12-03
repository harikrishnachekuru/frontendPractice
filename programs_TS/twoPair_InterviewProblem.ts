//Pair Sum (Very Famous Interview Question)
//Given a sorted array, check if any 2 numbers sum to a target.

function pairSum(arr,target) {
    let left = 0;
    let right = arr.length-1;

    while(left < right){
        let sum = arr[left] + arr[right];

        if(sum === target) {
            return true;
        } else if(sum < target) {
            left ++
        } else {
            right--
        }
    }
    return false;

}
console.log(pairSum([1,2,3,4,5,6], 6), pairSum([1,2,3,4,5,6], 5), pairSum([1,2,3,4,5,6], 10), pairSum([1,2,3,4,5,6], 23));


// try another form 

function pairSumFunc(arr, target){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j< arr.length; j++){
            let sum = arr[i] + arr[j];
            if(sum === target) {
                return true
            }
        }
    }
    return false;
}

console.log(pairSumFunc([1,2,3,4,5,6],10));