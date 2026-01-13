//Given Combination of numbers and float in an array but want to separate the numbers and float values in that array 
function separateAndSort(arr) {
  const integers = [];
  const floats = [];

  for (const num of arr) {
    if (Number.isInteger(num)) {
      integers.push(num);
    } else {
      floats.push(num);
    }
  }

  integers.sort((a, b) => b - a);
  floats.sort((a, b) => b - a);

  return { integers, floats };
}

const data = [1, 2.3, 5, 6.7, 9, 111, 11.2];
console.log(separateAndSort(data));

//Using build-in methods 

function sepSort(arr) {
    return {
        intg : arr.filter(Number.isInteger).sort((a, b)=> b-a),
        flt: arr.filter(n => !Number.isInteger(n)).sort((a, b) => b-a)
    };
}

const data1 = [1, 2.3, 5, 6.7, 9, 111, 11.2];
console.log(sepSort(data1));