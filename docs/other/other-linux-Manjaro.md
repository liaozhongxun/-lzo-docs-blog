---
title: Linux
---

## 新机配置

### 配置源

-   配置镜像源
    -   `sudo pacman-mirrors -i -c China -m rank`
-   设置 archlinuxcn 源,antergos 源,arch4edu 源:`sudo vi /etc/pacman.conf`

```shell
[archlinuxcn]
SigLevel = Optional TrustedOnly
#中科大源
Server = https://mirrors.ustc.edu.cn/archlinuxcn/$arch
#清华源
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch

# [antergos]
# SigLevel = TrustAll
# Server = https://mirrors.tuna.tsinghua.edu.cn/antergos/$repo/$arch

# [arch4edu]
# SigLevel = TrustAll
# Server = https://mirrors.tuna.tsinghua.edu.cn/arch4edu/$arch
```

-   先排列源
    -   sudo pacman-mirrors -g
-   同步并优化（类似磁盘整理，固态硬盘无需操作）
    -   sudo pacman-optimize && sync
-   升级系统

    -   sudo pacman -Syyu

-   导入 GPG Key

    -   sudo pacman -S archlinuxcn-keyring
    -   sudo pacman -S antergos-keyring

-   安装 ARU 包管理工具

    -   `sudo pacman -S yay`

    -   安装谷歌
        -   `sudo yay -S google-chrome`

### 输入法

-   ctrl+空格切换

### 安装 bed 程序

下载 yay -S debtap  
更新 sudo debtap -u
安装 debtap xxx.deb

## 操作

### 常用功能

-   输出系统基本信息:`sudo screenfetch`
-   强制关机:`sudo shutdown now`
-   升级系统:`sudo pacman -Syyu`
-   清理系统中无用的包:`sudo pacman -R $(pacman -Qdtq)`
-   清除已下载的安装包:`sudo pacman -Scc`
-   显示文件系统的磁盘使用情况:`sudo df -h 或 sudo df -hT`

### 快捷健

-   设置快捷（设置-键盘-应用与快捷健-添加选择程序-确定-选择键位）
    -   `xfce4-terminal`：终端串口; 我的设置：`win+shift+T`
    -   `xflock`：锁定; 我的设置：`ctrl+alt+delete`
-   终端

    -   `shift+ctrl+C`：复制
    -   `shift+ctrl+P`：粘贴
    -   `shift+ctrl+E`：在终端中打开新终端
    -   `shift+ctrl+T`：打开标签页

-   界面窗口

    -   系统快捷健（设置-窗口管理器-快捷健）
        -   `win+D` ：回到桌面
    -   系统窗口
        -   `ctrl+alt+f`：文件管理器
        -   `alt+F1`：系统菜单
        -   `alt+F2`：应用程序查找器
        -   `ctrl+alt+m`：任务管理器
        -   `xfce4-settings-manager`：设置
        -   `ctrl+esc`：右键菜单
