function plusOne(digits) {
    let plusOne = true
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] = digits[i] + 1
        if (digits[i] > 9) {
            plusOne = true
            digits[i] = 0
        } else if (digits[i] < 10) {
            plusOne = false
            return digits
        }
    }
    if(plusOne){
        digits.unshift(1)
    }
    return digits
}

console.log(plusOne([9,9,8]));