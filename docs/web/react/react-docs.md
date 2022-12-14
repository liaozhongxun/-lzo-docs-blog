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
        this.setState({
            message: "Hello React",
        });
    }

    // 渲染内容 render方法，名称固定 不能改变
    render() { // 里面的this 都是正常指向组件的this
        return (
            <div>
                <h2>{this.state.message}</h2>
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

-   `{}`插入内容 **Number**、**String**、**Array** 可以直接显示，**undefined**、**null**、**boll ** 不显示，**Object对象** 不能直接插入

```react
// 1.定义App根组件
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            message:'note',
            count:0,
            arr:[1,2,3,4]
            
        }
    }

    render() {
        const {message,count,arr} = this.state;
        const countAdd = count + 1;
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









