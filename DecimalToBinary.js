

let n = 6              // 6
let ans=0;              // 0
let i=0                // 0
while(n!=0){           // 6 3 1
    let rem= n%2        // 0 1 1
    ans = ans + rem*(10**i) // 0  10 110
    i++                  // 1 2
    n=parseInt(n/2)       // 3 1
}
console.log(ans)