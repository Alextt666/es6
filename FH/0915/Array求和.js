//reduce 方法求和
var arr = [1, 2, 3, 4];
var result = arr.reduce((previous, current) => previous + current, 0);
console.log(result);

var result1 = arr.reduce((firstEle, secondEle) => firstEle + secondEle);
console.log(result1);
