---
title: webpack·
---

## 环境搭建

### 环境安装

```
mkdir coder-webpack
cd coder-webpack
npm init
npm install webpack webpack-cli -D
```

### 配置文件

```javascript
/**
 *
 *
 *
 *
 */

/**
 * 默认：webpack.config.js
 * 指定：--config dev.config.js
 * webpack基于node运行，配置文件使用的是CommonJS语法，入口js文件是用的浏览器的，使用的是 import 方式es6语法
 * 
 * 打包: npx webpack(node_modules/.bin) => 找到配置文件 => 从入口文件开始对项目进行打包 
 */
```

#### 配置文件属性

```javascript
/**
 * mode：模式('none'|'development'|'production 默认')
 *       影响 process.env.NODE_ENV 的值,不同模式会添加一些默认配置
 *
 * entry：入口文件配置
 * output：出口文件配置
 * devtool: 生产 "source-map"，开发默认 "eval"
 *         1、设置devtool值 2、将打包后的.map文件一起发布 
 *         3、控制台/设置/Preference/sources/Enable JavaScript(CSS) source maps 勾选
 *         source-map 压缩处理后代码映射回原始文件,影响打包性能 
 *		   解决经过丑化、压缩、编译后代码结构不一样，无法定位保存准确位置的问题
 *
 */
```



