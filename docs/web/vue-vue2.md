---
title: Vue基础
---
## 基础
### 相关信息
- `编程范式`: 申明式编程(以前jQuery那种命令式编程)

### 语法
- `v-for`
### 概念
- `MVVM`:Model View ViewModel
    - `View`:挂载的dom下的页面
        - 视图层、DOM层，给用户展示各种信息
    - `Model`:js数据
        - 数据层，固定数据、借口数据等
    - `ViewModel`：`new Vue()`
        - 试图模型层，`View`与`Model`沟通的桥梁
        - 数据绑定到页面上，数据改变`通过VM的处理`实时显示到`页面View`上
        - `监听View的事件`，触发事件时去调用Model的方法



        
[地址](https://www.bilibili.com/video/BV15741177Eh?p=2&spm_id_from=pageDriver)