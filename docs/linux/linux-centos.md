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
# IPADDR=192.168.203.128  # ip地址
# NETMASK=255.255.255.0   # 子网掩码
# GATEWAY=192.168.203.2   # 网关（最后不能.1）
# DNS1=8.8.8.8    # DNS
```

编辑/虚拟网络设置

![](D:\lzo-project\lzo-docs-blog\static\img\2023-07-06_083543.jpg)

![](D:\lzo-project\lzo-docs-blog\static\img\2023-07-06_083630.jpg)

#### 配置 yum / dnf

> RPM软件包管理器，配置一些 yum 源

```shell
# cd /etc/yum.repos.d/ 备份、删除默认yum源
# 阿里云 yum 源
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
# 网易源
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.163.com/.help/CentOS7-Base-163.repo
# 中科大
wget -O /etc/yum.repos.d/CentOS-Base.repo 'https://lug.ustc.edu.cn/wiki/_export/code/mirrors/help/centos?codeblock=3'
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

#### 配置 nginx

#### 配置 zsh

```shell
yum install zsh

# chsh -s /bin/zsh 切换shell到zsh，重启，设置~/.zshrc
# echo $SHELL 查看当前使用的shell
```

#### 配置 ssh

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

#### 配置 pm2

```shell
cnpm install pm2 -g

# =================使用
# 启动某一个node程序
pm2 start xxx.js --name=自定义名称

# 启动ssr项目，npm run start 成功后 ，再执行，也可以直接执行
pm2 --name=nuxtName start npm -- run start

pm2 list   # 查看进程列表
pm2 logs   # 查看日志
pm2 monit  # 监控进程
pm2 show app_name|app_id # 查看进程详细
pm2 stop app_name|app_id|all # 停止进程
pm2 delete app_name|app_id|all # 删除进程
pm2 restart/reload app_name|app_id|all # 重启进程

# 启动多个程序
touch appxx.json
# 写入
{
    "app":[
        {
            "name":"api",
            "script":"server/index.js", # 找到程序路径
        },
        {
            "name":"node-n",
            "script":"client/index.js", # 找到其他node程序路径
        },
    ]
}

pm2 start appxx.json

# =============================设置开机自启
pm2 startup

# 保存为开机自启
pm2 save

# 删除pm2 save的操作
pm2 unstartup systemd

# 当 node.js 版本更新时，请一定要卸载并新建 自启动脚本 
pm2 unstartup
pm2 startup

# 恢复上一次保存的自启动列表
pm2 resurrect

# 后台运行pm2,启动4个app.js 实现负载均衡
pm2 start app.js -i 4

# 查看端口
netstat -lntp
```

#### 设置 firewall-cmd

#### 配置 mysql

```shell
# 下载MySQL安装包 并安装
wget https://dev.mysql.com/get/mysql57-community-release-el7-8.noarch.rpm 
rpm -ivh mysql57-community-release-el7-8.noarch.rpm
# 跟新秘钥
rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2022

# yum 就能找到 mysql-server
yum install mysql mysql-server mysql-deve  

# 启动
systemctl start/enable mysqld
```



### 应用

#### 安装 autojump

```shell
git clone https://github.com/wting/autojump.git
cd autojump&&./install.py
[[-s ~/.autojump/etc/profile.d/autojump.zsh]] && . ~/.autojump/etc/profile.d/autojump.zsh  到~/.zshrc
 
# 缓存数据库位置:`~/.local/shart/autojump/autojump.txt`
```

#### 安装 oh-my-zsh 

> 必须 zsh shell 下

```shell
# centos 安装
wget https://gitee.com/heyuanfly/install-oh-my-zsh/raw/master/centos-install-oh-my-zsh.sh
chmod +x centos-install-oh-my-zsh.sh
./centos-install-oh-my-zsh.sh

# 使用
# .zshrc 中 ZSH_THEME="主题名称"
# 主题都在 `/usr/share/oh-my-zsh/theme`下
#    推荐主题:`duellj`、`suvash`、`xiong-chiamiov`、`pygmalion`、`fino`、`steeef`、`ys`,`norm`、obraun
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



#### 安装 ranger

```shell
# 安装python3和pip3
yum install python3 python3-devel -y
pip3 install ranger-fm -i https://mirrors.aliyun.com/pypi/simple/
```

#### 安装 tmux

安装 libevent

```shell
wget https://github.com/libevent/libevent/releases/download/release-2.1.12-stable/libevent-2.1.12-stable.tar.gz
tar -zxvf libevent-2.1.12-stable.tar.gz
cd libevent-2.1.12-stable
./configure --disable-openssl
make && make install

# 如果有报错
sudo ln -s /usr/local/lib/libevent-2.1.so.7 /usr/lib64/
```

安装 tmux

```shell
git clone https://github.com/tmux/tmux.git
cd tmux
sh autogen.sh
./configure && make
```

异常

```shell
error while loading shared libraries: libevent_core-2.1.so.7: cannot open shared object file: No such file or directory

# 程序无法找到libevent-2.1.so.7这个动态库

# 添加配置到 ld.so.conf 文件中
sudo echo "/usr/local/lib" >> /etc/ld.so.conf
# 跟新配置
sudo ldconfig

tmux new -s tm
```

主题包
```shell
https://blog.csdn.net/Arise_/article/details/127085812
# 主题包 oh-my-tmux
cd ~
git clone https://github.com/gpakosz/.tmux.git
ln -s -f .tmux/.tmux.conf  #创建软连接
cp .tmux/.tmux.conf.local . #复制local文件到当前文件夹 可以覆盖默认配置
# tmux source-file ~/.tmux.conf  从新加载配置
```



#### 安装 vim

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



#### 安装 fzf

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



#### 安装 screenFetch

```shell
CentOS screenfetch
cd /usr/local/src
git clone https://github.com/liaozhongxun/screenFetch.git
cp screenFetch/screenfetch-dev /usr/local/bin/screenfetch
chmod 755 /usr/local/bin/screenfetch
```



### 其他

#### 文件锁

```shell
# 保存文件时 :X
# 输入两次密码
# :wq 退出
```

####  文件操作

>  删除指定文件外的所有

```shell
find * | grep -v 1.txt | xargs rm
find * | grep -v '\(1.txt\|2.txt\)' | xargs rm
```

>替换指定目录下，所有文件的指定内容

```shell
sed -i "s#https#http#g" `grep http -rl VERO` # 将 VERO 下所有子目录所有文件里的 http 替换成 https
sed -i "s#456#789#g" `grep 456 -rl ./lianxi` # 将 lianxi 下所有子目录所有文件里的 456 替换成 789
```

> 查询目录下哪些文件具有指定内容

```shell
grep 456 -rl ./lianxi # 找到 lianxi 下所有存在 456 的文件
```

端口

> 通过端口，查看占用的程序名称

```shell
# 有 pid进程号/程序名 
netstat -anp | grep 3306 
# 有程序名、pid进程号
lsof -i :3306   
```



### 工具

#### 连接工具

[终端SSH指令]() [MobaXterm](https://mobaxterm.mobatek.net/) [FinalShell](http://www.hostbuf.com/t/988.html) [WindTerm](https://github.com/kingToolbox/WindTerm/releases)



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

`yum`、`dnf`、`wget`、`curl`









