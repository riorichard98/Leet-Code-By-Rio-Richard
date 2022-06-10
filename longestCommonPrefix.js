function longestCommonPrefix(strs) {
    //first prefix is first on array of strings
    let prefix = strs[0]
    for (let i = 0; i < strs.length; i++) {
        // temp is the next common prefix
        let temp = ''
        //looping through the prefix only
        for (let j = 0; j < prefix.length; j++) {
            if (strs[i][j] !== prefix[j]) {
                // if the first letter is diffrent there is no common prefix
                if (j === 0) {
                    return ''
                }
                // if the letter is diffrent than the common prefix , then it should be stop the loop
                break
            } else {
                // if the letter[j] is same as the prefix[j] it should concat the letter for the new common prefix
                temp += strs[i][j]
            }
        }
        // after each loop of letter in word , the common prefix is reasign to new shorter common prefix
        prefix = temp
    }
    return prefix
}

console.log(longestCommonPrefix(["dog", "racecar", "car"]));