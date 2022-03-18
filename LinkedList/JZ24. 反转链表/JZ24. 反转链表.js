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
var reverseList = function(head) {
    if (head === null || head.next === null) return head //优化算法时间
    let pre = null //定义前置节点 
    let cur = head //定义当前节点
    while (cur) {
        let next = cur.next //定义后置节点  cur.next指向要从往后变成往前 为了不丢失下一个节点 要保存
        cur.next = pre // 将cur指向前一个 完成翻转
        pre = cur //反转后的迭代 下一个pre就应该变成cur
        cur = next //下一个cur就变成此时的next
    }
    return pre
};