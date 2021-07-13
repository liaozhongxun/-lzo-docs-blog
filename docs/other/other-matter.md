---
title: 偏门问题
---

### 常见的兼容性问题

### 项目的难点

    - web调用摄像头，web播放rtsp视频流问题

### 终端图标字体无法显示问题

-   [方案 1](https://www.nerdfonts.com/)
    -   [下载](https://www.nerdfonts.com/font-downloads)
    -   下载喜欢的字体然后右键选择`为所有用户安装`后更改 PowerShell 窗口的字体即可

### js 浮点数计算偏差问题

> 两位小数: 同时乘以 100 变成整数,结果再根据运算符相对的减少倍数
> 四位小数: 同时乘以 10000 变成整数......

### 语法糖

> 指计算机语言中添加的某种语法，这种语法对语言的功能并没有影响，但是更方便程序员使用。通常来说使用语法糖能够增加程序的可读性(如 ts，scss)

### github.io 无法访问的问题

修改 dns 为 114.114.114.114

### 将网页创建桌面快捷方式

> chrome://apps/ -> 拖动收藏的网址到页面中 -> 图标上右键创建快捷方式

### 移动端 click 延迟处理

> 移动端 200-300ms 延迟可以使用 `fastclick`插件或将 click 事件替换`tab事件`来解决  
>  tap 事件不是原生的，zepto、微信小程序等都有封装

### STAR 法则

-   S: situation(项目背景)
-   T: task(任务目标)
-   A: action(采取的行动)
-   R: result(产生的结果)

### vue 快捷到了代码段

> vscode -> 首选项 -> 用户片段 -> 搜索 vue

设置

```json
{
    "Print to console": {
        "prefix": "temp",
        "body": [
            "<template>",
            "<div class='warp'></div>",
            "</template>",
            "<script>",
            "import * as API from '@/api';",
            "export default {",
            "data(){return {}},create(){},methods:{getData() {let that = this;API.AxiosPOST('', {}).then((res) => {});},},mounted(){this.getData()}",
            "}",
            "</script>",
            "<style lang='scss' scoped>",
            "</style>"
        ],
        "description": "Log output to console"
    }
}
```

新文件中直接输入 demo,回车

### hook

-   在不使用 class 的情况下，管理里面的状态数据，并且把里面逻辑思维的东西抽取出来，封装在一个可复用的功能函数中
-   类似 vue2.x 中的 mixin 混入(有时很多个组件都有相同的方法或 created(){}做相同事情时，定义一个 mixin，后期合并到需要的组件中中)

### 未完成计划

-   大屏项目 mockjs
-   web 加密、安全、摄像头视频流
-   http://www.cssmoban.com/cssthemes/6197.shtml
-   https://sc.chinaz.com/tag_moban/CSS3.html
-   SuperScrollorama

-   使用低版本浏览器通过 vlc 插件播放
    -   http://www.360doc.com/content/17/1103/19/43486_700641264.shtml
    -   https://wiki.videolan.org/Documentation:WebPlugin/
    -   chrome://flags/#enable-npap
    -   chrome://plugins 开启 vlc
-   服务端(ffmpeg)将 rtsp 流转 rtmp 或 emu8 等格式，web 可以播放
-   样式通过 @import ""转移到 App.vue 中

lzx/lzx_123

阿里云：223.5.5.5

DNSPod Public DNS：119.29.29.29

Google Public DNS：8.8.8.8/8.8.4.4

百度:180.76.76.76
