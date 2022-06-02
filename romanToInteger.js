function romanToInt(s) {
    let romans = {
        I: 1, V: 5, X: 10, L: 50,
        C: 100, D: 500, M: 1000
    }
    let output = 0
    for(let i = 0 ; i < s.length ; i++){
        if(romans[s[i]] < romans[s[i+1]]){
            output -= romans[s[i]]
        }else if(romans[s[i]] >= romans[s[i+1]] || i === s.length-1){
            output += romans[s[i]]
        }
    }
    return output
}

console.log(romanToInt('III'));