/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let set = new Set();
    let current=head;
    let found=false;
    while(current?.next){
        if(set?.has(current)){
            found=true
            break;
        }
        set.add(current)
        current= current?.next    
    }
    
    return found;
};