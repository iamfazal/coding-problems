/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let map = new Map();
    let current=head;
    let index=0;
    while(current){
        if(map.has(current)){
            return current
        }
        map.set(current,current)
        current=current.next
    }


    return current
};