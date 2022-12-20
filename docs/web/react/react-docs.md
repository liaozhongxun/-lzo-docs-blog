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

---

#### 对比vue

react：用户手动 setState 的时候 去重新执行 render 函数

vue：data数据改变直接劫持重新渲染模板

### 组件

将页面**拆分**为无数个**小的组件**，每个组件完成自己的**独立功能**，**方便**页面的**关联**与**维护** 与 **复用**

每个**单页面**应用就是一棵**组件树**，么个组件都将 **state 数据** 、**方法**、**render** 关联起来

组件类型，前面的**注重UI**， 后面的**注重逻辑**

>   根据组件**定义方式**：**函数组件 **和 **类组件**

>   根据内部是否有**状态需要维护**：**无状态组件** 和 **有状态组件**

>   根据组件**职责**：**展示型 组件** 和 **容器型组件**

#### 类组件

```react
/**
 * 1、组件名称必须大写开头  
 * 2、类组件必须继承 React.Component
 * 3、必须实现 render，也是唯一必须实现的
 *
 */
class App extends React.Component {
    constructor() {
        super();
        // 组件数据，this.state 固定的，不能改变
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

    /**
     *  渲染内容 render方法，名称固定 不能改变
     *  可以返回react元素、数组|字符串|数值、fragments(高级)、Portals(高级)
     */
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

##### 生命周期

生命周期就是事物从**创建**到**销毁**的过程，了解生命周期，可以让我们在**适合的地方**做想**要做的事情**

生命周期 和 生命周期函数的关系

-   整个生命周期有很多个阶段，react可以使**程序**走到**指定阶段**时**自动触发**（回调）相应的**生命周期函数**
    -   装载阶段（Mount），组件第一层在DOM树种被渲染的过程，组件**挂载到DOM**上就会触发`componentDidMount`
    -   更新阶段 (Update) , 组件状态发生变化，重新渲染的过程，组件**状态发生更新**触发 `componentDidUpdate`
    -   卸载阶段（Unmount），组件从DOM树中被移除的过程，就叫**即将移除**触发 `componentWillUnmount`

react 生命周期的过程

![](../../../static/img/react-live.jpg)

-   Mounting 挂载阶段
    -   **constructor**：创建组件实例 第一个执行 构造方法constructor 
        -   组件 都是一个类，每使用移除 <HelloX/> 都会创建一个类的实例出来 

    -   **render**：第二个执行render方法渲染 
        -   **render 完成** React 更新**DOM** 和 **Refs**

    -   **componentDidMount**：进行挂载到DOM上，挂载好就会 触发 **第一个生命周期函数**
        -   依赖dom的操作
        -   网络请求操作
        -   处理一些订阅

-   更新状态阶段
    -   **setState**：修改状态，修改完成之后**又执行 render** 重新 更新**DOM** 和 **Refs**
    -   **componentDidUpdate**：更新完成，触发**第二个生命周期函数**

-   卸载阶段
    -   **componentWillUnmount**：将组件从DOM树中移除之后触发 **第三个生命周期函数**
        -   取消一些订阅，清理操作

-   不常用的生命周期
    -   **shouldComponentUpdate**：处于 **setDate 到 render 之间**，如果返回**false**，说明**不需要重新渲染**界面 
    -   **getSnapshotBeforeUpdate**：处于 **render 到 更新DOM 之间**，获取或保存一写DOM更新前的一些信息


#### 函数组件

```react
/**
 * 与类组件的差异（不包含hook）
 *     没有生命周期，没有生命周期函数，也会被更新并挂载
 *     this 关键字不能指向组件实例
 *     内部没有状态 state
 */
function App(props){
    // return 的东西与类组件的一致
    return <h1>react元素</h1>
}
export default App
```

####  组件通信

##### 父子通信（props 由父到子）

>   组件存在**嵌套关系**，**嵌进来**的组件称为**子组件**  

```react
// App.js
import React from 'react'
import Headers from "./components/Headers"
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '首页',
            list: [1, 2, 3, 4, 5],
            infos: {
                name: 'lzo',
                height: "380cm"
            },

            count: 0,
        }
    }

    changeCount(num) {
        this.setState({
            count: this.state.count + num
        })
    }


    render() {
        return (
            <div>
                {/* 父传子：向子组件传入一个title等数据 */}
                {/* 子传父：向子组件传入回调，接收子组件发送的数据 childExec*/}
                <Headers
                    title={this.state.title}
                    infos={this.state.infos}
                    list={this.state.list}
                    childExec={(num) => this.changeCount(num)}
                    slotele={<div>传入React元素实现插槽</div>}
                    sloteleArea={(text) => <div>{text}</div>}
                >
                    <div className='children-1'>通过子元素实现插槽效果</div>
                    <div className='children-2'>通过 this.props.children 获取组件间的子元素</div>
                </Headers>
                <div>{this.state.count}</div>
            </div>
        );
    }
}
export default App;

```

```react
/* App.js  =>  Headers.js */
import React from "react"; // imr
import PropTypes from 'prop-types' // impt 用来限制props数据类型

class Headers extends React.Component {
    constructor(props) {
        // props 接收父组件传入的所有数据
        super(props);
        this.state = {};

        console.log(this.props); // 可以直接使用
    }

    changeData() {
        this.props.childExec(3)
    }

    render() {
        return (
            <div>
                <div>父传子 =》 {this.props.title}</div>
                <div>子传父 =》 <button onClick={e => this.changeData()}>+3</button></div>
                <div className="slot">
                    <span className="left">子元素的使用 =》 left</span>
                        {this.props.children[0]} {/* 弊端就是需要多个子元素的话，所有都在列表，位置无法固定 */}
                        {this.props.slotele}
                        {this.props.sloteleArea('作用域插槽，内容自定')}
                    <span className="right">right</span>
                </div>
            </div>
        );
    }
}

