//数组排序
var arr = [1, 4, 5, 6, 3, 2];
arr.sort();
console.log(arr);

//降序排列;
arr.sort().reverse();
console.log(arr);

var arr1 = [5, 6, 3, 2, 7, 6, 4, 1];
arr1.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});
console.log(arr1);

//上述代码可以简写
var arr2 = [5, 6, 3, 2, 7, 6, 4, 1];
arr2.sort((a, b) => b - a);
console.log(arr2);

//数组的链接
console.clear();
var arr = [1, 2, 3];
var arr2 = [4, 5, 6];

console.log(arr.concat(arr2));

//数组的裁剪
console.clear();
var arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 3));
