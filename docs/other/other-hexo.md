---
title: hexo
---

## hexo项目初始化

```shell
npm install hexo-cli -g
hexo init blog
cd blog
npm install
hexo server # 本地调试
```

## 操作

```shell
# 新建文字
hexo new '文章名'

# 重新渲染
hexo clean
hexo g
hexo s
```

## 将项目存到github

```shell
# ./blog
git init/add ./commit -m 'msg'
git remote add origin git@github.com:liaozhonxun/lzo-hexo-blog.git
git push origin master 
```



## 一键部署

1、安装 [hexo-deployer-git]()

```shell
npm install hexo-deployer-git --save
```

2、**修改 _config.yml**

```shell
# 创建 <username>.githib.io 的项目
# 配置 所在计算机 与 github 服务器的 ssh

deploy:
  type: git
  repository: git@github.com:用户名/用户名.github.io.git
  branch: master
```

3、执行 `hexo clean && hexo deploy` 。

4、浏览 `<GitHub 用户名>.github.io` 检查你的网站能否运作。

## hexo 主题

> 在 `themes` 文件夹内，新增一个任意名称的文件夹，并修改 `_config.yml` 内的 `theme` 设定，即可切换主题

###  hexo-theme-butterfly

```shell
# 下载
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
npm install hexo-renderer-pug hexo-renderer-stylus --save # 解决 butterfly 渲染报错问题

# root __config.yml 更改主题
theme:butterfly

# 重新渲染
hexo clean && hexo g && hexo s
```
### hexo-theme-next
```shell
# 下载
git clone https://github.com/iissnan/hexo-theme-next themes/next
npm i hexo-renderer-swig -S # 解决 next 渲染报错问题

# root __config.yml 更改主题
theme:next

# 重新渲染
hexo clean && hexo g && hexo s
```



## hexo 插件

1、hexo-helper-live2d(添加人物动画)

```shell
npm install hexo-helper-live2d --save
npm install live2d-widget-model-haruto --save # 安装小人对象

# 配置
live2d:
  enable: true
  scriptFrom: local
  pluginRootPath: live2dw/
  pluginJsPath: lib/
  pluginModelPath: assets/
  tagMode: false
  log: false
  model:
    use: live2d-widget-model-haruto
  display:
    position: right
    width: 100
    height: 200
  mobile:
    show: true
```

2、本地搜索

```shell
# 安装插件
npm install hexo-generator-search -S

# 主配置文件添加
search:                                                                                                  
  path: search.xml                                                                                             field: all                                                                                                   content: true
  
# 主题配置文件 全改为true
local_search:
```

