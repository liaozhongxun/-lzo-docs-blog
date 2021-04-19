---
title: vue-cli与脚手架
---
## vue-cli 
[官网](https://cli.vuejs.org/zh/guide/)

安装
```
npm i -g @vue/cli
npm i -g @vue/cli@3.x

yarn global add @vue/cli
```
> 安装成功后能在命令行使用vue相关指令，如果使用vue3那么cli版本需要在4.3.1以上

删除
```
npm uninstall -g @vue/cli
yarn global remove @vue/cli
```
> @vue/cli是居于node的,如果删除不成功可以去node文件夹下直接删除vue相关文件

图形化管理界面
[官网](https://cli.vuejs.org/zh/guide/)
```
vue ui
```

## 创建vue项目
[相关网址](https://www.cnblogs.com/joe235/archive/2004/01/13/12448744.html)

### 3.x
```shell
npm i -g @vue/cli
# 保证vuecli版本在4.5.0以上 以前3.12.1

vue create <project-name>
npm run serve
```

### 使用vite创建
+ vite 是原生ESM驱动的web构建工具,开发环境下基于浏览器原生ES imports开发
+ 本地快速启动,基于rollup打包，不是webpack

``` shell
npm init vite-app <project-name>
cd <project-name>
npm i
npm run dev
```

### 2.x
```shell
npm i -g @vue/cli
npm install @vue/cli-init -g # 安装2模板
vue init webpack <project-name>
npm run dev
# 1-3:项目名称、描述、作者
# vue build:选择运行时，第一个通用，第二个轻小
# 是否安装路由、是否ES-lint(代码规范限制)、unit单元测试(用的少)
# e2e端到端测试 (专业测试人员使用)
```
- 路径
    - `build`:
