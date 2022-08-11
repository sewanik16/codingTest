let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
//

let n =  parseInt(readLine())
let arr = readLine().split(" ").map(Number)
arr.sort((a,b)=>a-b)
let diff = 0
diff =  Math.max(arr[arr.length-1]-arr[0],diff)
console.log(diff)

// Problem-Statement----------------------------------------------------
// Maximum difference
// Description
// Given an array of integers of size N, find the maximum difference between any two elements of the array.

// Input format
// First line contains a positive integer n denoting the number of elements in the array and second line contains n space separated elements of array.

// Output format
// For the given array, print the maximum difference between any two elements of the array.

// Sample input-1
// 10
// 1 7 14 0 9 4 18 11 2 4
// Sample output-1
// 18
// Explanation-1
// Maximum difference is between elements 18 and 0.
// Sample input-2
// 5
// 1 1 1 1 1
// Sample output-2
// 0
// Explanation-2
// Maximum difference is between elements 1 and 1.


// 1 7 14 0 9 4 18 11 2 -4
// -4 0 1 2 4 4 7 9 11 14 18  = 18-4 = 14

// if(arr[i]<0)
//         diff = Math.max(diff,arr[j]+arr[i])
//         else
//         diff = Math.max(diff,Math.abs(arr[j])-Math.abs(arr[i]))
