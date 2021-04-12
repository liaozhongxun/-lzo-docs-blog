---
title: Vim
---

## 基础操作

- 模式
  - V|v 视觉选择模式
  - 多行编辑
    - `ctrl+v`
    - `选择要操作行`的第一格
    - 停留在`最后一行`，输入`大写I` 进入`插入模式`并更改
    - `esc`
  - i （inner）字符 
    - `viw`:精准选择光标所在的字符
    - `vi"`:精准选择光标所在的双引号内的字符
    - 拓展:`vi(`、`vi[`、`vit`....:`t代表标题`
    - 拓展:`di(`、`di"`、`dit`....:删除范围内的字符
    - `v}`:选择段落（可以与移动的符号联合起来用）
  - a字符
  - 编辑模式下 Ctrl+w删除一个单词
    与i一样，但是操作的对象包括符号
    https://www.bilibili.com/video/BV1pE411y7nj?p=10&spm_id_from=pageDriver 10 结束
- 移动
  - 右下上左 -> `H、J、K、L`(vim-adventures.com)
  - 页尾、首行、行尾、行头 -> `G、gg、$、^|0`
  - 单词跳跃、段落跳跃 -> `w|W、{}`
  - 跳跃一点点 -> `gj、gk `
  - `f|F + 字母` -> 从光标处跳到下一个或上一个该字母的位置
  - 定位到页面上中下 -> `zz zt zb`
  - 数字 + gg -> 跳到数字行
  - `ctrl+b|f`:上下反野
  - `{}`:段落跳跃
- 折行
  - `zf`:zb、l等展开
  - `zfip`:折叠段落

- 搜索
  - 搜索 / -> `N|n` 上下搜索 (`:set hlsearch` 匹配高亮)
  - 直接搜索 -> `*` 搜索游标所在的词
- 复制、粘贴
  - `y`
    - 暂存器 a 到 z 随意使用
    - `"ay`: 将内容复制到暂存器 a 中
    - `"ap`: 粘贴暂存器 a 的内容
    - `:reg`:查看暂存器内容
    - `:set clipboard=unnamed`:与系统共享剪切板 plug
  - `p`:p 向后粘贴、P 向前粘贴
- 删除bilibili
  - d
  - c:删除并进入插入模式
  - C:删除当前位置到结尾并进入插入模式
  - x:直接删除游标所在字符
- 替换
  - r:替换
  - ~:大小写转换

- 撤销、反撤销
  - `u、ctrl+r`
- 缩进
  - `>>`
  - '3>>'
  - 选择代码 + =号:自动缩进
  - 设置缩进长度 :set shiftwidth=n
- 直接打开新文件
  - `:e filepath`
  - `:tabe xxx,:e filepath`:新建tab页再打开文件
  - `gt|gT`:切换tab页
  - `vim -p files`:通过tab页方式打开多个文件
- 水平垂直分屏`:new|vnew`
  `ctrl+w ,w`:切换窗格
  `ctrl+w ,j`:向下切换
  `ctrl+w ,k`:向上切换
  `ctrl+w ,h`:向左切换
  `ctrl+w ,l`:向右切换
- 其他
  - 重复上一次操作
    - 小数点 .
  - 合并行:或合并选择的行
    - "J"
  - 编辑模式下 Ctrl+w删除一个单词
  - 编辑模式下 Ctrl+u删除到行头
  - `:! ls xxx`:暂时离开做一件事情
  - `:r !ls xxx`:将查到的东西粘贴到文件中
  - `vimtutor zh_zw`:练习
  - `:h xxx`:帮助
## 词法
### 介绍
- 名词  
  - `w:word` 单词
  - `s:sentence` 句子
  - `p:paragraph` 段落
  - `t:tag` 标签
  - `'`、`"`、`()`、`{}`、`[]`
- 动词  
  - `y:yank`:复制
  - `p:paste`:粘贴
  - `d:delete`:删除
  - `c:change`:修改

  - `v`:选择
- 范围 
  - `i`:在什么什么之内
  - `a`
- 量词 
  - 数字
  
### 组合
- vis:选择一句话
- vi":选择单引号内
- v3w
- d3w
- 3dd
- ....




## 配置文件 and 插件管理
### 第三方配置
- amix/vimrc
```shell
git clone --depth=1 https://github.com/amix/vimrc.git ~/.vim_runtime
sh ~/.vim_runtime/install_awesome_vimrc.sh
# 直接生成.vimrc 
```
### 插件管理
-  插件管理器`vimplus`
    - `~/.vimrc为vimplus`的默认配置，一般不做修改
    - `~/.vimrc.custom.plugins`为用户自定义插件列表，用户增加、卸载插件请修改该文件
    - `~/.vimrc.custom.config`为用户自定义配置文件，一般性配置请放入该文件，可覆盖~/.vimrc里的配置
  - 插件存放在 `~/.vim/plugged`下
  - 新插件可以直接复制进去或vim中执行`:plugInstall`进行安装
  - [github](https://github.com/chxuan/vimplus)
### 配置文件
