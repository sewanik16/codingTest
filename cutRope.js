// Cut Rope
// You are given N ropes. A cut operation is performed on ropes such that all of them are reduced by the length of the smallest rope. Display the number of ropes left after every cut operation till the length of each rope is zero.

// Input
// The first line of input contains integer N denoting the number of ropes. Next N lines denotes N elements(length of rope).

// Output
// Print the resultant array, one element in one line.

// Constraints:
// 1 ≤ N ≤ 100000
// Example
// Input:

// 6

// 5

// 1

// 1

// 2

// 3

// 5

// Output:

// 4

// 3

// 2

// Explnation:
// 5 1 1 2 3 5

// After first iteration of cutting

// 4 1 2 4 -> 4

// 2nd iteration

// 3 1 3 -> 3

// 3rd iteration

// 2 2

// After that they become 0

// So, answer is 4 3 2

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
//

function findSmallOne(arr){
    let min=Infinity
    for(let i=0;i<arr.length;i++){
        min = Math.min(min,arr[i])
    }
    return min
}

let n = parseInt(readLine())
let arr=[]
for(let i=0;i<n;i++){
    let item = parseInt(readLine())
    arr.push(item)
}
let temp=[]
let res=[]
while(true){
    let min = findSmallOne(arr)
    for(let i=0;i<arr.length;i++){
        let x= arr[i]-min
        if(x!=0)
        temp.push(arr[i])
    }
    if(temp.length==0) break
    res.push(temp.length)
    arr=temp
    temp = []
}
for(let ele of res)
console.log(ele)






// let r=[]
// for(let i=0;i<arr.length;i++){
//     let min = findSmallOne(arr)
//     for(let j=0;j<arr.length;j++){
//         res.push(arr[j]-min)
//     }
//     r.push(res.length)
//     arr = res
//     res=[]
// }



// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');
// function readLine() {
//   idx++;
//   return data[idx - 1];
// }
// // -------- Do NOT edit anything above this line ----------

// function cutRope(A,arr){
//   // Complete this function
//   let min=A[0];
//   for(i=1;i<A.length;i++){
//     if(min>A[i]){
//         min=A[i];
//     }
//   }
//   let temp=[];
//   for(j=0;j<A.length;j++){
//     if(A[j]-min!=0){
//         temp.push(A[j]-min);
//     }
//   }
//   if(temp.length==0){
//     return arr;
//   }
//   arr.push(temp.length);
//   return cutRope(temp,arr);
// }
// // Do not change anything below this line
// let input_numbers = []
// let len=parseInt(readLine())
// for (let i=0;i<len;i++){
//   input_numbers.push(parseInt(readLine()))
// }
// let ans=[];
// res=cutRope(input_numbers,ans);
// for(ele of res){
//   console.log(ele)
// }

