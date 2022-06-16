function removeElement(nums, val) {
    let i = 0
    while(i !== nums.length){
        if(nums[i] !== val){
            i++
        }else if(nums[i] === val){
            nums[i] = nums[nums.length - 1]
            nums.pop()
        }
    }
    return nums.length
}

console.log(removeElement([1,2,3,4,5,6,6,6,7],6));