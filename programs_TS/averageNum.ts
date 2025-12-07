// to find average of the number in the numbered array is by using reduce method
// Usually Average can be calculated by total sum of the elements in the array divided by the number of elements in an array.

const arrayVal = [4, 3, 2, 1, 12, 15, 5];

const sumArray = arrayVal.reduce((a, b) => a + b, 0);
const arrayLen = arrayVal.length;

const avrgArray = sumArray / arrayLen;

console.log(avrgArray);