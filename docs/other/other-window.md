---
title: window
---

## 快捷功能

-   截图 ：`win + shift + s` 或 PrtSc
-   查看电脑配置 ：运行 `dxdiag`

### 实用功能

-   查找谁占用了文件
    -   资源监视器 -> 打开关联的句柄(下拉按钮) -> 输入框中输入文件名回车 -> 查到的记录右键结束
-   设置开机自启 SVN（需要在有管理员权限的命令行执行）
    -   `sc create SVNServer binPath= "D:/xxxx/svnserve.exe --service -r D:/xxx/顶层仓库" start= auto depend= Tcpip`
        -   SVNServer：服务名称
        -   --service ：window 模式
        -   start：auto 自动
    -   `net start SVNServer`:手动启动
    -   `net stop SVNServer`:手动停止
    -   `sc delete SVNServer`:停止后删除服务
    -   成功案例：`sc create MySVNServer2 binpath= "\"C:\Program Files\TortoiseSVN\bin\svnserve.exe\" --service -r E:/lzo-project/svn-root" depend= Tcpip start= auto`
    -

## 服务

### WSL

-   win10 微软的终端包管理工具
    svn://192.168.3.18/mysvndir

-   win 命令终端 windows PowerShell

    -   微软商店下载`windows Terminal`
    -   [官方文档](https://github.com/microsoft/terminal)
    -   windows PowerShell 的配置

        -   `code $Profile`:打开配置文件

    -   `windows Terminal`配置文件

```shell
{
    "$schema": "https://aka.ms/terminal-profiles-schema",
    "actions":
    [
      xxxx
    ],
    "copyFormatting": "none",
    "copyOnSelect": false,
    "defaultProfile": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
    "profiles":
    {
        "defaults": {
            "colorScheme":"Campbell",//默认配送方案
            "useAcrylic":true,//材质
            "acrylicOpacity":0.75//透明度
        },
        "list": //新增tab页面可以选择很多方案Ubuntu、git、cmd等等，也可以配置自己个性化指令记录
        [
            {
                "colorScheme": "Campbell",
                "commandline": "powershell.exe",
                "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
                "hidden": false,
                "name": "Windows PowerShell"
                //"backgroundImage":"xxx" //powershell终端的背景图片
                //"backgroundImageOpacity":0.1 //powershell终端的背景图片透明度
            },
            {
                "commandline": "D:\\install\\Git\\bin\\bash.exe", //指令,可以是程序，也能是一些本地可以运行的指令,终端指令必须找到对于的bash程序
                "icon": "D:\\install\\Git\\mingw64\\share\\git\\git-for-windows.ico",//图标
                "name": "Git", //名称
                "hidden":false,"是否隐藏"
                "colorScheme":"xxx","设置单独的配色方案优先级高"
            },
            {
                "commandline":"D:\\install\\cmder\\vendor\\git-for-windows\\bin\\bash.exe"
            }
        ]
    },
    "schemes":
    [
        { //每一个配色方案 外观通过name选择这里的
            "background": "#2D323B",
            "black": "#0C0C0C",
            "blue": "#0037DA",
            "brightBlack": "#767676",
            "brightBlue": "#3B78FF",
            "brightCyan": "#61D6D6",
            "brightGreen": "#16C60C",
            "brightPurple": "#B4009E",
            "brightRed": "#E74856",
            "brightWhite": "#F2F2F2",
            "brightYellow": "#F9F1A5",
            "cursorColor": "#FFFFFF",
            "cyan": "#3A96DD",
            "foreground": "#CCCCCC",
            "green": "#13A10E",
            "name": "Campbell",
            "purple": "#881798",
            "red": "#C50F1F",
            "selectionBackground": "#616161",
            "white": "#CCCCCC",
            "yellow": "#C19C00"
        },
    ],
    "theme": "dark"
}
```

### 美化

-   微软商店 安装 TranslucentTB
-   BitDock
-   MyDock

### 快捷键

-   `Alt + Shift + G`:谷歌
-   `Alt + Shift + U`:uTools
-   `Alt + Shift + V`:虚拟机
