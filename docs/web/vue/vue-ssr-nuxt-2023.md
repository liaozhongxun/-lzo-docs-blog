---
title: nuxt
---

## 概念
-   单页面应用程序（SPA）在客户端呈现（术语称：CRS）
    -   **渲染原理：**先拿到空白页，**下载引入的 js 文件**，**通过 js 在客户端动态渲染数据**（包括**逻辑**、**UI**、以及**服务器通信相关数据**）
    -   **优点：**第一层请求时加载页面，页面切换不需要重新加载，仅更新变化的数据，体验更加流畅
    -   **缺点：**不利于**SEO优化**，大项目**首次首屏渲染缓慢**
    -   `React`、`Vue`、`AngularJs` 等库可以实现
-   搜索引擎优化 （SEO） 
    -   Google 爬虫的工作流程
        -   主要有抓取地址以及相关地址 ，索引编制 ，用户搜索呈现结果三个阶段
        -    蜘蛛/爬虫**抓取网页** ==> 储存临时数据库，找到外链**循环抓取储存** ==> **符合规则可以抓取进行爬取**，不符合清理  ==>  爬取符合网址内容，各种**数据存入索引区** （TDK、Alt属性、图片、视频等）==> **搜索引擎**将用户搜索数据进行分类、归档、排序、反馈
        -   交钱的排序会被提升，其他的按照符合要求程度自动排序 
    -   优化手段
        -   多用语义化的HTML标签，
            -   如 `H1~H6` 
            -   一个页面**H1只能有一个**，否则增加蜘蛛爬虫对网站的困扰，没有优化的意义了，**不要过度**使用H标签
            -   制作喜欢的标签: title、a、h、p、title属性、alt属性、mate 描述和关键字等
        -   每个页面需要一个标题（页面不需要可以隐藏） + 内部连接
        -   设置 tdk
        -   图片加 alt
        -   robots.txt 文件：规定爬虫可以访问网站上哪些网站，允许哪些搜索引擎抓取
        -   sitemap.xml 站点地图：列出网站管理所以网站，防止爬虫遗漏，可在线生成
-   静态站点生成 (SSG  预渲染)，预先生成好静态网站
    -   优点：速度快，页面在构建时提前生成好，直接给浏览器返回静态HTML，且日保留SPA的应用特性
    -   缺点：
-   服务器渲染 (SSR 同构应用) 全称：**Server Side Render** 
    -   应用是在服务端渲染，用户请求的每个页面都会限制服务端渲染成字符串，再返回给浏览器静态先显示 
    -   ![第一步 生成静态页面](../../../static\img\2023-03-02_001857.jpg)
    -   **Hydration** 水和 激活应用程序
    -   ![](../../..\static\img\2023-03-02_002745.jpg)
    -   优点：更快的首屏渲染速度，立即返回静态内容，爬虫可以抓取，不需要等加载完整个应用程序
        -   在 Hydration 后依然保留应用程序交互
    -   缺点：服务器消耗大，要求高，成本高，客户端渲染用的是**每个客户自己**的电脑渲染
        -   开发者需要注意呢些代码是运行在服务端，哪些是运行在浏览器，增加开发成本
    -   解决方案
        -   方案一：php，jsp
        -   方案二：学习 通过 Node+webpack+vue/react 搭建
        -   推荐方案：Vue Nuxt、React Next.js
    -   使用场景：
        -     门户网站、零售网站、、

​			

## 手动实现方案

[配套项目](https://github.com/liaozhongxun/lzo-vue3-ssr)

>   服务端搭建

```shell
# 安装node环境，进入项目目录
npm init -y
npm install express -S
npm install nodemon -D
npm install webpack webpack-cli webpack-node-externals -D

# 通过express创建node服务并启动
# webpack配置，服务端打包生成 server_bundle.js 
webpack --config ./config/webpack.config.js --watch #监听者，入口文件一发生变化，重新打包server_bundle.js

# 通过 nodemon 执行 server_bundle.js 
nodemon ./build/server/server_bundle.js # 当 webpack入口文件方式变化，这里执行的 server_bundle.js 跟着变化


```

>    加入 vue3 配置代码，将vue项目生成静态文件展示给用户

```shell
# 服务端配置的基础上加速vue的配置
npm install vue 
npm install vue-loader babel-loader @babel/preset-env -D

# 通过 createSSRApp 创建app实例 导出，进入server入口文件中导入使用
# 再使用 @vue/server-rendere 中将 vue 渲染成字符串的函数 renderToString
# 替换测试用的 hello word 字符串
# 去webpack配置文件中加入loader规则，再同时运行build:server 和 start指令
```

> 客户端 Hydration 水合激活静态页面的交互

``` shell
# 客户端需要重新将 App 组件 通过 createApp 创建app实例，
# 通过配置客户端webpack配置文件，通过webpack打包成 client_bundle.js ( 同构应用，客户端和服务器同时构建 )
# renderToString 渲染字符串那 html文件中直接引入 client_bundle.js

# 将buuild 设置位静态文件夹
```

>   正常开发vue项目

```shell
# 安装 vue-roouter pinia，src下正常设置router，view等 生成多页面项目
```



