//数组解构
var arr = [1, 2, 3];
var [a, b, c] = arr;
console.log(a, b, c);

//只要前两个
var arr = [1, 2, 3];
var [d, e] = arr;
console.log(d, e);

//只要中间那个 需要保留前面的逗号 表示占用 但不使用
var arr = [1, 2, 3];
var [, f] = arr;
console.log(f);

//使用示例

function multipleReturns() {
  let name = "Alex";
  let position = "Web debeloper";
  return [name, position];
}
var [myName, myPosition] = multipleReturns();
console.log(myName, myPosition);

//解构配套 rest操作符
var arr = [1, 2, 3, 4, 5, 6];
var [a, b, ...rest] = arr;
console.log(rest);

var [c, , d, ...rest] = arr;
console.log(rest);

//使用示例
function variousArgs(...args) {
  return args;
}
var result = variousArgs(1, 2, 3, 4);
console.log(result);
