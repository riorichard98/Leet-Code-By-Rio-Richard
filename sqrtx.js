function mySqrt(x){
    let left = 0
    let right = x
    while(left != right){
        let mid = Math.ceil((left + right)/2)
        if(x < (mid*mid)){
            right = mid - 1
        }else {
            left = mid 
        }
    }
    return right
}

console.log(mySqrt(121));