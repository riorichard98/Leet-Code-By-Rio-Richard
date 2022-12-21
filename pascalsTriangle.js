function generate(numRows){
    let output = [[1]]
    if(numRows === 1) return output
    for(let i = 2 ; i <= numRows ; i++){
        let arr = []
        for(let j = 0 ; j < i ; j++){
            if(j == 0 || j == i-1){
                arr.push(1)
                continue
            }
            arr.push(output[output.length - 1][j] + output[output.length - 1][j-1])
        } 
        output.push(arr)
    }
    return output
}

console.log(generate(1));
console.log(generate(2));
console.log(generate(3));
console.log(generate(5));
console.log(generate(7));