var person = {
  name: "天天",
  age: 25,
  sex: "male",
  signIn() {
    console.log("打开上班");
  },
};
//遍历对象的所有属性
//1.
var value = Object.keys(person);
console.log(value);
console.log(value[2]);

//2.
for (key in person) {
  console.log(key);
}

//删除对象
delete person.name;
console.log(person);

console.clear();
for (key in person) {
  console.log(key);
}
