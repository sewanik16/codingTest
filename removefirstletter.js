// Remove First Alphabet
// Write a function which takes a list of strings and returns the list by removing the first letter from each string.

// If only one letter is present in the string, delete that element from the list.

// The function name should be removeFirstAlphabet

// Input
// list of string

// Output
// list of strings

// Example
// Input:

// ['adf', 'qwert', 'a', 'rewq']

// Output:

// ['df', 'wert', 'ewq']


let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
//

function removeFirstAlphabet(arr){
    let res=[]
    for(let i=0; i<arr.length; i++){

        if(arr[i].length>1){
            res.push(arr[i].split("").slice(1).join(""))
        }
   
   } return res
}
let alpha =readLine();
alpha =  alpha.split(' ');
let removedList = removeFirstAlphabet(alpha);
for(let ele of removedList){
  console.log(ele);
}