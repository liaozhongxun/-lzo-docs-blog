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









