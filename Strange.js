const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
//

let n = parseInt(readLine())
let arr = []
for(let i=0;i<n;i++){
    arr.push(parseInt(readLine()))
}
let c = 0
for(let i=0;i<arr.length;i++){
        let str = arr[i].toString().split("")
        let sum = 0
        let product = 1
        for(let j=0;j<str.length;j++){
            sum = sum +  Number(parseInt(str[j]))
            product = product * Number(parseInt(str[j]))
           
        }
        if(sum>=product){
            c++
        }
        
}
console.log(c)


// Problem - Statement -----------------------------------------------
// Strange
// You have been given n non-negative integer values. Lets say the given values are a1, a2, a3, a4 ...

// A given integer ai is called as strange integer, if the sum of its digits is greater than or equal to product of its digits.

// You need to find the number of strange integers in the given input values.

// Input Format:
// First line denotes n, the number of inputs. The next n lines contains one integer in each line.

// Output Format:
// One integer denoting the result, as mentioned above.

// Example:
// Input:

// 5
// 10
// 20
// 30
// 40
// 50
// Output:

// 5
// Explanation:

// For the given 5 integers, sum of the digits >= product of the digits.