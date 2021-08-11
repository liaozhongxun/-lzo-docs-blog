---
id: script-js
title: JavaScript 基础
---

### 开启 JavaScript

#### 认识 JavaScript

> -   JS 的作用是给浏览器*指令*，负责和浏览器进行*沟通*
> -   JS 是一门编程语言，与计算机交流的计算机语言
> -   JS 和 C、java、Python 等一样是高级语言

#### 编程语言的历史

-   阶段一:`机器语言`，由二进制 0101010 组成
-   阶段二:`汇编语言`，用符号来代替，010101 难以记忆的代码
-   阶段三:`高级语言`，接近自然语言，符合我们的思维方式,*JavaScript*算是一个

#### JavaScript 的历史

-   1995 浏览器两大厂商`网景公司`与`微软`
-   网景
    -   网景招募`Brendan Eich`,为了`前端表达验证`，10 写出了最开始的`LiveScript`(js)
    -   java 出来后很火爆，就把`LiveScript`改名`JavaScript`
-   微软
    -   微软开始用的是`JScript`
    -   所以为了适配需要两份代码
-   时间轴
    -   1996.11，网景公司向`ECMA（欧洲计算机制造商协会）`提交申请语言标准
    -   1997.06，ECMA 以 JavaScript 为基础指定了 ECMAScript 标准规范`ECMA-262`
        -   JavaScript 成为了 ECMAScript 标准规范最著名的实现语言之一
        -   然后 ActionScript 和 JScript 也是 ECMAScript 标准的实现语言

#### JavaScript 与 ECMAScript 标准的关系

-   ECMAScript 是 JavaScript 的标准，描述了该语言的`语法`与`基本对象`
-   JavaScript 是 ECMAScript 的实现之一，除了基本实现之外，JavaScript 还多了自己的`DOM，BOM`的操作

#### JavaScript 的特点

-   按照运行方式不同，
    -   `编译性语言`:C 语言/C++ --预编译-编译-汇编--> 等步骤`一次性`将代码转为(linux 或 window..的)二进制 --> 执行
    -   `解释性语言`:JS/Python --> 一行行读取，一行行执行(JS 浏览器执行)
    -   `先编译再解释`:java 编译成 .class
-   动静类型语言
    -   `动态类型`：在代码执行之前，可以确定一个变量准确类型，并且之后不予许修改
    -   `静态类型`：不确定一个变量的准确类型，可以动态改变变量类型，灵活，但是不安全(JS 就是这种)
-   js 的主要应用场景
    -   网页交互
    -   服务端开放(NodeJs)
    -   命令行工具(NodeJs)
    -   桌面应用程序(VsCode 用 TypeScript 开法，GitHub 可以验证)
    -   APP(React Native,uni 等)
    -   游戏开发(cocos2d-js)
    -   小程序开发

#### JavaScript 编写位置

-   在 HTML 中直接执行

```html
<div onclick="alert('html执行js')"></div>
<a href="javascript:alsert('html执行js')"></a>
```

-   通过 script 标签执行
-   通过 script src 属性外部引入 JS 文件
    -   标签间不能写代码，并且要有双标签
    -   由于文档是从上到下执行的，所以建议把标签放在主体内容后面
    -   早期需要`type="text/javascriopt"`这种,由于限制所以主流浏览器以及 html5 的默认脚本语言就是 JS,所以写 JS 代码的话不用写了
    -   html 和 css 不区分大小写，js`严格区分`

#### 注释

```javascript
1.js
// xxxxxx
/* xxxxxx */

文档注释格式
/**
 *  xxxxx
 *  xxxxx
 */


2.html
// <!---->

3.css
/**/


```

#### 有浏览器交互

-   cosole.log()
-   alert()
-   document.write()
-   prompt("请输入数据")

#### 如何定义变量

-   var 变量标识符 = 值;
-   var a,b,c;
-   let、const、var

-   标识符
    -   数字、字母、_ 、$ (数字不能开头)
    -   不能是关键字和保留字(保留字很多是其他语言拥有，js暂未实现的标识符)
-   命名规范以及主要事项
    -   小驼峰(多个单词，除第一个，后面的首字母大写)
    -   驼峰(多个单词首字母大写)
    -   见名知意
    -   复制等号两边建议加空格(shell强制不能加空格)

-   交换两个值为数字的变量，不用第三个变量,可以用`加减`的方式实现

#### 数据类型
-   基础类型:Number、String、Boolean、Null、Undefined
    -   数字:Number
        -   Number.MAX_VALUE 最大数值
        -   Number.MIN_VALUE 最小数值
        -   NaN:not a number，错误的数值运算返回
        -   isNaN:判断是否不是一个数值
    -   字符串:String
-   方法
    -   typeof age // number
    -   typeof str // string

-   js的二、八、十进制前缀
    - 0b、0o、0x

#### 数据类型转换
