---
title: babel
---

## 安装

> 本质上就是一个编译器，将一种源代码转换成另外一种代码

```shell
# 手动转换
npm install @babel/core @babel/cli -D
npm install @babel/plugin-transform-block-scoping -D # 块级作用域转换
npm install @babel/plugin-transform-array-functions -D # 箭头函数

# 没指定插件是不会转化的 
npx babel ./src --out-dir ./dist --publics=@babel/plugin-transform-block-scoping,@babel/plugin-transform-array-functions # 将src下所有转换到dist
```

```shell
# babel 预设 （手动太麻烦）
npm install @babel/core @babel/cli -D
npm install @babel/preset-env -D
npx babel ./src --out-dir ./dist --publics=@babel/preset-env # 按需自己加载block或array-functions

# 其他预设
env、react、ts
```

### 使用思想

​        `babel`是可以单独使用的，`webpack`就是结合这些可以单独使用的功能形成一个工程，遇到 js 文件，就在 `module loader` 中对 js 文件进行`babel`编译转化

### webpack 中的 babel 配置

```javascript
npm install @babel/core @babel/cli -D
npm install @babel/preset-env -D
npm install babel-loader -D

module:{
    rules:[
        { // 1、直接使用
            test:/\.js$/,
            use:{
            	loader:"babel-loader",
                options:{
                    presets:[
                        "@babel/preset-env"
                    ]
                }
        	}
        }
        { // 2、指定目标浏览器
            test:/\.js$/,
            use:{
            	loader:"babel-loader",
                options:{
                    presets:[
                        ["@babel/preset-env",{
        					targets:
        				}]
                    ]
                }
        	}
        }
    ]
}
```

### 浏览器兼容（browserslist）

> 通过 `.browserslistrc` 的配置，决定编译出的代码会兼容哪些浏览器

