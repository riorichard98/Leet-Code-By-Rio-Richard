function mySqrt(x){
    let i = 0
    let found = false
    let output
    while(!found){
        if(i*i <= x){
            output = i
        }else if(i*i > x){
            found = true
        }
        i++
    }
    return output
}

console.log(mySqrt(4));