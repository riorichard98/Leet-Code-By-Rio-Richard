function hammingWeight(n){
    let output = 0
    for(let i = 0 ; i < 32 ; i++){
        if(n >= Math.pow(2,31-i)){
            n -= Math.pow(2,31-i)
            output ++
        }
    }
    return output
}