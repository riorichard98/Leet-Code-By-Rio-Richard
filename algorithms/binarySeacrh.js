function binarySearch(sortedArr,target){
    let left = 0 ;
    let right = sortedArr.length - 1 ;

    while(left <= right){
        let mid = Math.floor((left+right)/2)
        if(sortedArr[mid] === target){
            return mid
        }else if(target > sortedArr[mid]){
            left = mid + 1
        }else if(target < sortedArr[mid]){
            right = mid - 1
        }
    }

    return false
}

console.log(binarySearch([1,2,3,4,5],5));
console.log(binarySearch([1,2,3,4,5],2));
console.log(binarySearch([1,2,3,4,5],3));
console.log(binarySearch([1,2,3,4,5],6));
console.log(binarySearch([1,3,4,5],2));
console.log(binarySearch([1,2,3,5],4));