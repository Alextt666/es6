//构造一个对象
function Person(name) {
  this.name = name;
  this.age = 20;
  this.signIn = function () {
    return this.name + this.age;
  };
}
//实例化一个对象
var zs = new Person("张三");
console.log(zs);
//在继承一个对象
var manager = Object.create(zs);
console.log(manager);
for (key in manager) {
  console.log(key);
}
console.log(Object.getPrototypeOf(manager));

//构造一个新的对象
function Manager() {}
Manager.prototype.departement = "技术部";

//修改指向
Object.setPrototypeOf(manager, Manager.prototype);

console.log(manager);
for (key in manager) {
  console.log(key);
}
