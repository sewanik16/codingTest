// Delete Alphabets
// We are given an array A of N lowercase letter strings, all of the same length.

// Now, we may choose any set of deletion indices, and for each string, we delete all the characters in those indices.

// For example, if we have an array A = ["abcdef","uvwxyz"] and deletion indices {0, 2, 3}, then the final array after deletions is ["bef", "vyz"], and the remaining columns of A are ["b","v"], ["e","y"], and ["f","z"]. (Formally, the c-th column is [A[0][c], A[1][c], ..., A[A.length-1][c]]).

// Suppose we chose a set of deletion indices D such that after deletions, each remaining column in A is in non-decreasing sorted order.

// Return the minimum possible value of D.length

// Input
// The first line of input contains integer N and K. Here N is number of strings and k is length of string. All the strings will be of length k.

// Output
// Single integer representing the total number of unsorted groups.

// Example
// Input1:

// 3 4

// adsf

// bfax

// yzzu

// Output1:

// 2

// Explanation:
// All combinations are aby, dfz, saz, fxu. Among these saz and fxu are not in sorted order.

// So, answer is 2.

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
//

let [n,k] = readLine().split(" ").map(Number)
let arr=[]
for(let i=0; i<n; i++){
    arr.push(readLine().trim())
}
let temp =""
let cc = 0
for(let i=0; i<k; i++){
    temp = ""
   for(let j=0; j<n; j++){
    temp += arr[j][i]
   }
   let temp1 = temp.split("").sort().join("")
   if(temp != temp1){
    cc++
   }
}
console.log(cc)
