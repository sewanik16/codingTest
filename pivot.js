// Pivot Index
// Description
// Given an array of n integers. Write a method that returns the "pivot" index of this array. We define the pivot index as the index where the sum of all the numbers to the left of the index is equal to the sum of all the numbers to the right of the index. If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.
// Please assume that the sum to the left of the first element and the right of the last element is 0, i.e Sum of numbers which are not in bounds of the given array is 0

// Input format
// First line contains a positive integer n, denoting the number of elements in the array. Following n lines contain one integer each denoting one element in the array.

// Output format
// One integer containing the integer of the pivot element.

// Sample input
// 6
// 1
// 7
// 3
// 6
// 5
// 6
// Sample output
// 3
// Explanation
// First line is 6, i.e. 6 elements in the array.
// The actual array is [1,7,3,6,5,6].
// If we split the array by the number 6 at index 3, the left side array is [1,7,3] and the right side array is [5,6]
// Left side array is of sum 11 and right side array is of sum 11 so the 6 at index 3 is the pivot element so 3 is the output.

// Sample input
// 3
// 1
// 2
// 3
// Sample output
// -1
// Explanation
// First line is 3, i.e. 3 elements in the array.
// The actual array is [1,2,3].
// There is no way that we can split the array such that the sum of left side of the array is equal to the right side of the array.
// So the output is -1.


let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
idx++;
return data[idx - 1];
}
//
// 6
// 1
// 7
// 3
// 6
// 5
// 6

//     1 7 3 6 5 6      cumSum = 1 8 12 18 23 29

// function findPivot(arr,start,end){
//     let mid = parseInt((start+end)/2)
//     let leftArr=[]
// }

let n = parseInt(readLine())
let arr=[]
for(let i=0;i<n;i++){
    arr.push(parseInt(readLine()))
}
let x=0                                // 0   1 8  11 17 23
                                         // 27 20 17 11 6  0
let leftArr=[]
let rightArr=[]
for(let i=0;i<arr.length;i++){
    leftArr.push(x)
    x = x +arr[i]
}
x=0
for(let i=arr.length-1;i>=0;i--){
    rightArr.push(x)
    x = x +arr[i]
}
rightArr.reverse()
// console.log(rightArr)
let flag=false
for(let i=0;i<arr.length;i++){
    if(leftArr[i]===rightArr[i]){
        console.log(i)
        flag=true
        break
    }
}
if(flag==false){
    console.log(-1)
}

// let res=[] 
// while(mid<arr.length-1){                   // 1 7 3 6 5 6 
//     for(let i=0;i<mid;i++){
//         left= left + arr[i]
//     }
//     for(let i=mid+1;i<arr.length;i++){
//         right= right + arr[i]
//     }
//     if(left==right){
//         res.push(mid)
//     }
//     left = 0
//     right = 0
//     mid++
// }
// if(res.length!=0)
// console.log(res[0])
// else
// console.log(-1)



// let mid=1
// let res=[] 
// while(mid<arr.length-1){                   // 1 7 3 6 5 6 
//     for(let i=0;i<mid;i++){
//         left= left + arr[i]
//     }
//     for(let i=mid+1;i<arr.length;i++){
//         right= right + arr[i]
//     }
//     if(left==right){
//         res.push(mid)
//     }
//     left = 0
//     right = 0
//     mid++
// }



// console.log(n,arr)
// let start=0
// let end=arr.length-1
// findPivot(arr,start,end)








