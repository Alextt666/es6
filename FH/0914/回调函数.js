//回调函数
function request(cb) {
  console.log("请求数据");
  cb("success");
  console.log("请求结束");
}
// function callBack(result) {
//   console.log("执行回调");
//   console.log("执行结果是：" + result);
// }

//es6箭头函数写法
request((result) => {
  console.log("执行回调");
  console.log("执行结果是： " + result);
});
