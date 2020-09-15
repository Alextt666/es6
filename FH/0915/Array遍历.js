//遍历数组
var arr = [1, 2, 3, 4, 5];

//1.for 循环 i 计数器
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//2.for of 循环 （没有计数器i）
console.clear();
for (ele of arr) {
  console.log(ele);
}

//3.Array对象的内置方法 foreach
//支持回调函数 ， 返回三个值 ，当前元素， 索引， 自身
console.clear();
arr.forEach((ele, index, self) => {
  console.log(ele);
  console.log(index);
  console.log(self);
});

//4.Array对象的内置方法 map()
//支持回调 返回三个值 ， 当前元素， 索引 ， 自身
console.clear();
var arr = [1, 2, 3, 4];
var mappedArr = arr.map((ele) => ele * 2);
console.log(mappedArr);
console.log(arr);

//forEach 和 map的区别是
//
//forEach 不会返回结果 undefined 需要内部return这个数组 并且原数组发生改变
//map 相当于 取出原数组的元素 根据函数进行 改变  然后返回一个新数组

console.clear();
var testArr = [1, 2, 3, 4];
testArr.forEach((ele, index) => {
  return (testArr[index] = ele * 2);
});
console.log(testArr); //原数组发生改变
