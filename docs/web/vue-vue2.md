---
title: Vue基础
---

## 基础

### 相关信息

-   `编程范式`: 申明式编程(以前 jQuery 那种命令式编程)

### 实例 option

-   `el`:挂载 vue 将要管理的 HTML 模板
-   `data`:Object|Function
    -   组件 data`必须`是函数,用 return 对象里的数据
        -   组件需要被`多次调用`，使用函数返回可以`保证每个组件`的`数据是独立的`，不会相互音响
        -   如果就想要公用 把对象定义到外面，统一返回这个对象
    -   组件无法访问到 vue 实例 data 的数据
-   `methods`:方法列表(不与实例挂钩单独的叫函数)
-   `computed`:计算属性,只要 return 任意属性变化，都会更新 a
    -   `缓存`:页面上无论用几次，里面计算过程不会重复调用，属性发生变化才会调用
-   `filters`:过滤器对象
-   `components:{my-title:myTitle}`:`局部组件`注册，只能在当前实例上用

```javascript
computed:{
    // 因为计算属性一般不需要set属性的,只要获取就可以了
    a:{
        get:function(){
            return this.b + this.c
        }
    }
    // 简写
    a:function(){
        xxxxxx
        xxxxxx
        return this.b + this.c
    }
}
```

### 语法

-   `Mustache语法`: {{}}
    -   变量
    -   简单 js 表达式
-   指令

    -   `v-once`:标签里的数据开始渲染一次，数据变化则不会更新
    -   `v-html`:展示 html
    -   `v-text`
    -   `v-pre`:直接显示内容
    -   `v-cloak`:
        -   加到`挂载的dom`上，vue 解析之后会`自动删除v-cloak`
        -   样式：[v-cloak]{display:none} 这样可以处理双大括号闪烁的问题

-   `v-bind:| 语法糖 :`:绑定属性
    -   类:`:class="{类名:bool}"` ,多个调用方法，返回这个对象
    -   样式
        -   `:style="{属性名:变量属性值}"`， 支持`font-size`或`fontSize`
-   `v-on:|@:`:绑定方法
    -   `$event`:把对应的形参当做时间对象
    -   修饰符 @click.stop
        -   `.stop`:阻止事件冒泡
        -   `.prevent`:阻止默认事件
        -   `.enter|.13`:回车
        -   `.once`:第一次事件生效
-   `v-if v-else-if v-else`
    -   复用问题：切换之后某些相似元素复用，给他们指定不同`key`就不会复用了
-   `v-show`
    -   对比 v-if
        -   显示隐藏/加载卸载
-   `v-for`

    -   数组数据:`item,index`
    -   对象数据:`value,key,index`
    -   key 属性:
        -   编辑器 -> 虚拟 DOM -> 浏览器- 响应式
    -   无法响应式的操作
        -   arr[0]=1
            -   `C被标识为E`，`D被标识为C`,在`最后增加一个`标识为 D
        -   有不同且固有的 key 时在 B 与 C 之间插入 E()
            -   直接在`B与C`之间`插入节点`，C 和 D 无需变化,大大提高性能
            -   直接用 index 没有意义，因为 index 是会变化的，我们要的是能`一一对应`的 key
        -   插入时通过 diff 算法对比，查看虚拟 dom 与浏览器 dom 的 key

-   `v-model`:表单元素双向绑定

    -   1、v-bind:绑定 value 属性，数据改变 value 改变
    -   2、v-on:绑定@input 事件，value 改变重新赋值数据
    -   案例
        -   多选框如果 v-model 设置同一个数组，勾选会自动添加
        -   select 添加 multiple 多选
    -   修饰符
        -   `.lazy`:数据变化回车更新
        -   `.number`:值转 number 类型
        -   `.trim`:去除作用空格

-   `v-slot:slotName`:绑定具名插槽

-   响应式
    -   无法响应式的操作
        -   arr[0]=1

## 组件化

### 组件注册与父子组件

```javascript
//html
<my-title></my-title>


//创建组件构造器
let myTitle = Vue.extend({
    template:`<div>title</div>`
    components:{ //子组件
       myChild:myChild
    }
})
let myChild = Vue.extend({ //子组件
    template:`<div>child</div>`
})


//注册全局组件（可以在多个vue实例下使用）
Vue.component('my-title',myTitle)

//在Vue实例范围内使用组件


```

### 组件通讯

