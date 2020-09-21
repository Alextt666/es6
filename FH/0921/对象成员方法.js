//CLASS创建一个类

class Person {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
  signIn() {
    console.log(this.name + "打卡上班");
  }
  get info() {
    return this.name + " " + this.position;
  }
  set info(info) {
    let [name, position] = info.split(" ");
    this.name = name;
    this.position = position;
  }
}
var emp = new Person("天天", "前端工程师");
console.log(emp);
emp.signIn();
console.log(emp.info);
emp.info = "李四 后端";
console.log(emp.info);
console.log(emp.name, emp.position);
