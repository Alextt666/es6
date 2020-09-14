//闭包就是函数内再定义一个函数
//内部函数可以访问外部函数作用域的变量
//只要外部函数不暴露这个内部函数，那么外界就不知道这个函数，他只能在自己的内部使用，形成私有函数

function squareSum(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
console.log(squareSum(2, 3));

function Person() {
  let name = "Alex";
  function getName() {
    return "你好 " + name; //内部函数可以访问外部函数作用域内的变量
  }
  return getName; //将内部函数传出 此时Person()是一个高阶函数，返回的是一个函数
}

var getName = Person(); //调用Person()返回值为内部getName()函数，存于变量内，可以进行查看
console.log(getName);
console.log(getName()); //这样做相当于给 getName()函数添加了只读属性，外界只能访问不可以修改 ， 起到了保护作用

//柯里化
//将接受多个参数的函数 改为接受单个参数的多个函数
console.clear();

function addThreeNum(a, b, c) {
  return a + b + c;
}
console.log(addThreeNum(1, 2, 3));

//柯里化后
function addThreeNumCurry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(addThreeNumCurry(1)(2)(3));

//可以用来保留变量的值
var fixTwo = addThreeNumCurry(1)(2);
console.log(fixTwo(4));
console.log(fixTwo(5));
console.log(fixTwo(6));
