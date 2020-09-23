//创建正则的方式
//字面量 和 RegExp对象
var str = "where when what";

var re = /wh/; //字面量创建
var re2 = new RegExp("wh"); // 对象创建
//执行的两种方式 exec()  test();
console.log(re.exec(str)); //返回第一个匹配的结果
console.log(re.test(str)); //返回布尔值

//最简单的字符匹配
var str = `This  Thas str contains 153 123 CAPITALIZED letters and _-& symbols`;

console.log(/T/.test(str));
console.log(/This/.test(str));
console.log(/_-/.test(str));

//特殊字符匹配 以及 match 方法
console.clear();
//match返回匹配到的内容
console.log(str.match(/Th.s/g)); //g 全局匹配 . 表示不管是啥 只要是Th开头 s结尾
console.log(str.match(/1.3/g));
// '\d \w \s ' 大写 则为相反的意思；
//\d代表数字
console.log(str.match(/\d/g)); //返回一个数组 [1,5,3,1,2,3];

//\w 大写和小写字母 下划线
console.clear();
console.log(str.match(/\w/g));

//\s 匹配空格和换行
console.clear();
console.log(str.match(/\s/g));

// 匹配中文需要 Unicode编码
console.clear();
console.log("你好".match(/\u4f60/g)); //['你']

//匹配次数
console.clear();
console.log(str.match(/This.*/g)); //This 后面除换行外所有内容;
console.log(str.match(/T+/g)); //一次或者多次
console.log(str.match(/t?/g)); //0次或者1次;
//大括号可以精确次数
console.clear();
console.log(str.match(/t{2}/g)); //判断有谁出现了两个t 有的话返回
console.log(str.match(/\d{1,2}/)); //判断出现了1~2 次；

//区间 逻辑和 界定符
console.clear();
console.log(str.match(/[abc]/g)); //所有a b c
console.log(str.match(/[a-z]/g)); //所有小写字母
console.log(str.match(/[^a-z]/g)); //除了小写字母以外的所有
console.log(str.match(/This|contains/g));
console.clear();
var str = "this that this and that";
console.log(str.match(/this/g)); //所有this
console.log(str.match(/^this/g)); //开头this
console.log(str.match(/that/g)); //所有that
console.log(str.match(/that$/g)); //结尾that

var str = "this athata this and that";
console.clear();
console.log(str.match(/\bthat\b/g)); //返回有边界的一个that

// 常见的正则表达式
console.clear();
//手机
var mobileRe = /^1[3-9]\d{9}/g; //总共11位 1 开头 然后3-9 后面再有9个数字
console.log(mobileRe.test("136565656598"));
//邮件
var emailRe = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g;
console.log(emailRe.test("alex666@163.com"));

//字符串替换
console.clear();
var str = "Tish 1is 2an 3apple";
console.log(str.replace("Tish", "This"));
console.log(str.replace(/\d+/g, ""));

var tags = "html,css,javascript";
console.log(tags.split(","));

var tags = "html|css & javascript";
console.log(tags.split(/\W+/g));