-   `props` 配合 `$eimt events`

    -   `:propName='xxx'`: 组件标签绑定传递的数据,不用绑定的话传递的数据只是`字符串`
        -   有些版本不支持驼峰需要`:prop-name='xxx`处理
    -   `props`:子组件中接收

        -   数组 : props:['name1','name2'，'xxx']
        -   对象 :

        ```javascript
        props:{
            name1:Array,
            name4:[Array,String],//多种类型
            name2:{
                type:String,
                default:'123',
                required:true   //必传
            }，
            //高版本vue中Object或Array的default必须是函数
            name3:{
                type:Array,
                default(){
                    return []
                }
            },
            //自定义验证函数参数必须是1或2或3
            name5:{
                validator:function(value){
                    return [1,2,3].include(value)
                }
            }

        }
        ```

        -   注意
            -   vue 官方`不建议`在子组件`更改`父组件`传入的prop`属性值
            -   可以在 data 手动设置一个对应属性值 `mynumber:this.number`这样重新定义一下
            -   想同步到父级，在`@input`数据变化时`触发$emit`或`witch监听`数据变化时触发，通过自定义函数更改

    -   子传父
        -   组件标签 `@selfevent='self'`
        -   子组件 `this.$emit(selfevent,data)`
        -   父组件 `self(data){c.log(data)}` 获取数据

### 父子访问(直接相互访问)

-   父访问子
    -   `this.$children`:获取子组件列表，直接调用其方法
    -   `this.$refs`:给组件添加 ref 属性
-   子访问父
    -   `this.$parent`:不建议用
    -   `this.$root`:直接拿到顶层 vue 实例

### 插槽

-   默认
    -   `组件中`设置`slot标签对`,父组件调用时`标签间`的内容就会替换到`子组件slot`的位置
    -   子组件`slot标签`中可以直接设置`默认dom`,调用标签间有东西，就会覆盖掉
    -   默认只会替换子组件`没有名字的slot`
-   具名插槽
    -   子组件:slot 标签设置`name:slotnamexx`
    -   父组件:要替换的标签中设置`slot="slotnamexx"`
-   作用域插槽
    -   编译作用域:组件中只能用自己的 data 数据
    -   作用:父组件替换插槽的标签,但是内容由子组件来提供
    -   步骤:
        -   子组件`slot标签`自定义属性，储存`子组件的数据`，如:`:data='dataList'`
        -   父组件调用的`标签对之间` 插入 `<template slot-scope="slot">{{slot.data}}</template>`
        -   从而实现将子组件的数据拿到父组件的插槽中使用
        -   v2.6 以上高版本可以不需要 template 标签了

## 进阶

### 生命周期

> 事物`从诞生到消亡`的过程，当走到`某一步`的时候`调用`一个你传入的`钩子(hook)函数`，做你在这个时候想做的事情

```javascript
function Vue(option){
    1.xxx
    2.xxx
    3.创建好的时候
        option.created?option.created()
        源码:callHook(vm,"created")
    4.xxx
}

new Vue({
    el:"#app"
    // 创建
    beforeCreate(){},
    created(){
        //当走到第三步的时候就好自动执行这里的程序
        console.log("创建好了")
    },
    //挂载
    beforeMount(),
    mounted(),
    //更新
    beforeUpdate(),
    updated(),
    //销毁
    beforeDestroy(),
    destroyed(),

})
```

### 模块化
- 非模块化产生的问题
    - 多文件`全局变量命名冲突`
        - 利用函数作用域`;(function(){xxx})()`
        - 里面的`代码无法复用`
        - 升级自己的模块化
        ```javascript
        //fileA
        var modelA = (function(){
            let num = 1;
            return 1
        })()
        //fileB
        console.log(modelA.num) //1 
        ```
- 什么是模块化
    - 核心就是`导入`和`导出`
- 常见模块化规范
    - `CommonJS`:
        - 运用于:`node`

        ```javascript
        //导入
        let {obj1,obj2} = require("./xxxx")
        let objs = require("./xxxx")
        
        //导出
        module.exports = {
            obj:obj,
        }
        ```
    - `ES6的Modules`
        - `script标签` 添加 `type="modules"`，设置为模块化文件
        ```javascript
        //按需导入
        import {num,str,funName} from "./xxxx.js"
        //全部导入
        import * as All from "./xxxx.js" 


        //导出
        export let str = 'str';
        export function funName(){}; //导出函数
        export class Person{}; //导出类
        export {
            num,xxx
        }

        //-------default
        export default xxxx //default导出的只能有一个,可以让导入者自己命名
        import xxx from "./xxxx.js" //接收默认导出
        ```
        - 研究默认导出是否可以与普通导出共存？？？？？
    - `AMD`
    - `CMD`

### 概念

-   `MVVM`:Model View ViewModel
    -   `View`:挂载的 dom 下的页面
        -   视图层、DOM 层，给用户展示各种信息
    -   `Model`:js 数据
        -   数据层，固定数据、借口数据等
    -   `ViewModel`：`new Vue()`
        -   试图模型层，`View`与`Model`沟通的桥梁
        -   数据绑定到页面上，数据改变`通过VM的处理`实时显示到`页面View`上
        -   `监听View的事件`，触发事件时去调用 Model 的方法
-   `虚拟DOM（vdom）`

[地址](https://www.bilibili.com/video/BV15741177Eh?p=2&spm_id_from=pageDriver)
