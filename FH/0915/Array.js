//有四种方式创建数组
var arr1 = [1, 2, 3];
console.log(arr1);
var arr2 = new Array(4, 5, 6);
console.log(arr2);
var arr3 = Array(7, 8, 9);
console.log(arr3);
var arr4 = Array.of(10, 11, 12);
console.log(arr4);

//当数组内部只有一个值的时候 会有不同
//只能使用 字面量 和 .of方法创建 另外两个方法代表的是数组长度 而不是内容

var singleArr = [1];
console.log(singleArr);

var singleArr2 = new Array(2);
console.log(singleArr2); // [emptyx2]

var singleArr3 = Array(3);
console.log(singleArr3); // [emptyx3]

var singleArr4 = Array.of(4);
console.log(singleArr4);

//访问数组
console.clear();
var arr = [1, 2, 3];
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]); // undefined
