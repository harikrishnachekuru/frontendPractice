// to find average of the number in the numbered array is by using reduce method
// Usually Average can be calculated by total sum of the elements in the array divided by the number of elements in an array.
var arrayVal = [4, 3, 2, 1, 12, 15, 5];
var sumArray = arrayVal.reduce(function (a, b) { return a + b; }, 0);
var arrayLen = arrayVal.length;
var avrgArray = sumArray / arrayLen;
console.log(avrgArray);
