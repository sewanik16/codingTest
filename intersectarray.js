// Intersect_Three
// Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order, return a sorted array of only the integers that appeared in all three arrays.

// Input
// The first line denotes n1, the size of the arr1. The next n1 lines denotes the n elements of the arr1.

// The next line denotes n2, the size of the arr2. The next n2 lines denotes the n elements of the arr2.

// The next line denotes n3, the size of the arr3. The next n3 lines denotes the n elements of the arr3.

// Output
// n lines, Each line containing 1 element of the resultant array.

// Example
// Input:

// 3

// 1

// 2

// 3

// 2

// 1

// 2

// 1

// 1

// Output:

// 1

// Explanation:
// Only 1 appeared in the three arrays.

// Note:
// 1 <= arr1.length, arr2.length, arr3.length <= 1000
// 1 <= arr1[i], arr2[i], arr3[i] <= 2000
// Return [-1] if there is nothing common in all three arrays



// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }
// //

// let n1 = parseInt(readLine())
// let arr1=[]
// if(n1>0){
//     for(let i=0;i<n1;i++){
//         arr1.push(parseInt(readLine()))
//     }
// }

// let n2 = parseInt(readLine())
// let arr2=[]
// if(n2>0){
//     for(let i=0;i<n2;i++){
//         arr2.push(parseInt(readLine()))
//     }
// }

// let n3 = parseInt(readLine())
// let arr3=[]
// if(n3>0){
//     for(let i=0;i<n3;i++){
//         arr3.push(parseInt(readLine()))
//     }
// }

// let max = Math.max(n1,n2,n3)
// let res=[]
// for(let i=0;i<max;i++){
//     if(arr2.includes(arr1[i])){    // 2 3 5   1 2 9   2 4 9
//         if(arr3.includes(arr1[i]))
//         res.push(arr1[i])
//     }
// }
// if(res.length!=0){
//     for(let ele of res)
//     console.log(ele)
// }else{
//     console.log(-1)
// }




// 2 3 5   1 2 9   2 4
// 



