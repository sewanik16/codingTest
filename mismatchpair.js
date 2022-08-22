// 'Mis'matched pair
// Given an array of size N, you have been equipped with a task to find the most Mismatched pair out of all the pairs. Every pair of the array has a matching value associated with it. for a pair Ai and Aj, the matching value is given as

// Match(Ai,Aj)= | Ai+Aj|

// the higher the matching value, the better the match and lower the mismatch. Find the most mismatched pair out of all the pairs. If there are multiple pairs with the same minimum match score consider the one with higher |Ai|+|Aj|.

// Note- |X| stands for absolute value of X.

// Constraints
// 2 <= N <=100000

// -1000000<= arr[i]<= 1000000

// Input
// first line of the input contains an integer N representing the length of the array. second line contains the elements of the array(space separated)

// Output
// Print the two elements Ai,Aj with least matching score and the corresponding matching score. print the smaller of (Ai,Aj) first followed by the bigger and then followed by the matching score. i.e ("Asmaller Abigger |Asmaller-Abigger|")

// Example
// Input:

// 7

// 9 8 -10 8 7 -6 1

// Output:

// -10 9 1

// Explanation:

// the lowest matching score comes from 2 possible cases (-10,9)->1 or (-6,7)->1, however since 19(10+9)>13(6+7), we consider (-10,9) hence the result "-10 9 1".


let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
//



// let min = Infinity
// let res=[]
// let x=[]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
      
//             min = Math.abs(arr[i]+arr[j])
//             x.push(min)
//             res.push([arr[i],arr[j]])
//     }
// }
// min = Math.min(...x)
// let result=0
// for(let i=0;i<res.length;i++){
//     result = res[min]
// }

// result.sort((a,b)=>a-b)
// console.log(...result,min)

// 9 8 -10 8 7 -6 1
//  i
// -10 -6 1 7 8 8 9
//                j

let n = parseInt(readLine())
let arr = readLine().split(" ").map(Number)
arr.sort((a,b)=>a-b)
let i=0
let j=arr.length-1
let min = Infinity
let res=[]
while(i!=j){
    if(min==Math.abs(arr[i]+arr[j]) || min<Math.abs(arr[i]+arr[j]) ){
        res.push([arr[i],arr[j]])
        i++
    }else{
        if(min>Math.abs(arr[i]+arr[j])){
            min = Math.abs(arr[i]+arr[j])
        }
    }
    j--
}
console.log(res)