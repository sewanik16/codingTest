let n = 6              // 
let ans=0;              // 
let i=0                // 
while(n!=0){           // 
    let rem= n%2        // 
    ans = ans + rem*(10**i) //
    i++                  // 
    n=parseInt(n/2)       // 
}
console.log(ans)