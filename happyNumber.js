function isHappy(n){
    let map = new Map()
    while(!map.get(n) && n != 1){
        map.set(n,true)
        let temp = 0
        for(let i = 0 ; i < String(n).length ; i++){
            temp += Math.pow(Number(String(n)[i]),2)
        }
        n = temp
    }
    return n == 1
}

console.log(isHappy(19));
console.log(isHappy(2));