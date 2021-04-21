---
id: script-es6
title: ECMAScript 2015 新增属性
---

## 变量、复制
### let/const
- let有if和for的块级作用域

- 作用域:变量在什么范围内是可用的
    - 块级作用域:{}、if(){}、for(){}...
    - es5以前var `if和for`都没有块级作用域，很多东西都需要`借助function`的作用域来解决问题
    - var for循环的异常
        - 就是因为var没有块级作用域， 变量i一直被改变，不会保存在作用域中,事件操作用的时候i就是最后一次的值了
        - `闭包`(function(i){})(i)可以解决问题是因为`函数是有作用域的`,传入的时候就形参赋值了
## 函数

## 数组/json

## 字符串

## 面向对象

## Promise

## generator

## 模块
