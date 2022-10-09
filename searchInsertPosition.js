function searchInsert(nums,target){
    let left = 0 ;
    let right = nums.length - 1 ;
    let mid

    while(left < right){
        mid = Math.floor((left+right)/2)
        if(target === nums[mid]){
            return mid
        }
        else if(target > nums[mid]){
            left = mid + 1
        }else if(target <= nums[mid]){
            right = mid 
        }
    }

    return target > nums[right] ? right + 1 : right
}

console.log(searchInsert([1,3,5,6],7));