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