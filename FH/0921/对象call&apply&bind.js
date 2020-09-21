//call, apply bind
var emp = {
  id: 1,
  name: "天天",
};
function printInfo(dep1, dep2, dep3) {
  console.log("员工姓名：" + this.name, dep1, dep2, dep3);
}
//call方法 (如同公司内叫人 一个一个叫)
printInfo.call(emp, "技术部", "IT事业部", "总裁办公室");

//apply方法（如同公司内申请 收集好了一起交）
printInfo.apply(emp, ["技术部", "IT事业部", "总裁办公室"]);

//bind 方法 （公司整个和别人捆绑 融资成为一个新公司 所以返回一个新函数 审查员工 一个一个看）
var empInfo = printInfo.bind(emp, "技术部", "IT事业部", "总裁办公室");
empInfo();
