//class一个对象
class Person {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
  signIn() {
    console.log(this.name + "打卡上班");
  }
}

//继承 extends 生成一个子类
class Emp extends Person {
  constructor(name, position, dep) {
    super(name, position);
    this.dep = dep;
  }
  signIn() {
    super.signIn();
    console.log("经理打卡");
  }
}
var emp = new Emp("天天", "前端", "技术部");
console.log(emp);
emp.signIn();
