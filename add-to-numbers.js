/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0, sum = 0;
    let digit = new ListNode(0);
    let list = digit;
    
    while (l1 != null || l2 != null) {
        sum = carry;
        if (l1 != null) {
            sum += l1.val;
            l1 = l1.next;
        }                            
        if (l2 != null) {
            sum += l2.val;
            l2 = l2.next;
        }       
        digit.val = sum % 10;
        carry = Math.floor(sum / 10);
        
        if (l1 == null && l2 == null) {
            if (carry > 0) {
                digit.next = new ListNode(carry);
            }
        } else {
            digit.next = new ListNode(0);
            digit = digit.next;
        } 
    }

    return list;
};
