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
    intg: arr.filter(Number.isInteger).sort((a, b) => b - a),
    flt: arr.filter(n => !Number.isInteger(n)).sort((a, b) => b - a)
  };
}

const data1 = [1, 2.3, 5, 6.7, 9, 111, 11.2];
console.log(sepSort(data1));

//Group by property

const users = [{
  role: 'admin'
},
{
  role: 'user'
},
{
  role: 'admin'
}
]

const userData = users.reduce((acc, cur) => {
  acc[cur.role] = acc[cur.role] || [];
  acc[cur.role].push(cur);
  return acc;
}, {});
console.log(userData);

//Sort numbers

const sorted = [10,2,16,12,5,8].sort((a,b) => a-b);
console.log(sorted);

//Count characters
// let str = "hello"
// const count = [...str].reduce((a,c)=>{
//  a[c]=(a[c]||0)+1; return a;
// },{})
// console.log(count);

//Remove duplicates (objects)

const arr = [{id:1},{id:2},{id:1}]

const dupObj = [...new Map(arr.map(o => [o.id,o])).values()];
console.log(dupObj);

//Convert array to object
console.log(["a","b","c"].reduce((a,c,i)=> (a[i]=c, a), {}));

//Count vowels
console.log('krish'.match(/[aeiou]/gi)?.length || 0);

//Get unique values only
console.log([1,2,2,3,4,4,5].filter(x => [1,2,2,3,4,4,5].indexOf(x) === [1,2,2,3,4,4,5].lastIndexOf(x)));

//Flatten one level (without flat)
//[].concat(...arr)

//Random number 1–10
console.log(Math.floor(Math.random()*10));