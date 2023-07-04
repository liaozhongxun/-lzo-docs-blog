---
title: centos 安装 配置 使用
---

### 安装

[VMware](https://www.vmware.com/cn/products/workstation-pro/workstation-pro-evaluation.html)

[7 iso](http://mirrors.aliyun.com/centos/7/isos/x86_64/)

选择语言 => 选择安装模式等 => 开始安装 => 设置root密码

### 配置

#### 网络配置

> vim /etc/sysconfig/network-scripts/ifcfg-enp7s0（或 ifcfg-ens33）

将`ONBOOT=no`改为`yes`

**BOOTPROTO**

- **static 静态分配ip**
- **bootp bootp协议**
- **dhcp DHCP协议**

```shell
# 将BOOTPROTO=dhcp 改为 BOOTPROTO=static 就能静态分配IP
# IPADDR=192.168.127.128  # ip地址
# NETMASK=255.255.255.0   # 子网掩码
# GATEWAY=192.168.127.2   # 网关（最后不能.1）
# DNS1=114.114.114.114    # DNS
```

#### 配置 yum / dnf

> RPM软件包管理器，配置一些 yum 源

```shell
# cd /etc/yum.repos.d/ 备份、删除默认yum源
# 阿里云 yum 源
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
# epel yum 源
wget -O /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo (yum install epel-release)
# 重新建立缓存
yum clean all
yum makecache

# 使用
yum install/remove pack-name

# yum install dnf
# dnf 扩展工具
dnf install dnf-plugins-core  # 就能使用 dnf copr

epel的全称叫 Extra Packages for Enterprise Linux 。epel是由 Fedora 社区打造，为 RHEL 及衍生发行版如 CentOS、Scientific Linux 等提供高质量软件包的项目
epel相当于一个第三方源。为什么需要 epel？因为 CentOS 官方源包含的大多数的库都是比较旧的。并且很多流行的库也不存在。当然这样做也是无可厚非的，毕竟服务器版本安全稳定是重点。
```

#### 配置 Nginx

#### 配置 zsh

```shell
yum install zsh

# chsh -s /bin/zsh 切换shell到zsh，重启，设置~/.zshrc
# echo $SHELL 查看当前使用的shell
```

#### 配置 SSH

```shell
# 两个主机都生成公钥私钥
# 连接主机 `ssh-copy-id -i ./id_rsa.pub root@114.115.212.xxx` 向目标主机114 上传公钥
# ssh root@xxx.xxx.xxx.xx  测试、连接远程

# win 连 linux 可能需要在git bash上操作
# 远程主机直接将客户端的公钥加入 ~/.ssh/authorized_keys 文件中
```

#### 配置 nvm

```shell
# git
 wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
 source ~/.zshrc
 
 # 增删改查
 nvm install/uninsell/use/list <node-version>
 
 # 淘宝源
 npm install cnpm -g --registry=https://registry.npm.taobao.org
```

常用npm包管理工具

```shell
npm cnpm yarn pnpm
```



### 应用

#### 配置 autojump

```shell
git clone https://github.com/wting/autojump.git
cd autojump&&./install.py
[[-s ~/.autojump/etc/profile.d/autojump.zsh]] && . ~/.autojump/etc/profile.d/autojump.zsh  到~/.zshrc
 
# 缓存数据库位置:`~/.local/shart/autojump/autojump.txt`
```

#### 配置 oh-my-zsh 

> 必须 zsh shell 下

```shell
# centos 安装
wget https://gitee.com/heyuanfly/install-oh-my-zsh/raw/master/centos-install-oh-my-zsh.sh
chmod +x centos-install-oh-my-zsh.sh
./centos-install-oh-my-zsh.sh

# 使用
# .zshrc 中 ZSH_THEME="主题名称"
# 主题都在 `/usr/share/oh-my-zsh/theme`下
#    推荐主题:`duellj`、`suvash`、`xiong-chiamiov`、`pygmalion`、`fino`、`steeef`、`ys`,`norm`
# zsh vi 模式(使用 vim 快捷键)
#    .zshrc 添加 bindkey -v


# [插件扩展 powerlevel10k](https://github.com/romkatv/powerlevel10k/blob/master/README.md#oh-my-zsh)
#    `git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k`
#    将 ZSH_THEME="powerlevel10k/powerlevel10k 设置为 oh-my-zsh主题
#    `p10k configure`:第一次需要配置，这样重新配置
# 命令行高亮
#     yay -S zsh-syntax-highlighting zsh-autosuggestions  或 github 下载
#     如果不生效
#     sudo ln -s /usr/share/zsh/plugins/zsh-syntax-highlighting /usr/share/oh-my-zsh/custom/plugins/
#     sudo ln -s /usr/share/zsh/plugins/zsh-autosuggestions /usr/share/oh-my-zsh/custom/plugins/  （zsh-autosuggestions 放入.zshrc plugins中）
```

#### 安装 lazygit

```shell
# 先安装 go /docs/server/go/go-bash.md
```



#### 配置 ranger

```shell
# 安装python3和pip3
yum install python3 python3-devel -y
pip3 install ranger-fm -i https://mirrors.aliyun.com/pypi/simple/
```

#### 配置 tmux

#### 配置 vim

```shell
# vim 包管理工具 vimplus
git clone https://github.com/chxuan/vimplus.git ~/.vimplus
cd ~/.vimplus
./install.sh
./update.sh # 更新

# 安装插件
:PlugInstall  

# 插件位置
~/.vim/plugged

# 基本配置
# `~/.vimrc为vimplus`的默认配置，一般不做修改
# `~/.vimrc.custom.plugins`为用户自定义插件列表，用户增加、卸载插件请修改该文件
# `~/.vimrc.custom.config`为用户自定义配置文件，一般性配置请放入该文件，可覆盖~/.vimrc 里的配置
```



#### 配置 fzf

```shell
git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
~/.fzf/install

npmc install -g fd-find

# fd 缺少 glibc-2.18
curl -O http://ftp.gnu.org/gnu/glibc/glibc-2.18.tar.gz
tar zxf glibc-2.18.tar.gz 
cd glibc-2.18/
mkdir build
cd build/
../configure --prefix=/usr
make -j2
make install
```

高亮搜索 

```shell
# ~/.zshrc	
#界面展示这些参数在 fzf --help 中都有，按需配置即可 highlight 预览高亮可能需要安装
export FZF_DEFAULT_OPTS="--border --preview '(highlight -O ansi {} || cat {}) 3> /dev/null | head -500'"
# fzf查找配安装 fd-find (可搜索隐藏文件)
export FZF_DEFAULT_COMMAND="fd --exclude={.git,.idea,.vscode,.sass-cache,node_modules,build} --type f --hidden"
```



#### 系统信息 screenFetch

```shell
CentOS screenfetch
cd /usr/local/src
git clone https://github.com/liaozhongxun/screenFetch.git
cp screenFetch/screenfetch-dev /usr/local/bin/screenfetch
chmod 755 /usr/local/bin/screenfetch
```



### 工具

#### 连接工具

[终端SSH指令]() [MobaXterm](https://mobaxterm.mobatek.net/) [FinalShell](http://www.hostbuf.com/t/988.html) [WindTerm]()



#### 文件上传下载

> 用上传下载的SSH连接工具，终端直连无效

```shell
dnf install lrzsz
# 上传 
rz
# 下载
sz <file-name>
```

#### 包下载器

yum、dnf、wget、curl









