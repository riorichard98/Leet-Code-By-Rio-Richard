function strStr(haystack, needle) {
    // let needleIndex = 0
    // let foundIndex = 0
    // for (let i = 0; i < haystack.length; i++) {
    //     if (needle[needleIndex] == haystack[i]) {
    //         if (needleIndex == 0) {
    //             foundIndex = i
    //         } 
    //         if (needleIndex == needle.length - 1) {
    //             return foundIndex
    //         }
    //         needleIndex++
    //     } else {
    //         needleIndex = 0
    //     }
    // }
    // return -1
    let needleIndex = 0
    let foundIndex = 0
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[needleIndex]) {
            foundIndex = i
            needleIndex++
            if (needle.length == 1) {
                return foundIndex
            }
            for (let j = i + 1; j < i + needle.length; j++) {
                if (haystack[j] == needle[needleIndex]) {
                    if (needleIndex == needle.length - 1) {
                        return foundIndex
                    }
                    needleIndex++
                } else {
                    needleIndex = 0
                    break
                }
            }
        }
    }
    return -1
}

// console.log(strStr("sadbutsad", "sad")) // 0
// console.log(strStr("leetcode", "leeto")) // -1
// console.log(strStr("hello", "ll")) // 2
console.log(strStr("a", "a")) //0