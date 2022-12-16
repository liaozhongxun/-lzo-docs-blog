---
title: react
---

### 简介
[官网](https://zh-hans.reactjs.org)

声明式编程：（维护状态，根据状态改变更新熏染UI界面） UI=f(state）

组件化开发：



#### 开发依赖

必须依赖三个包

-   **react**：包含`react`所有核心代码
    -   包含`react web` 和 `react-native`所共同拥有的核心代码

-   **react-dom**：`react` 熏染在不同平台所需要的核心代码
    -   针对`web` 和`native`所完成的事情不同
    -   web端：`reacte-dom`会将`jsx`最终渲染成真是DOM,显示在浏览器中
    -   native端：`react-dom` 会将`jsx`最终渲染成原生控件

-   **babel**：将jsx转换成React代码的工具

### 组件

>   **类组件**和**函数组件**，将 **state 数据** 、**方法**、**render** 关联起来

#### 类组件

```react
class App extends React.Component {
    // 组件数据
    constructor() {
        super();
        // this.state 固定的，不能改变
        this.state = {
            message: "Hello World"
        };

        // 对需要绑定的方法, 提前绑定好this，class下默认绑定的this是undefined，箭头函数就不需要了
        this.btnClick = this.btnClick.bind(this);
    }

    // 组件方法(实例方法)
    btnClick() {
        // setState 是 React.Component 继承的方法  
        // 内部完成了两件事情:
        // 1.将state中message值修改掉 2.自动重新执行render函数函数
        // 2.应用类型建议不要直接该，向浅拷贝，改完，再重新全部复制过去，改变引用
        this.setState({
            message: "Hello React",
        });
    }

    // 渲染内容 render方法，名称固定 不能改变
    render() { // 里面的this 都是正常指向组件的this
        return (
            <div>
                <h2>{this.state.message}</h2>
                {/* 拿到 btnClick 指针，存到这里，没有调用，当用户点击才调用，所以默认拿不到this的*/}
                <button onClick={this.btnClick}>修改文本</button>
            </div>
        );
    }
}

// this绑定的问题
// const app = new App()
// const foo = app.btnClick
// foo(); // 默认绑定 => window => 严格模式下 => undefined  (babel 转换的和class里默认都是严格模式)

// function bar() {
//   console.log("bar:", this);
// }
// bar()

// 将组件渲染到界面上
const root = ReactDOM.createRoot(document.querySelector("#root"));
// App根组件
root.render(<App />);
```

###  JSX

>   认识 JSX

概念

-   JSX 是一种 JavaScript 的语法扩展，或称为 `JavaScript XML`
-   它用于描述**UI界面 view,** 并且**完全**可以和J**avaScript融合在一起**
-   它不同于vue的模板语法，**不需要**专门学习模块语法中的**一些指令**（比如v-for，v-if）
-   React 认为 **逻辑渲染**本质上与其他**UI逻辑**存在很强的**内在耦合**（关联性强），所以选择 JSX
    -   UI 中绑定事件
    -   展示数据状态
    -   状态改变又要改变 UI

位置

```react
render(){
    retrun (); // 这里面 或 放到这里使用的，就是jsx,运行会被bable转成js代码 
}
```

> 书写规范 `retrun () 中`

-   只能有**一个根元素**
-   **小括号**，使 JSX 可以换行书写，方便阅读
-   单标签必须 `/>`结尾

#### 使用

-   作为子元素`{}`插入内容 **Number**、**String**、**Array** 可以直接显示，**undefined**、**null**、**boll ** 不显示，**Object对象** 不能直接插入

```react
// 1.定义App根组件
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            message:'note',
            count:0,
            arr:[1,2,3,4],
            isReady:true
            
        }
        
        this.btnClick = this.btnClick.bind(this);
    }
    
    btnClick(){console.log(this)}
    btn2Click = ()=> console.log(this);
    btn3Click(){console.log(this)};
    btn4Click(event, name, age) {console.log(event, name, age)}

    render() {
        const {message,count,arr,isReady } = this.state;
        const countAdd = count + 1;
        
        let ele = null;
        if(isReady){
            ele = <h1>h1</h1>
        }else{
            ele = <h2>h2</h2>    
        }
        
        return (
            { /* 注释 */ }
            <div>
                { /* 1、注释 */ }
                { /* 2、插入内容变量 */ }
                <h2>{message}</h2>
                
                { /* 3、插入表达式 没有计算属性，可以直接通过js完成*/ }
                <h2>{1+2}</h2>
                <h2>{countAdd}</h2>
                
                { /* 4、调用方法 */ }
                <ul>{arr.map(item=> <li>{item}</li>)}</ul> 
                <ul>{this.getItem}</ul> 
                
                { /* 5、绑定属性 */ }
                <img title={message} src={xxx}></img>
                <h2 className="box" >绑定类</h2> { /* class 是关键字，bable解析可能会产生误解 */ }
				<h2 className={`box1 box2 ${countAdd==2?'box3':'box4'}`} >绑定类</h2> 
                
                { /* 6、绑定样式 */ }
                 <h2 style={{color: "red", fontSize: "30px"}}>呵呵呵呵</h2>
                
                { /* 7、绑定事件 小驼峰*/ }
                 <button onClick={this.btnClick}>修改文本</button>
                 <button onClick={this.btn2Click}>按钮2</button>
                 <button onClick={() => this.btn3Click()}>需要执行</button> 
                 <button onClick={(event) => this.btn4Click(event, "why", 18)}>按钮4</button>
                
                { /* 8、条件渲染 js怎样就怎样 */ }
                <div>{ele}</div>
                <div>{ isReady?<h1>h1</h1>:<h2>h2</h2>  }</div>
                <div style={{display:isReady ? 'block': 'none'}}>v-show </div>
                
                { /* 9、列表渲染 ，如果添加限制，向把arr处理一下再遍历 */ }
                <div>{arr.map(item=> <div className='item'>item</div>)}</div>
            </div>
        );
    }
    
    getItem(){
        { /* 如果复杂的逻辑 */ }
        retrun this.state.arr.map(item=> <li>{item}</li>)
    }
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
```

>   Bable 解析 JSX 

```react
{/*
	React.createElement(type,config,children)
	
	1、bable 将每一个 div 转换为 React.createElement("div",null,null)
	通过 createElement 组成一个 JavaScript对象树，形成虚拟DOM
	
	2、再通过 document.createElement("dov") 转真实DOM
	
	有一个从 jsx -> 虚拟DOM（js对象 ） -> 真实DOM的过程 
	  （jsx没有v-for，事件绑定这些，比较简单，bable可以直接解析，vue比较麻烦，template 通过v-loader来解析）
	  
	 虚拟DOM的好处
	 	- 可以在家js中通过diff算法对比新旧虚拟dom，部分更新
	 	- 动态判断是渲染成web端可以用的DOM结构，或渲染成其他各个平台认识的结构，实现跨平台
	 	- 通过root.render 让虚拟DOM和真实DOM同步起来，这个过程叫做协调
	 	- 只需要告诉react让ui展示什么状态，react去匹配，你不需要手动操作dom、属性、事件，实现声明式编程 
*/}

return (
    <div>
    	<ul>
            <li className='item'>Text</li>
            <li className='item'>Text</li>
        </ul>
    </div>
)

// 转换后
React.createElement("div",null,
	React.createElement("ul",null,
    	React.createElement("li",{className:'item'},Text)
    )
)
```

### React ClI

>   建筑学的概念，表示搭建建筑物时，**临时搭建**出来的**一个框架**，处理里一些问题，

-   目录机构组织
-   管理文件直接的相互依赖
-   管理第三方依赖
-   发布前的压缩打包。。。
-   浏览器不认识的代码转换
-   所有webpack相关的都存到 `react-scripts` 中了，`执行 npm run `就可以弹出，就能看到了，**不可逆**

>   PWA

-   `Progressive Web App` 渐进式WEB应用
-   首先是一个**网页**，通过**Web技术编写**出一个**网页应用**
-   随后添加**App Manifest** 和 **Service Worker** 来实现**安装和离线缓存**等功能 
    -   App Manifest：手机上某些浏览器（如Google）右上角更多里面，将页面添加到桌面，看上去就跟app差不多
    -   Service Worker：当没网的时候打开这个Web App，还能看到上一次浏览的一些东西
-   这种Web存在的形式 称为 **Web App**
-   作用: 添加到**主屏幕**、**离线缓存**、**消息推送**等 一系列NativeApp的相关功能

#### create-react-app(CRA)

```shell
# 1、全局安装 npm install create-react-app -g
# 2、创建 create-react-app <object-name>    - 不允许存在大写字母
# 3、 cd   yarn start

# 目录结构
#     public 一些静态文件
#         index.html、favicon.ico 入口文件，标题图标
#         两个logo.png、manifest.json 都是配置 PWA的一些资源样式配置
#         robots.txt 告诉搜索引擎哪些东西可以被爬虫爬
#     src  源码
#  
# eject 后多出     
#     config
#     scripts
#
#
```









