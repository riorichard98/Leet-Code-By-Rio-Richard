function singleNumber(nums){
    let output = new Map()
    output.set(String(nums[0]),true)
    for(let i = 1 ; i < nums.length ; i++){
        if(output.get(String(nums[i]))){
            output.delete(String(nums[i]))
        }else{
            output.set(String(nums[i]),true)
        }
    }
    return Number(output.entries().next().value[0])
}

console.log(singleNumber([2,2,1]));