function getRow(rowIndex){
    const output = [1]
    for(let i = 0 ; i < rowIndex ; i++){
        for(let k = 0 ; k < output.length - 1 ; k++){
            output[k] = output[k] + output[k+1]
        }
        output.unshift(1)
    }
    return output
}

console.log(getRow(0));
console.log(getRow(1));
console.log(getRow(2));
console.log(getRow(3));
console.log(getRow(4));