function isPalindrome(s){
    s = s.toLowerCase()
    let left = 0
    let right = s.length - 1
    let ascii = {
        a:1,b:1,c:1,d:1,e:1,f:1,g:1,h:1,i:1,j:1,
        k:1,l:1,m:1,n:1,o:1,p:1,q:1,r:1,s:1,t:1,
        u:1,v:1,w:1,x:1,y:1,z:1,"0":1,"1":1,
        "2":1,"3":1,"4":1,"5":1,"6":1,"7":1,
        "8":1,"9":1
    }
    let leftStr = ''
    let rightStr = ''
    while(left < right){
        if(!ascii[s[left]]){
            left++
            continue
        }
        if(!ascii[s[right]]){
            right--
            continue
        }
        leftStr += s[left]
        rightStr += s[right]
        left++
        right--
    }
    return leftStr === rightStr
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));