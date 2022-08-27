// Sort 2's
// You have been given an array of integers 'A' of size 'N'. Rearrange the array on the basis of the number of times '2' occurs in the number. The number with greater number of 2's comes first in the rearranged list. If two numbers have same number of 2's present, the greater of the two numbers comes first.

// Constraints
// 0 <= A[i] <= 10000000000 , 0 <= N <=100000

// Input
// First line of the input contains N(size of the input array), the second line contains the 'N', space separated integers representing the elements of the array.

// Output
// Print the elements of the array(space separated) after rearranging them on the logic provided above.

// Example
// Input:

// 5

// 25 988888 22 52222 2992

// Output:

// 52222 2992 22 25 988888

// Explanation:

// 52222-> 4 2's

// 2992-> 2 2's

// 22->2 2's

// 25-> 1 2's

// 988888->0 2's

// 2992 and 22 have same number of 2's but 2992 is bigger of the two hence it comes first.

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
let arr = readLine().split(" ")
console.log(arr)
// arr.sort((a,b)=>a-b)
console.log(arr)
let obj = {}
let cc= 0
for(let i=0;i<arr.length;i++){
    cc=0
    let str=arr[i]
    for(let j=0;j<str.length;j++){
        if(str[j]=="2"){
            cc++
        }
    }
    if(cc) obj[arr[i]] = cc

}
let res=[...Object.keys(obj)]
let res1=[...Object.values(obj)]
res1.sort((a,b)=>b-a)
let i=5
while(i>=0){
    console.log()
    i--
}
console.log(res1)
// let res=[]
// console.log(arr)

// for(let i=0;i<arr.length;i++){
//     console.log(obj.get(arr[i]))
// }

// console.log(res)

// 25 988888 22 52222 2992    => 22 25 2992 52222 988888