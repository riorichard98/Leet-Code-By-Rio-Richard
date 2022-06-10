function isValid(s) {
    let stack = []
    let parentheses = {
        "(": ")", "[": "]", "{": "}"
    }
    for (let i = 0; i < s.length; i++) {
        if(parentheses[s[i]]){
            stack.push(parentheses[s[i]])
        }else if(s[i] === stack[stack.length-1]){
            stack.pop()
        }else if(s[i] !== stack[stack.length-1]){
            return false
        }
    }
    if(stack.length){
        return false
    }
    return true
}

console.log(isValid('[()]'));