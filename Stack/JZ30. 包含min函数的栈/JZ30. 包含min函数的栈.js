/* 链接： https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/ */

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.minstack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if (this.minstack.length === 0 || x <= this.minstack[this.minstack.length - 1])
        this.minstack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let value = this.stack.pop();
    if (this.minstack[this.minstack.length - 1] === value)
        this.minstack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.minstack[this.minstack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */