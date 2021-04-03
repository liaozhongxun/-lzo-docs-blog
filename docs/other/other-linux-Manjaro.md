---
title: Linux
---

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
