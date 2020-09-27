//JSON
var person = {
  id: 1,
  name: "天天",
  skills: ["vue", "javascript"],
  sex: "male",
};
//将JS对象转换为JSON
var personJ = JSON.stringify(person, null, 2);
console.log(personJ); //JSON格式

var personNotJ = JSON.parse(personJ);
console.log(personNotJ);
