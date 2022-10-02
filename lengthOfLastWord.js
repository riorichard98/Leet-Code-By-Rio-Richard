// function lengthOfLastWord (s){
//     let spaceFound = false
//     let output = 0
//     for(let i = 0 ; i < s.length ; i++){
//         if(s[i] === ' '){
//             spaceFound = true
//         }else if(s[i] != ' ' && spaceFound){
//             spaceFound = false
//             output = 1
//         }else if(s[i] != ' ' && !spaceFound){
//             output++
//         }
//     }
//     return output
// }

// faster solution

function lengthOfLastWord (s){
    let firstWordFound = false
    let output = 0
    for(let i = s.length - 1 ; i >= 0 ; i--){
        if(s[i] != ' '){
            firstWordFound = true
            output++
        }else if(firstWordFound && s[i] !== ' '){
            output++
        }else if(firstWordFound && s[i] === ' '){
            return output
        }
    }
    return output
}

console.log(lengthOfLastWord('hallo wor tu    '));
