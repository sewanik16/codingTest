let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
//

// let k = parseInt(readLine())
// let n = parseInt(readLine())
// let arr =[]
// for(let i=0;i<n;i++){
//     arr.push(parseInt(readLine()))
// }

// let x ;
// for(let i=0;i<arr.length;i++){
//     if(k == arr[i]){
//         x=i
//         break
//     }
// }
// x ? console.log(x) : console.log(-1)

// Problem Statement : -----------------------------------------------------------
// Unordered Linear Search
// Given a number K and List of numbers A return the index of K in List A.

// If K is not found return -1

// Input
// First line contains K Second line contains n, the number of integers. Next n lines contain n integers, one integer per line.

// Output
// Print the index of K in the List A

// Example
// Input: 20

// 9

// 2

// 34

// 43

// 18

// 20

// 78

// 54

// 13

// 10

// Output: 4

// second approach------------------------
let k = parseInt(readLine());
let n = parseInt(readLine());
let index;
for (let i = 0; i < n; i++) {
  let item = parseInt(readLine());
  if (item == k) index = i;
}
index ? console.log(index) : console.log(-1);
