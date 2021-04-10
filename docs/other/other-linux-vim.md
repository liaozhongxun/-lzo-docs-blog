---
title: Vim
---

# 基础操作

- 模式
  - V|v 视觉选择模式
- 移动
  - 右下上左 -> `H、J、K、L`(vim-adventures.com)
  - 页尾、首行、行尾、行头 -> `G、gg、$、^|0`
  - 单词跳跃、段落跳跃 -> `w|W、{}`
  - 跳跃一点点 -> `gj、gk `
  - `f|F + 字母` -> 从光标处跳到下一个或上一个该字母的位置
  - 定位到页面上中下 -> `zz zt zb`
  - 数字 + gg -> 跳到数字行
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
- 删除
  - d
  - c:删除并进入插入模式
  - C:删除当前位置到结尾并进入插入模式
  - x:直接删除游标所在字符
  - r:替换
- 撤销、反撤销
  - `u、ctrl+r`
- 缩进
  - `>>`
  - '3>>'
  - 选择代码 + =号:自动缩进
  - 设置缩进长度 :set shiftwidth=n
    p9 https://www.bilibili.com/video/BV1KK411w7wi?p=9&spm_id_from=pageDriver
