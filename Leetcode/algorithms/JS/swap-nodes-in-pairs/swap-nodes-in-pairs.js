/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    const resu =(head)=>{
        if(!head || !head.next)
            return head

        let nh = head.next;

        head.next= resu(nh.next)
         nh.next = head;

        return nh;
    }

    return resu(head);
};