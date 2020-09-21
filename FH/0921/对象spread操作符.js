//构造一个对象
function Blog() {
  this.id = 1;
  this.title = "标题1";
  this.content = "这是内容";
}
var post = new Blog();
console.log(post);

//使用spread创建一个复制
var postClone = { ...post };
console.log(postClone);

console.log(post === postClone); //值相同但内存地址不同;

//可以利用添加新的属性
var post2 = {
  ...post,
  author: "天天",
};
console.log(post2);
//spread应用于数组对象
var arr = [1, 2, 3];
var arrClone = [...arr];
console.clear();
console.log(arrClone);

//添加数组元素
var arr2 = [...arr, 4, 5, 6];
console.log(arr2);

//在函数中使用
function savaPost(id, title, content) {
  console.log("保存了文章", id, title, content);
}
savaPost(...[2, "标题", "内容"]);
