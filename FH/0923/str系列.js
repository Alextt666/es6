//str 遍历
var str = '他说 ："women出去玩吧"';
for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i));
}
console.clear();
for (key of str) {
  console.log(key);
}

//str裁剪
var strr = "你好兄弟，我叫药水";
var arr = strr.split(""); //变数组
console.log(arr);
console.clear();
//slice方法 允许使用负数 开始大于结束返回空字符串
console.log(strr.slice(0, 4)); //返回新的字符串， 不包括4；
console.log(strr.slice(4)); //返回从4开始到结尾;
console.log(strr.slice(0, -1)); //-1表示倒数第一个字符;
console.log(strr.slice(-1, 4)); //返回空
//substring 方法 不接受负数 开始大于结束 会自动调整
console.log(strr.substring(0, 4)); //相同
console.log(strr.substring(4)); //相同
console.log(strr.substring(0, -1)); //为空
console.log(strr.substring(2, 4)); //开始大于结束 会自动调整

//str拼接
console.clear();
var str1 = "hello ";
var str2 = "world";
console.log(str1 + str2);
console.log(str1.concat(str2));

//str大小写;
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

//去除空格
var str = "       hello            world        ";
console.log(str.trim()); //去除前后空格保留中间;

//模板字符串
console.clear();
var longStr = `    Lorem ipsum dolor sit amet consectetur 
adipisicing elit. Officia omnis culpa voluptates nisi vero
 maxime odit! Doloremque perferendis ab sequi, neque at, 
 recusandae dolorem, 
necessitatibus quis alias quas earum consequatur.`;
console.log(longStr); //按照代码编写格式显示

var name = "天天";
var str = `你好,${name}`;
console.log(str);

console.clear();

function greeting(strings, gender) {
  let genderStr = "";
  if (gender === "M") {
    genderStr = "先生";
  } else if (gender === "F") {
    genderStr = "小姐";
  }
  return `${strings[0]}${genderStr}`;
}
var gender = "M";
var result = greeting`你好，天天${gender}`;
console.log(result);
