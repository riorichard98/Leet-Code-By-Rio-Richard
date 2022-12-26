function titleToNumber(columnTitle){
    let output = 0
    for(let i = 0 ; i < columnTitle.length ; i++){
        output += Math.pow(26,i)
        output += (columnTitle[i].charCodeAt(0) - 64 -1)*Math.pow(26,columnTitle.length - 1 - i)
    }
    return output
}

console.log(titleToNumber("A"));
console.log(titleToNumber("AB"));
console.log(titleToNumber("ZY"));

