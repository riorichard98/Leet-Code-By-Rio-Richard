function addBinary(a,b){
    let output = ""
    let carry = 0
    let longest = a.length >= b.length ? a.length : b.length
    for(let i = 0 ; i < longest ;i++){
        let int1 = a[a.length - 1 - i] !== undefined ? parseInt(a[a.length - 1 - i]) : 0
        let int2 = b[b.length - 1 - i] !== undefined ? parseInt(b[b.length - 1 - i]) : 0
        if(int1 + int2 + carry === 0){
            output = "0" + output
            carry = 0
        }else if(int1 + int2 + carry === 1){
            output = "1" + output
            carry = 0
        }else if(int1 + int2 + carry === 2){
            output = "0" + output
            carry = 1
        }else if(int1 + int2 + carry === 3){
            output = "1" + output
            carry = 1
        }
    }
    if(carry === 1){
        output = "1" + output 
    }
    return output
}

// console.log(addBinary('11','1'));
console.log(addBinary('0','0'));


