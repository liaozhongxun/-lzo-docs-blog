---
title: Linux
---

## 操作

### 常用功能

-   输出系统基本信息:`sudo screenfetch`
-   强制关机:`sudo shutdown now`
-   升级系统:`sudo pacman -Syyu`
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
    -   `exo-open path`：`xfce`图形界面打开指定文件夹

## manjaro 的指令

-   `pacman`:自带包管理工具

    -   `-S`:安装
    -   `-Ss`:搜索
    -   `-Syy`:更改/etc/pacman.conf 添加源后 ，更新软件包数据库
    -   `-Syu`:更改系统本身
    -   `-Sc`:清除缓存
    -   `-Scc`:清除已下载的安装包
    -   `R`:删除服务
    -   `Rs`:删除服务，以及相关依赖
    -   `Rns`:删除服务，以及相关依赖,以及全局变量

    -   `Q`:查询已安装程序
    -   `Qe`:查询自己安装的程序
    -   `Qeq`:查询自己安装的程序（不显示版本号）
    -   `Qs key`:查询本地名字有 key 的程序
    -   `Qdt`:不需要的软件
    -   `pacman -R $(pacman -Qdtq)`:删除不需要的软件，最后 q 去除版本号

-   `/etc/pacman.conf`:pacman 配置文件 添加源,
    -   `Color`:设置高亮变色

## 新机配置

### 配置源

-   配置镜像源
    -   `sudo pacman-mirrors -i -c China -m rank` :存在/etc/pacman.d/mirrorlist
-   设置 archlinuxcn 源,antergos 源,arch4edu 源:`sudo vi /etc/pacman.conf`

```shell
[archlinuxcn]  #不同的源 下载的软件不一样
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

-   安装 `ARU `包管理工具

    -   `sudo pacman -S yay fakeroot binutils` yay 与需要用到的包基本工具不然最后肯会报错

    -   安装谷歌
        -   `yay -S google-chrome`

### 搜狗输入法

-   fcitx
-   fcitx-configtool
-   fcitx-sogoupinyin
-   配置文件
    -   添加输入法配置文件 sudo vim ~/.xprofile
    -   export GTK_IM_MODULE=fcitx
    -   export QT_IM_MODULE=fcitx
    -   export XMODIFIERS="@im=fcitx"s

### oh-my-zsh 终端美化

-   基本配置
    -   查看本地 `/etc/shells` 是否有 zsh (没有就安装)
    -   安装 `oh-my-zsh`
    -   根据提示将 .zshrc 复制到本地 ~/.zshrc
    -   将 shell 切换到 /bin/zsh `chsh -s /bin/zsh`
    -   重启
    -   source ~/.zshrc
-   主题
    -   .zshrc 中 ZSH_THEME="主题名称"
    -   主题都在 `/usr/share/oh-my-zsh/theme`下

### 安装 bed 程序

下载 yay -S debtap  
更新 sudo debtap -u
安装 debtap xxx.deb

### wifi 设置

-   iw dev 查看 interface 后面无线网卡名
-   安装 create_ap
-   rm -f /tmp/create_ap.all.lock
-   sudo create_ap 无线网卡名 无线网卡名 热点名 热点密码
-

### 启动项

-   将 desktop 放到~/.config/autostart 、
-   开机黑色问题
    -   `/etc/default/grub`
        -   注释 hidden 那一行
        -   去除下面的 quiet
    -   `update-grup`:跟新

### 快捷服务

-   `node-fanyi`:终端翻译
-   `Typora`:Markdown 编辑器

### 全局菜单

-   vala-panel-appmenu-common
-   vala-panel-appmenu-registrar
-   vala-panel-appmenu-xfce
-   appmenu-gtk-module(我没有装)
-   状态面板首选项-项目-添加全局菜单-重启
-   xfconf-query -c xsettings -p /Gtk/ShellShowsMenubar -n -t bool -s true
-   xfconf-query -c xsettings -p /Gtk/ShellShowsAppmenu -n -t bool -s true

### 添加主题

-   WhiteSur
    -   `WhiteSur-Gtk-theme`:主题
    -   `WhiteSur-icon-theme`:图标
    -   `WhiteSur-cursors`:指针
-   安装成功 “开始菜单-->设置管理->外观设置" 中选择
