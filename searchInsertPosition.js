function searchInsert(nums,target){
    let minIndex = 0
    let maxIndex = nums.length - 1
    let medianIndex
    while(maxIndex - minIndex > 2){
        medianIndex = Math.floor((maxIndex+minIndex)/2)
        if(target <= nums[medianIndex]){
            maxIndex = medianIndex
        }else if(target >= nums[medianIndex]){
            minIndex = medianIndex
        }
    }
    console.log(minIndex,medianIndex,maxIndex);
    if(target <= nums[minIndex] && target < nums[medianIndex]){
        return minIndex
    }
    if(target <= nums[medianIndex] && target < nums[maxIndex]){
        return medianIndex
    }
    if(target <= nums[maxIndex]){
        return maxIndex
    }
    return nums.length
}

console.log(searchInsert([1,3,5,6],5));