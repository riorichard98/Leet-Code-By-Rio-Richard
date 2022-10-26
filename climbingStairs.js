function climbStairs(n){
    if(n <= 3) return n
    let twoBefore = 1
    let oneBefore = 2
    for(let i = 3 ; i < n ; i++){
        let temp = oneBefore
        oneBefore += twoBefore
        twoBefore = temp
    }
    return oneBefore + twoBefore
}