function reverseBits(n){
    let output = 0
    for(let i = 0 ; i < 32 ; i++){
        if(n >= Math.pow(2,31-i)){
            n -= Math.pow(2,31-i)
            output += Math.pow(2,i)
        }
    }
    return output
}

console.log(reverseBits(4294967293));