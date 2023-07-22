---
title: 工具
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

### CMUS
> 终端音乐播放

-   `cmus`:进入播放界面
    -   `:add dir`:打开音乐文件夹
    -   `:clear`:清除记录
    -   `J、k、空格、回车、tab`:基本移动
    -   `c`:播放/暂停
    -   `v`:停止
    -   `s|f|r`:随机播放、顺序、循环
    -   `z|b`:上下一首
    -   `x`:重新播放
    -   `-/=`:音量-/+
    -   `e`:添加到播放列队
    -   `shift+d`:从列表删除
    -   `h|l`:快进退
    -   `1、2、3、4、5、6、7`
        -   `1.Library view`：默认播放列表
        -   `2.Sorted library view`:所有歌曲列表
        -   `3.Playlist view`:类似歌单
        -   `4.Play Queue`：播放列队
        -   7：帮助
    
-   配置
    -   rm ~/.config/cmus/cache:清除缓存
    -   `歌词插件`：直接运行cmus-lyric
