// Sequences
// Adi has loved an intersting thing today which is subsequence .

// His friend gave him an array of N integers.

// Now he asks to find all the possible subsequences of 1 to K which he can form from the given array. The subsequence should contain all the elements from 1,2,3...K. Here K can be any integer. K can be different for different subsequences.

// Each element of the array should belong to exactly one subsequence.

// If it possible to do so then print the number of subsequence and in next line print all the subsequence in increasing order of their length. If not then print only the minimum numbers to add to the array such that it is possible to assign each element to a subsequence.

// Example
// For eg :

// 5

// 1 3 3 4 5

// Now here it is not possible to assign each number to a subsequence.

// If we add elements 1,2,2 to the array then it is possible.

// 1 2 3

// 1 2 3 4 5

// So the minimum count of numbers required is 3.

// Input
// First line contains an integer N denoting the size of the array.

// Next line contain N space separated integers dentoing the array.

// Output
// If possible print the number of subsequences. In next line print all the subsequences in increasing order of their length. If not possible then print only the minimum count of numbers which should be added to the array such that it is possible to assign element to a subsequence.

// Input:

// 6

// 1 1 2 2 3 4

// Output:

// 2

// 1 2

// 1 2 3 4


let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
//

let n= parseInt(readLine())
let arr = readLine().split(" ").map(Number)

let map = new Map()
for(let i=0;i<arr.length;i++){
    if(map.has(arr[i])){
        map.set(arr[i],map.get(arr[i])+1)
    }
    else{
        map.set(arr[i],1)
    }
}
// console.log(map)
let res=[]
let temp=[]
for(let [k,v] of map){
 
  temp.push(k)
  map.set(k,v-1)
}
res.push(temp)
temp=[]
for(let [k,v] of map){
    if(v!=0)
    temp.push(k)
  }
  res.push(temp)
console.log(map)
console.log(res)


// 1 1 2 2 3 4 => 1 2 3 4 , 1 2 =>       1:2 2:2 3:1 4:1
// 1 3 3 4 5 => 1 3 4 5 , 3 => 

// for(let i=0;i<arr.length;i++){
//     if(!arr.includes(i+1)){
//         arr.splice(i+1,0,i+1)
//     }
// }
// console.log(arr)


// 6
// 1 1 2 2 3 4
// let res=[]
// let temp=[]
// for(let i=1;i<arr.length;i++){
//    if(arr[i]==arr[i-1]){
//     res.push(arr[i])
//     arr[i] = null
//    }
// }
// temp.push(res)
// res=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]!=null){
//         res.push(arr[i])
//     }
// }
// temp.push(res)
// console.log(temp)

//1 3 3 4 5 ===>  1 3 4  > 3


