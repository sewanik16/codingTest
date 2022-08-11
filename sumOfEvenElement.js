let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//

let n = parseInt(readLine())
let arr = readLine().split(" ").map(Number)
let res = 0
for(let i=0;i<n;i++){
    if(arr[i]%2==0)
    res = res + arr[i]
}
console.log(res)


// Problem-Statement--------------------------------------------------
// Sum of Even Elements
// Description
// Given an array of integers of size N, find the sum of all the even elements in the array.

// Input format
// First line contains a positive integer n denoting the number of elements in the array and second line contains n space separated elements of array.

// Output format
// For the given array, print the sum of all the even elements.

// Sample input-1
// 5
// 1 5 4 3 2
// Sample output-1
// 6
// Explanation-1
// There are two even numbers in the array- 4 and 2, 4+2=6.
// Sample input-2
// 5
// 1 5 3 7 11
// Sample output-2
// 0
// Explanation-2
// There are no even elements in the array so sum of even elements will be zero