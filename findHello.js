// Find Hello
// You are given a string. You are supposed to find if "hello" exists in the given string as a substring. See explanation for better understanding. If "hello" exists print "Yes" else print "No".

// Note: length of string is greater than 0.

// Input
// First line contains n number of strings for which you need to check. After this n lines will follow. Each containing a string.

// Output
// Print "Yes" or "No".

// Input:

// 2

// Academy

// ramhellolaxman

// Output:

// No

// Yes

// Explanation
// Testcase 1: There is no hello in the word Academy.

// Testcase 2: hello starts at index 3 and ends at 7.


let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
//

let n =  parseInt(readLine())

for(let i = 0; i < n; i++) {
    let str = readLine();
    if(str.includes("hello")){
        console.log("Yes")
    }else{
        console.log("No")
    }
}