//Date
var date = new Date();
console.log(date);
console.log(date.getFullYear()); //获取年份
console.log(date.getMonth()); //获取月份
console.log(date.getDate()); //获取日期
console.log(date.getDay()); //获取周几
console.log(date.getHours()); //获取小时
console.log(date.getMinutes()); //获取分钟
console.log(date.getSeconds()); //获取秒
console.log(date.getTime()); //获取时间戳
console.log(date.toLocaleDateString()); //获取当地时间格式

//也可以手动设置需要的时间
date.setFullYear(2022);
console.log(date.toLocaleDateString());
