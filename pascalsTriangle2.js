function getRow(rowIndex){
    const output = [1]
    if(rowIndex == 0) return output
    for(let i = 0 ; i < rowIndex ; i++){
        for(let k = output.length - 1 ; k >= 0 ; k--){
            if(k == output.length - 1){
                output.push(1)
                k++
                continue
            }else if(k == 0){
                break
            }
            output[k] = output[k] + output[k-1]
        }
    }
    return output
}

console.log(getRow(1));
console.log(getRow(2));
console.log(getRow(3));
console.log(getRow(4));