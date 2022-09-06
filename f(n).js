// Find f(n)
// For a positive integer n let's define a function f as follows:

// f(n) =  - 1 + 2 - 3 + .. + n*(-1)^n

// Your task is to calculate f(n) for a given integer n.

// Input
// One integer denoting n.

// Output
// One integer which is the value of f(n).

// Example
// Input

// 4

// Output

// 2

// Explanation

// f(4) = -1 +2 -3 +4 = 2




let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
///

let n = parseInt(readLine())

let res = 0

for(let i=1;i<=n;i++) {
    if(i%2==0) res = res + i
    else res = res - i
}

console.log(res)
