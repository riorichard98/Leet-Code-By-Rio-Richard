// using binary search find the match index

function indexFinder(sortedArr,target){
    let left = 0 ;
    let right = sortedArr.length - 1 ;
    let mid

    while(left < right){
        mid = Math.floor((left+right)/2)
        if(sortedArr[mid] === target){
            return mid
        }else if(target > sortedArr[mid]){
            left = mid + 1
        }else if(target < sortedArr[mid]){
            right = mid 
        }
    }

    return target > sortedArr[right] ? right + 1 : right
}

console.log(indexFinder([1,3,4,5],2));
console.log(indexFinder([1,2,3,5],4));
console.log(indexFinder([1,2,4,5],3)); //
console.log(indexFinder([1,3,5,6],5));
