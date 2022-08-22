// Atleast Two
// You have an array of size n. You need to find all such elements of the given array, who have atleast 2 unique elements greater than it in the same array. Print all such unique elements as space seperated values (in non-decreasing order). If there are no such values, print -1.

// Input
// One integer, denoting n the size of the given array. Next line containing n space seperated values, denoting the elements of the array.

// Output
// Print all the values that satisfy the given conditions as space space seperated values (in non-decreasing order). If there are no such values, print -1.

// Example
// Input1:

// 6
// 3 2 2 5 4 5
// Output1:

// 2 3


let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
//

// 6
// 3 2 2 5 4 5

let n = parseInt(readLine())
let arr = readLine().split(" ").map(Number)
let count = 0
let set = new Set(arr)
arr = [...set]
let res=[]
for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]<arr[j]) count++
    }
    if(count>=2){
        res.push(arr[i])
        count=0
    }
}
res.sort((a,b)=>a-b)
if(res.length!=0)
console.log(...res)
else
console.log(-1)