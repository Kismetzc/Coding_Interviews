// 栈类
function Stack() {
    // 栈中的属性
    var items = []

    // 栈相关的方法
    // 压栈操作
    this.push = function(element) {
        items.push(element)
    }

    // 出栈操作
    this.pop = function() {
        return items.pop()
    }

    // peek操作
    this.peek = function() {
        return items[items.length - 1]
    }

    // 判断栈中的元素是否为空
    this.isEmpty = function() {
        return items.length == 0
    }

    // 获取栈中元素的个数
    this.size = function() {
        return items.length
    }
}

function dec2bin(decNumber) {

    //定义栈对象
    const stack = new Stack();
    let rem;
    let binNumber = "";

    //当被除数还能被2除
    while (decNumber > 0) {
        rem = decNumber % 2;
        stack.push(rem); //余数放入栈里
        decNumber = Math.floor(decNumber / 2); //商作为下次的被除数  注意需要Math.floor()获取整取后的结果
    }
    while (!stack.isEmpty()) {
        binNumber += stack.pop();
    }
    return binNumber;
}

console.log(dec2bin(100));