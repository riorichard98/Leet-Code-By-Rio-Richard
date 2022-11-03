function merge(nums1, m, nums2, n) {
    let mIndex = m - 1
    let nIndex = n - 1
    let index = nums1.length - 1
    while(mIndex !== -1 || nIndex !== -1){
        if((nums1[mIndex] >= nums2[nIndex]) || nIndex === -1){
            nums1[index] = nums1[mIndex]
            mIndex--
        }else if((nums1[mIndex] < nums2[nIndex]) || mIndex === -1){
            nums1[index] = nums2[nIndex]
            nIndex--
        }
        index --
    }
    console.log(nums1);
}

merge([1,2,3,0,0,0],3,[2,5,6],3)

