//捕获异常
//正常代码执行出错 就会停止向下运行 用捕获异常捕获以后 就可以继续执行

try {
  var emp = undefined;
  console.log(emp.name);
} catch (err) {
  console.error("内容执行错误");
} finally {
  console.log("有无错误我都会执行");
}

console.log("因为有捕获异常 我这行也会执行");
