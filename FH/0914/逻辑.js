// 逻辑与或非
// 返回的值为 布尔值 true or false
console.log('true && "你好"', true && "你好"); //输出后一个真值
console.log('flase && "你好"', false && "你好"); //短路：若第一个值为假则直接返回第一个假值

console.log('false || "你好"', false || "你好"); //返回为真的值
console.log('true || "你好"', true || "你好"); //短路：若第一个值为真 则直接短路返回真值

console.log(4); //返回真值4
console.log(!4); //返回真值取反的假值 即false；
console.log(!!4); // 返回 false 取反的真值 true 而不是4
