/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// /**
//  * @param {ListNode} head
//  * @return {number[]}
//  */
var reversePrint = function(head) {
    var arr = []
    while (head) {
        arr.push(head.val)
        console.log(head)
        head = head.next
    }

    return arr.reverse()
};


// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {number[]}
//  */
// var reversePrint = function(head) {
//     var arr = []
//     while (head) {
//         arr.unshift(head.val)
//         head = head.next
//     }
//     return arr
// };