//用构造函数创建一个对象
function Person(name, position) {
  this.name = name;
  this.position = position;
  this.signIn = function () {
    return console.log(this.name + " " + this.position);
  };
}
//创建一个实例
var p1 = new Person("张三", "前端工程师");

console.log(p1.signIn());

//给原型添加属性和方法;
Person.prototype.age = 20;
Person.prototype.printInfo = function () {
  return this.name + this.age + this.position;
};
console.log(p1.age);

//获取对象原型的方式 和 比较
console.log(p1.__proto__); //返回实例继承的原型对象
console.log(Object.getPrototypeOf(p1)); //返回实例继承的原型对象
console.log(Person.prototype); //返回原型对象
console.log(p1.__proto__ === Person.prototype); //true

//Object.create
var manager = Object.create(p1);
console.clear();
console.log(manager);
for (key in manager) {
  console.log(key);
}
console.log(Object.getOwnPropertyNames(manager));

manager.name = "李四";
manager.age = 40;
manager.position = "混子";
console.log(manager);
for (key in manager) {
  console.log(key);
}
console.log(Object.getOwnPropertyNames(manager));

//原型链
//每个对象的原型都有一个上层的原型 直到遇到NULL 这种链式继承下来的原型 构成原型链
var protoOfmanager = Object.getPrototypeOf(manager);
console.clear();
console.log(protoOfmanager); //P1
var protoOfP1 = Object.getPrototypeOf(protoOfmanager);
console.log(protoOfP1); //原型
var protoOfObj1 = Object.getPrototypeOf(protoOfP1);
console.log(protoOfObj1); //Object原型对象
var protoOfObj = Object.getPrototypeOf(protoOfObj1);
console.log(protoOfObj); //null 最顶层
