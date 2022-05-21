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
    let carry = 0, curSum = 0;
    let digit = new ListNode(0);
    let list = digit;
    
    while (l1 != null || l2 != null) {
        if (l1 != null) {
            curSum += l1.val;
            l1 = l1.next;
        }                            
        if (l2 != null) {
            curSum += l2.val;
            l2 = l2.next;
        }       
        curSum += carry;
        
        if (Math.floor(curSum / 10) === 0) {
            digit.val = curSum;
            carry = 0;
        } else {
            digit.val = curSum % 10;
            carry = Math.floor(curSum / 10);
        }
        
        if (l1 == null && l2 == null) {
            if (carry > 0) {
                digit.next = new ListNode(carry);
            }
            return list;
        } else {
            curSum = 0;
            digit.next = new ListNode(0);
            digit = digit.next;   
        }
    }

    return list;
};
