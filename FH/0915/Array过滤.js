// 数组过滤 filter
var arr = [1, 2, 3, 4, 5, 6];
var filteredArr = arr.filter((item) => item > 4);
console.log(filteredArr);

var filteredArr2 = arr.filter(function items(ele) {
  if (ele > 4) {
    return ele;
  }
});
console.log(filteredArr2);
