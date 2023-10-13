function deleteDuplicates(head) {
    let current = head;

    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
}

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Create a sample sorted linked list: 1 -> 1 -> 2 -> 3 -> 3
const head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(3);

const result = deleteDuplicates(head);

// After removing duplicates, the list becomes: 1 -> 2 -> 3
console.log(result);