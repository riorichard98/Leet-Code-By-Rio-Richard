function fizzBuzz(){
    let output = []
    for(let i = 1 ; i <= 100 ; i++){
        if(i%3 === 0 && i%5 === 0) output.push('fizzbuzz')
        else if(i%3 === 0) output.push('fizz')
        else if(i%5 === 0) output.push('buzz')
        else output.push(i)
    }
    return output
}

// console.log(fizzBuzz());

function palindrome(str){
    str = str.toLowerCase()
    let alphaBets = {
        a:1,b:1,c:1,d:1,e:1,f:1,g:1,h:1,i:1,j:1,
        k:1,l:1,m:1,n:1,o:1,p:1,q:1,r:1,s:1,t:1,
        u:1,v:1,w:1,x:1,y:1,z:1
    }
    let str2 = ''
    for(let i = 0 ; i < str.length ; i++){
        if(alphaBets[str[i]]) str2 += str[i]
    }
    for(let i = 0 ; i < Math.ceil(str2.length) ; i++){
        if(str2[i] !== str2[str2.length - 1 - i]) return false
    }
    return true
}

// console.log(palindrome("Never odd or even"));
// console.log(palindrome("Was it a car or a cat I saw?"));
// console.log(palindrome("I'm not a palindrome, duh"));

function anagram(str1,str2){
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    let alphaBets = {
        a:1,b:1,c:1,d:1,e:1,f:1,g:1,h:1,i:1,j:1,
        k:1,l:1,m:1,n:1,o:1,p:1,q:1,r:1,s:1,t:1,
        u:1,v:1,w:1,x:1,y:1,z:1
    }
    // str1 = str1.split('')
    let obj = {}
    for(let i = 0 ; i < str1.length ; i++){
        if(alphaBets[str1[i]]) obj[str1[i]] = 1
    }
    for(let j = 0 ; j < str2.length ; j++){
        if(alphaBets[str2[j]] && !obj[str2[j]]) return false
    }
    return true
}

console.log(anagram("One", "Neo"));
console.log(anagram("Matrix", "Reality"));
console.log(anagram("O, Draconian devil", "Leonardo da Vinci"));