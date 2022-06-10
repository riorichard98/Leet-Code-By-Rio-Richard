function isValid(s) {
    let stack = []
    let parentheses = {
        "(": ")", "[": "]", "{": "}"
    }
    for (let i = 0; i < s.length; i++) {
        // if the s[i] is open bracket we should push the close bracket into stack
        if(parentheses[s[i]]){
            stack.push(parentheses[s[i]])
        }
        // checking if the last close bracket required is same as the last open bracket
        // if same , then pop reducing the stack
        else if(s[i] === stack[stack.length-1]){ 
            stack.pop()
        }
        // if not same , then return false because it is not the correct closing bracket
        else if(s[i] !== stack[stack.length-1]){
            return false
        }
    }
    // if some case there is still close bracket in stack means that there still open bracket who has'nt match
    // we should return false first
    if(stack.length){
        return false
    }
    // return true means that the stack is empty , all the open bracket have all the matchs
    return true
}

console.log(isValid('[()]'));