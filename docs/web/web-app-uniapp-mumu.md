---
title: mumu 手机模拟器】
---

[下载](mumu.163.com)

### 安装

-   提示关闭 Hyper-V （WSL2 就没了 管理员身份从Pollshell 运行 `bcdedit /set hypervisorlaunchtype auto` 然后重启）
-   将Hbuilder X 的项目跑到 mumu模拟器 或 手机中
    -   先设置 **adb调试桥** 命令行工具
        -   连接手机设备
        -   安装App
        -   调试大于log
        -   热更新
        -   ...........



### adb调试桥

方式一、直接使用 `Hbuilder X` 自带的 adb 工具

-   找到 **HBuilderX\plugins\launcher\tools\adbs**   (需要安装真机App运行插件就有)  MAC下可能位置会不一样，
-   进入目录通过 adb 指令 `./adb connect 127.0.0.1:7555` 连接 mumu模拟器（mumu 默认端口 7555）
-   查看连接结果 `./adb devices` 
-   打开Hbuilder X， 运行到手机或模拟器 > 运行到Android App 基座，就会检索出连接成功的设备 
-   成功后手机或模拟器桌面就会多出运行程序的图标

方式二、自己下载adb工具包

-   [外部下载地址](https://developer.android.google.cn/studio/releases/platform-tools?hl=zh-cn)
-   HBuilder X 中配置adb路径

方式三、使用 `Android Studio`开发工具SDK中 platform-toos的adb工具

用一个就行，不要混合用，会冲突

