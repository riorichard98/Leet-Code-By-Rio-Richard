function bruteForce(array,stop,n=1){
    if(stop === n){
        // return {array,length:array.length}
        return array
    }else{
        n++
        let tempArr = [...array]
        for(let i = 0 ; i < array.length ; i++){
            for(let k = i ; k >= 0 ; k--){
                tempArr.push(array[i]+array[k])
            }
            for(let j = i + 1 ; j < array.length ; j++){
                tempArr.push(array[i]+array[j])
            }
        }
        return bruteForce(tempArr,stop,n)
    }
}

function stringFounder(str,array){
    for(let i = 0 ; i < array.length ; i++){
        if(str === array[i]) return {i,str:array[i]}
    }
    return false
}

const alphaBets = [
    'a','b','c','d','e','f','g','h','i','j',
    'k','l','m','n','o','p','q','r','s','t',
    'u','v','w','x','y','z'
]

console.log(stringFounder('riori',bruteForce(alphaBets,4)));

// console.log(bruteForce(['a','b','c','d','e'],3));