// min max range
// Given 3 lists of positive integers. From the first list get the minimum value m1 and second list get the maximum value m2. From the third list get all the values that lies between m1 and m2 including m1 and m2.

// If m1 <= m2 then we should consider all the values x from third list which satisifies m1 <= x <= m2

// If m1 > m2 then we should consider all the values x from third list which satisifies m1 >= x >= m2

// You have write 3 functions.

// Takes list as input and returns a minimum value.
// Takes list as input and returns a maximum value.
// Takes a list, m1 and m2 and returns list of intergers which lies between m1 and m2. If no such numbers exist return a list with -1 i.e [-1]
// You have to return the list of numbers in the same order they are present.

// You will be provided with function template, you have to fill those functions.

// Input
// [3,5,4,5,7]

// [7,6,4,4,23,2]

// [6,5,1,3,8,9,2]

// Output
// [6,5,3,8,9]

// Explanation
// The minimum value from the first input list given is 3 and maximum value from the second input list is 23 . We have to return the list of numbers which satisfies the condition 3<=number<=23 from the third input list. So the resulting output is [6,5,3,8,9]

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

//
// [3,5,4,5,7]
// [7,6,4,4,23,2]
// [6,5,1,3,8,9,2]

let arr1 = readLine().split(" ").map(Number)
let arr2 = readLine().split(" ").map(Number)
let arr3 = readLine().split(" ").map(Number)
// console.log(arr1, arr2, arr3)

let min = Math.min(...arr1)
let max = Math.max(...arr2)
// console.log(min, max)
let res=[]
if(min<max){
    res = arr3.filter((ele)=>{
        return ele>=min && ele<=max
    })
}else{
    let temp = min
    min = max
    max= temp

    res = arr3.filter((ele)=>{
        return ele>=min && ele<=max
    })
}

if(res.length > 0)
console.log(...res)
else
console.log(-1)



// // ## This function should return single integer. The integer should be maximum value of input list
// // ## Please fill the following function
// function maximumValue(list2){
//     // write below this here
//     let max = Math.max(...list2)
// 	return max
// }

// // ## This function should return single integer. 
// // ## The integer should be minimum value of input list
// function minimumValue(list1){
//     // Please write below this
//     let min = Math.min(...list1)
// 	return min
// }


// // ## This function should return list of integer which lies between m1 and m2. 
// // ## if m1 <= m2 return list of numbers between m1 and m2
// // ## if m2 <= m1 return list of numbers between m2 and m1
// // ## If no such numbers exist in the input list between m1 and m2 return a list with -1 i.e [-1]
// function getNumbersInRange(list3,m1,m2){
//     // Please write below this line
//     let res = list3.filter((ele)=>{
// 		return ele>=m1 && ele<=m2
// 	})

// 	return res
// }





// //  Please do not change anything below this line.
// function ConvertToNumber(list){
//   for(let each in list){
//     list[each]=Number(list[each]);
//   }
//   return list;
// }

// let list1 = readLine().split(" ");
// let list2 = readLine().split(" ");
// let list3 = readLine().split(" ") ;  
// ConvertToNumber(list1);
// ConvertToNumber(list2);
// ConvertToNumber(list3);
// let m1 = minimumValue(list1);
// let m2 = maximumValue(list2);
// let minMaxRange = getNumbersInRange(list3, m1, m2);
// console.log(...minMaxRange);