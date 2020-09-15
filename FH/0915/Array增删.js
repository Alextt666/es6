//增添元素
var arr = [1, 2, 3];
arr[3] = 4;
console.log(arr);

arr[5] = 6;
console.log(arr);
console.log(arr[4]); // undefined

//栈模式增加 (栈是后进先出)
console.clear();
var stack = [1, 2, 3];
stack.push(4);
console.log(stack);
stack.push(5, 6, 7);
console.log(stack);

//从栈中移除
var last = stack.pop();
console.log(last);
console.log(stack);

//查看栈中最后一项
console.log(stack[stack.length - 1]);

//队列模式(先进先出)
console.clear();
var queue = [1, 2, 3];
queue.push(4, 5, 6);
console.log(queue); //[1,2,3,4,5,6]
var first = queue.shift();
console.log(queue); //[2,3,4,5,6]
//插队
queue.unshift(10, 9, 8); //[10,9,8,2,3,4,5,6]
console.log(queue);

//删除元素
// console.clear();
var arr = [1, 2, 3];
arr.length = 2; //删除了末尾
console.log(arr);
arr.length = 0; // 清空数组
console.log(arr);

var arr = [1, 2, 3, 4, 5, 6];
//splice 方法去除3 索引号 去除的个数

console.log(arr.splice(2, 1)); //splice 返回的是去除的元素

console.log(arr);

//splice 方法去除指定元素的同时添加 新元素
//去掉2,4 换成3 7 8

arr.splice(1, 2, 3, 7, 8);
console.log(arr);

//splice 方法指定位置添加元素
//在3 前面添加 9,10

arr.splice(1, 0, 9, 10);
console.log(arr);
