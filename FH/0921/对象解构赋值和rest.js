var post = {
  id: 1,
  title: "标题",
  content: "这是内容",
};
//解构
var { id, title } = post; //命名需要一致
console.log(id, title);

//如果要更改变量名 需要添加冒号 以及新名字
var { id, title: headline } = post;
console.log(id, headline);

//如果要解构不存在的值  需要添加默认值，
var { id, title, comments = "没有" } = post;
console.log(comments);

//解构复杂对象
var post2 = {
  id: 1,
  title: "标题",
  content: "这是内容",
  comments: [
    {
      userId: 1,
      comment: "评论1",
    },
    {
      userId: 2,
      comment: "评论2",
    },
    {
      userId: 3,
      comment: "评论3",
    },
  ],
};
//只要评论2
var {
  comments: [, { comment }],
} = post2;

console.log(comment);

//rest
var { comments, ...rest } = post2; //rest返回除了comments 以外的剩余内容
console.log(rest);
