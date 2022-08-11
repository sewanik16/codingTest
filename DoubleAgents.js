let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
//

// let n = parseInt(readLine())
// let arr = readLine().split(" ")
// let max = 0
// let c = 0
// for(let i=0;i<arr.length;i++){
//     let result = getPermutation(arr[i])
//     console.log(result)
//     for(let j=0;j<result.length;j++){
//         if(result.includes(arr[j])){
//             c++
//         }
//     }
//     max = Math.max(max,c)
//     c=0
// }
// console.log(max)

// function getPermutation(s){
//     let str = s.split("")
//     let result = []
//     let r = ""
//     let i = 0
//     let k=0
//     while(i<str.length){
//         k=i
//         for(let j=0;j<s.length;j++){
//             if(k==s.length) k=0
//             r=r+str[k]
//             k++
//         }
//         result.push(r)
//         r=""
//         i++
//     }
//     i=s.length-1
//     while(i>=0){
//         k=i
//         for(let j=0;j<s.length;j++){
//             if(k<0) k=s.length-1
//             r=r+str[k]
//             k--
//         }
//         result.push(r)
//         r=""
//         i--
//     }
//     return result
// }

// abcd bcda cdab dabc dcba cbad badc adcb

let n=parseInt(readLine())
let arr=readLine().split(" ")
for (let i=0;i<arr.length;i++) {
  arr[i]=arr[i].split("").sort().join("")

}
let map=new Map()
for (let i=0;i<arr.length;i++) {
  if (map.has(arr[i])) {
    map.set(arr[i], map.get(arr[i])+1)
  }
  else {
    map.set(arr[i], 1)
  }
}
let max=0
for (let [k, v] of map) {
  if (v>max) {
    max=v
  }
}

console.log(max)

