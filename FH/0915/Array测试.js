//数组测试有两种
//一种是every 所有元素都符合 某一规则 返回 BOOLEAN
//另一种是some   某个元素符合某一规则  返回 BOOLEAN
//两个方法接收的都是回调函数 形参均为ele index arr

var arr = [1, 2, 3, 4, 5, 6];
var result = arr.every((ele) => ele > 0);
var result2 = arr.every((ele) => ele > 7);

console.log(result); //true
console.log(result2); //false

var arr1 = [1, 2, 3, 4, 5, 6];
var resultSome = arr1.some((ele) => ele > 5);
var resultSome2 = arr1.some((ele) => ele < 1);

console.log(resultSome); //true
console.log(resultSome2); //false
