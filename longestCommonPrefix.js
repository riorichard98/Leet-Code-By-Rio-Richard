function longestCommonPrefix(strs) {
    let prefix = strs[0]
    for (let i = 0; i < strs.length; i++) {
        let temp = ''
        for (let j = 0; j < prefix.length; j++) {
            if (strs[i][j] !== prefix[j]) {
                if(j === 0){
                    return ''
                }
                break
            } else {
                temp += strs[i][j]
            }
        }
        prefix = temp
    }
    return prefix
}

console.log(longestCommonPrefix(["dog","racecar","car"]));