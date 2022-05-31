// using time complexity of O(n)
// using space complexity of O(n)

function twoSum(nums, target) {
    
    let obj = {}

    
    for(let i = 0 ; i < nums.length ; i++){

        // saving all the index of diffrence of nums[i] and target 
        obj[target - nums[i]] = i
        if(obj[nums[i+1]] >= 0){
            // if after saving the diffrence is found , then return the index of int that make the
            // diffrence and return the diffrence it self 
            return [obj[nums[i+1]],i+1]
        }
    }
}

console.log(twoSum([2,7,11,15],9));
console.log(twoSum([3,2,4],6));
console.log(twoSum([3,3],6));
console.log(twoSum([3,2,3],6));


