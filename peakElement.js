// Peak Element
// Description
// A peak element in an array is the one that is not smaller than its neighbours. For corner elements, we need to consider only one neighbour. Given an array of integers of size N, find the index of its first peak elements.

// Input format
// First line contains a positive integer t, denoting the number of test cases. For every test case there are two lines. First line contains a positive integer n denoting the number of elements in the array and second line contains n space separated elements of array.

// Output format
// Output t lines. For each test case print the 1 based index (1<=i<=n) for the first peak element in the array and -1 if there is no peak element.

// Sample input
// 4
// 5
// 1 3 6 4 9  
// 5
// 1 2 3 4 5
// 5 
// 6 4 3 5 1
// 3
// 1 1 1
// Sample output
// 3
// 5
// 1
// -1
// Explanation
// In the first test case, element on index 3 that is 6 is the first peak element as it is greater than both of its neighbours, 3 and 4.  
// In the second test case, element on index 5 is the first peak element. As it is a corner element, it has only one neighbour 4 which is smaller than 5.
// In the third test case, we have two peak elements at index 1 and at index 4. As 1<4 so element at index 1 is first peak element.

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
//

let tc = parseInt(readLine())

while(tc--){    
    let n = parseInt(readLine())
    let arr = readLine().split(" ").map(Number)
    let res ;

    for(let i = 1; i < arr.length-1; i++) {
        if(arr[0]>arr[1]){                          // 1 1 0 1 1
            res = 1
            break
        }
        if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
                res = i+1
                break
         }else if(arr[arr.length-1]>arr[arr.length-2]){
            res = arr.length
         }
    }

    if(res == undefined){
        console.log(-1)
    }else{
        console.log(res)
    }
}




// function Peak(arr){
//     let n=arr.length
//     if(arr.length===0){
//         return -1;
//     }
//     if(arr[0]>arr[1] || arr.length==1){
//         return 1;
//     }
//     for(let i=1;i<n-1;i++){
//         if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
//             return i+1;
//         }
//     }
//     if(arr[n-1]>arr[n-2]){
//         return n;
//     }
//     else{
//         return -1
//     }
// }

// let t=parseInt(readLine());
// for(let i=0;i<t;i++){
//     let n=parseInt(readLine());
//     let arr=readLine().trim().split(" ").map(Number);
//     console.log(Peak(arr));
// }