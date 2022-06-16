function removeDuplicates(nums){
    let currentIndex = 0
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[currentIndex] < nums[i]){
            nums[currentIndex + 1] = nums[i]
            currentIndex++
        }
    }
    
    return currentIndex + 1
}

console.log(removeDuplicates([1,2,3,3,4,4,5]));
