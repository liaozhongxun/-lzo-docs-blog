---
title:工具
---

### music-dl

-   音乐下载工具[github](https://github.com/0xHJK/music-dl)
-   下载 pip,使用 pip3 下载安装
-   使用
    -   `music-dl -k "xxx"`:通过关键字搜索
    -   `-s, --source TEXT`:指定平台 source: qq netease kugou baidu
    -   `-o, --outdir TEXT`:指定下载位置(默认单曲位置)
    -   `--lyrics`:同时下载歌词
    -   `--cover`:同时下载封面

### 视频 youtube、哔哩哔哩视频下载

youtube-dl

```python
pip install youtube-dl
```

you-get  
 [github](https://github.com/soimort/you-get)

```python
pip install you-get

# cmd
you-get url

# 分析url信息,选择下载方式
you-get -i url

# 路径-o设置路径 -O设置保存名字
you-get -o 路径 -O 名字 url
```

### w3m

#### w3m 浏览网页
-   输入框[________]
    - 关闭定义到输入框 -> 回车 ->内容

-   快捷键
    -   H 显示帮助
    -   q 退出，会有提示的
    -   B 后退
    -   U 输入新的网址
    -   T 打开一个新标签页
    -   Ctrl+q 关闭当前标签页
    -   Esc-t 打开所有标签页，供你选择，使用 jk 来上下移动
    -   { } 在标签页中切换
    -   j,k,l,h 移动光标，就像 vim 中一样

    -   J/K 向下/向上滚屏
    -   < > 左右滚屏
    -   / 向后查找当前页
    -   ? 向前查找当前页
