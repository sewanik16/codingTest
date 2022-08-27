// Sorted Pairs
// You are given an array of integers. A Sorted pair is defined as a pair at index i,j(i< j) such that A[i]<=A[j]. Simply it is a pair that is already sorted with respect to each other. You have to count the no. of sorted pairs.

// print number of pairs such that: A[i]<=A[j] for some i<j

// Input
// First line contains the number of elements in the array, second line contains the elements of the array(space separated).

// 2<=Number of elements in the array<=10^5

// Output
// Print the number of sorted pairs in the output

// Example
// Input:

// 5

// 3 2 1 3 5

// Output:

// 7

// explanation

// In the given array sorted pairs are (3,3) (3,5) (2,3) (2,5) (1,3) (1,5) (3,5). Hence there are 7 such pairs.


// const { count } = require("console");
// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }
//

// let n = parseInt(readLine())
// let arr =readLine().split(" ").map(Number)
// let cc=0 
// for(let i=0;i<arr.length;i++){             
//     for(let j=i+1;j<arr.length;j++){       
//         if(arr[i]<=arr[j]) cc++                                            
//     }
// }
// console.log(cc)






function mergeAndCount(arr,l,m,r)
    {
        let left = [];
        for(let i = l; i < m + 1; i++)
        {
            left.push(arr[i]);  
        }
          
        let right = [];
        for(let i = m + 1; i < r + 1; i++)
        {
            right.push(arr[i]);
        }
        let i = 0, j = 0, k = l, swaps = 0;
        while (i < left.length && j < right.length)
        {
            if (left[i] <= right[j])
            {
                arr[k++] = left[i++];
            }
            else
            {
                arr[k++] = right[j++];
                swaps += (m + 1) - (l + i);
            }
        }
        while (i < left.length)
        {
            arr[k++] = left[i++];
        }
        while (j < right.length)
        {
            arr[k++] = right[j++];
        }
        return swaps;
    }
      
    function mergeSortAndCount(arr, l, r)
    {
        let count = 0;
        if (l < r) 
        {
            let m = Math.floor((l + r) / 2);
            count += mergeSortAndCount(arr, l, m);
            count += mergeSortAndCount(arr, m + 1, r);
            count += mergeAndCount(arr, l, m, r);
        }
        return count;
    }
    let arr= new Array(3,2,1,3,5);
    console.log(mergeSortAndCount(arr, 0, arr.length - 1));



