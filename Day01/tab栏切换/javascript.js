var that = null;
class Tab {
    constructor(id) {
        //获取元素
        that = this;
        this.main = document.querySelector(id);
        this.add = this.main.querySelector('.btn-add')
        //获取li的父元素 ul
        this.ul = this.main.querySelector('.nav-head .tab-items')
        //获取section的父元素
        this.fsection = this.main.querySelector('.content')
        this.init();
    }
    // 初始化功能;
    init() {
        //初始化操作 让相关的元素绑定事件
        this.updateNode();
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
        }
        //添加功能绑定事件
        this.add.onclick = this.addTab;

    }

    //更新li 和 sec
    updateNode(){
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
    }
    //1.切换功能
    toggleTab() {
        that.clearClass();
        this.className = 'current'
        that.sections[this.index].className = 'content-item'
    }
    //写一个清楚类名的方法
    clearClass() {
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    //2.添加功能
    addTab() {
        //调用时清楚其他元素的样式设置  所以调用clearClass()方法
        that.clearClass();
        //(1)创建li元素和section元素
        var lihtml = '<li class="current"><span>新的选项卡</span></li>'
        var sechtml = '<section class="content-item">新选项卡内容 </section>'
        //(2)把这两个元素追加到对应的父元素ul里面
        that.ul.insertAdjacentHTML('beforeend', lihtml);
        that.fsection.insertAdjacentHTML('beforeend',sechtml);
        that.init();
    }
    //3.删除功能
    removeTab() { }
    //4.修改功能
    editTab() { }
}
new Tab('#wrap')

