function mergeTwoLists(list1, list2) {
    if (!list1.length && !list2.length) {
        return []
    }
    let output = []
    while (list1.length || list2.length) {
        if (list1[0] <= list2[0] || list2[0] === undefined) {
            output.push(list1[0])
            list1.shift()
        } else if (list1[0] >= list2[0] || list1[0] === undefined) {
            output.push(list2[0])
            list2.shift()
        }
    }
    return output
}

// console.log(mergeTwoLists([],[]));
// console.log(mergeTwoLists([],[0]));
// console.log(mergeTwoLists([1,2,4],[1,3,4]));
// console.log(mergeTwoLists([1,2,4,9,12,100],[1,3,4,5,6,6,8]));
function ListNode(x) {
    this.value = x;
    this.next = null;
}
let fh = new ListNode(-1);
let current = fh;

console.log(fh);