// 如果需要限制类型的话，也可以用ts
Headers.propTypes = {
    title: PropTypes.string.isRequired, // 字符串类型，并且必传
    infos: PropTypes.object,
    list: PropTypes.array,
    slotele: PropTypes.element
};

// 设置默认值 
Headers.defaultProps = {
    list: [],
    infos: {},
    slotele:<div>默认</div>
}

export default Headers;


```

##### 非父子隔层通信

>   官方提供的 Context ，数据共享，后期可以用redux代替

```react
/* App.js  =>  HeadersChild.js */
```

>   EventBus 事件总线，可以监听触发事件传值

#### setState 详细使用

```react
/* 1、基本用法 */
this.setState({
	message: "hello word"
})

/* 2、回调函数 */
this.setState((state,props)=>{
    // 可以先处理 state,props
    return {
        message: "hello word"
    }
})

/** 
 * 3、setState 在 react 事件处理中默认是异步调用 
 *    - 异步可以提升性能，获取同一阶段 多个setState改变，批量更新
 *    - 如果是同步的，setState 后，render 还没有执行，state和要给子组件的props不能保存同步
 *    - 
 *    - 第二个参数回调中可以拿到最终结果
 */

this.setState({
	message: "hello word"
},()=>{
     console.log("++++++:", this.state.message) // 拿到更新后的数据
})

/* 4、react 18 之前的同步做法，不是React事件的回调就能同步，之后全部setState做法都是异步的 */
 setTimeout(() => {
     // 在react18之前, setTimeout中setState操作, 是同步操作
     // 在react18之后, setTimeout中setState异步操作(批处理)
     this.setState({ message: "hello word 111" })
     console.log(this.state.message)
 }, 0);

/* 5、偏要实现同步效果，使用官方的 flushSync*/
import { flushSync } from 'react-dom'
flushSync(() => {
    this.setState({ message: "你好啊, 李银河" })
})
console.log(this.state.message) // 设置后先执行render，再执行这里
```

>   数据不可变

应用 类型数据不要去直接修改，如果有变化，解构出来，改好直接，全部替换过去，否则 **PuerComponent** 类组件里不会生效

#### 优化

##### 更新机制

![](../../../static/img/2022-12-19_075525.jpg)

-   通过唯一的、不变的key对比新旧DOM树，尽量复用
-   dom树中不会跨层比较

##### render 函数被调用

-   父组件 **setState** 被调用，即使**数据没变**， **render函数**会被**重新执行**，**所有子组件**都会重新渲染

```react
/* 原理通过生命周期 shouldComponentUpdate(nexeProps,newState) SCU拦截优化*/
shouldComponentUpdate(newProps,newState){
    if(this.state.message != newState.message){
        return true
    }
    return false
}

/* 子组件 拦截*/
shouldComponentUpdate(newProps,newState){
    if(this.props.message != newProps.message){
        return true
    }
    return false
}

/* 上面太繁琐，react提供的解决方案 */

/* 类组件 Component 换成 PuerComponent 帮做我们浅层比较上面的朝操作*/
import React from 'react'
import Headers from "./components/Headers"
class App extends React.PuerComponent {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div></div>
        );
    }
}
export default App;

/* 函数组件 通过memo处理上面的问题*/
const PropFile = memo(function(props){
    return <h2>{prop.message}</h2>   
})
```

##### react 获取 dom

>   ref

```react
import React, { createRef, forwardRef } from 'react'
import Headers from "./components/Headers"

// 通过 forwardRef 定义一个函数组件
const Headers2 = forwardRef(function(props,ref){
    retrun (
        <h1 ref={ref}>Headers2 h1</h1>
    )
})

class App extends React.PuerComponent {
    constructor() {
        super();
        this.state = {}
        
        this.titleRef = createRef();
        this.titleEl = null;
        this.headRef = createRef();
        this.headRef2 = createRef();
    }
    
    getNatDom(){
        // 1、直接获取
        console.log(this.refs.lzo);
        
        // 2、提前创建好ref对象，绑定到元素上
        console.log(this.titleRef.current)
        
        // 3、通过回调得到元素 赋值给 this.titleEl
        console.log(this.titleEl)
        
        // 4、类组件：通过 ref 获取，函数组件没有实例所有无法获取
        console.log(this.headRef.current) 
        
        // 5、函数组件，需要forwardRef,拿到 里面的某个节点，如 h1
        console.log(this.headRef2.current) // 得到 <h1>Headers2 h1</h1>

    }

    render() {
        return (
            <div ref='lzo'>1</div>
            <div ref={this.titleRef}>2</div>
            <div ref={el => this.titleEl = el}>3</div>
            <Headers ref={this.headRef}/>
            <Headers2 ref={this.headRef2}/>
            <button onClick={e => this.getNatDom()}></button>
        );
    }
}
export default App;
```

##### 受控组件与非受控组件

>   react 没有双向搬到，当表单元素绑定 value属性后就变成了 **受控组件**
>
>   受控组件是**无法输入**的，只能通过 **onChange** 事件来操作，通过事件对象拿到最新value，赋值到到state上

```react
import React, { Component } from 'react'

export class BrotherOne extends Component {
    constructor() {
        super()
        this.state = {
            name: "default"
        }
    }

    changeInput(e) {
        console.log(e.target.value)
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
            <input value={this.state.name} onChange={e => this.changeInput(e)} />
        )
    }
}

export default BrotherOne
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
```









