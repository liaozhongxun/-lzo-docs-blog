---
title: centos 安装 配置 使用
---

## 安装

[VMware](https://www.vmware.com/cn/products/workstation-pro/workstation-pro-evaluation.html)

[7 iso](http://mirrors.aliyun.com/centos/7/isos/x86_64/)

选择语言 => 选择安装模式等 => 开始安装 => 设置 root 密码

## 配置

### 网络配置

> vim /etc/sysconfig/network-scripts/ifcfg-enp7s0（或 ifcfg-ens33）

将`ONBOOT=no`改为`yes`

**BOOTPROTO**

- **static 静态分配 ip**
- **bootp bootp 协议**
- **dhcp DHCP 协议**

```shell
# 将BOOTPROTO=dhcp 改为 BOOTPROTO=static 就能静态分配IP
# IPADDR=192.168.203.128  # ip地址
# NETMASK=255.255.255.0   # 子网掩码
# GATEWAY=192.168.203.2   # 网关（最后不能.1）
# DNS1=8.8.8.8    # DNS

# 重启网络服务
systemctl restart network
```

编辑/虚拟网络设置

![](D:\lzo-project\lzo-docs-blog\static\img\2023-07-06_083543.jpg)

![](D:\lzo-project\lzo-docs-blog\static\img\2023-07-06_083630.jpg)

### 配置 yum / dnf

> RPM 软件包管理器，配置一些 yum 源

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
```

> dnf [文档](https://wangchujiang.com/linux-command/c/dnf.html) [repo](http://mirrors.aliyun.com/repo/)

```shell
# 阿里云 源列表
http://mirrors.aliyun.com/repo/
# 安装
yum install dnf
dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm -y
dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm -y
# 测试状态
dnf repolist epel
dnf repolist epel -v

# 建立元数据缓存
dnf makecache

# dnf 扩展工具
dnf install dnf-plugins-core  # 就能使用 dnf copr

epel的全称叫 Extra Packages for Enterprise Linux 。epel是由 Fedora 社区打造，为 RHEL 及衍生发行版如 CentOS、Scientific Linux 等提供高质量软件包的项目
epel相当于一个第三方源。为什么需要 epel？因为 CentOS 官方源包含的大多数的库都是比较旧的。并且很多流行的库也不存在。当然这样做也是无可厚非的，毕竟服务器版本安全稳定是重点。
```

### 配置 git

```shell
# 如果版本太低
yum remove git

# 跟新 rpm
rpm -ivh http://opensource.wandisco.com/centos/7/git/x86_64/wandisco-git-release-7-1.noarch.rpm

# 安装
yum install
```

### 配置 nginx

### 配置 zsh

```shell
yum install zsh

# chsh -s /bin/zsh 切换shell到zsh，重启，设置~/.zshrc
# echo $SHELL 查看当前使用的shell
```

### 配置 ssh

```shell
# 两个主机都生成公钥私钥
# 连接主机 `ssh-copy-id -i ./id_rsa.pub root@114.115.212.xxx` 向目标主机114 上传公钥
# ssh root@xxx.xxx.xxx.xx  测试、连接远程

# win 连 linux 可能需要在git bash上操作
# 远程主机直接将客户端的公钥加入 ~/.ssh/authorized_keys 文件中
```

### 配置 nvm

```shell
# git
 wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
 source ~/.zshrc

 # 增删改查
 nvm install/uninsell/use/list <node-version>

 # 淘宝源
 npm install cnpm -g --registry=https://registry.npm.taobao.org
```

常用 npm 包管理工具

```shell
npm cnpm yarn pnpm
```

### 配置 pm2

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

### 设置 firewall-cmd

> 开启防火墙后远程无法访问服务器的，开放对应端口才能访问 (相当于云服务器的安全组)

```shell
# 查看防火墙状态
systemctl status firewalld.servic | service firewalld status | firewall-cmd --state
# 开启防火墙
systemctl start firewalld.service | service firewalld start
# 重启防火墙
systemctl restart firewalld.service | service firewalld restart | firewall-cmd --reload
# 防火墙开机启动
systemctl enable firewalld.service
# 关闭防火墙
systemctl stop firewalld.service
```

> 防火墙端口设置（设置完一定要重启防火墙）

```shell
# 参数
# --zone=public 设置区域，默认就是public
#     public（公共区域）
#     trusted（信任区域)
#     ...
# --permanent 表示设置为持久(写入配置文件中)
# 常见port/service 21/ftp

# 通过指令开放端口/服务
firewall-cmd --zone=public --add-port=80/tcp --permanent
firewall-cmd --zone=public --add-port=8080-8083/tcp --permanent
firewall-cmd --zone=public --add-service=ssh --permanent

# 配置文件 /etc/firewalld/zones/public.xml zone标签最后一行添加
<port protocol="tcp" port="80"/>
<port protocol="tcp" port="8080-8083"/>
<service name="ssh"/>

# 删除/查看端口
firewall-cmd --remove-port=80/tcp # 或配置文件直接删除
firewall-cmd --query-port=80/tcp

# 接受来自指定ip的所有请求
firewall-cmd --permanent --add-source=xxx.xxx.xxx.xxx --zone=trusted

# 重启

# 查看开放的端口
firewall-cmd --list-all
firewall-cmd --list-ports # 开放的端口
firewall-cmd --list-service # 查看已开通的服务

```

> 华为云

```shell
# 华为云开放端口使可以在页面访问
# 1、安全组 Sys-WebServer 添加 端口
# 2、防火墙开放端口或关闭防火墙
# 服务器解析第三方域名
# 服务器设置域名解析，添加第三方域名，第三方将域名dns配置设置服务器提供的dns
```

> 扩展 iptables

### 配置 mysql

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

### 配置 NFS

> 文件共享（window 上可以访问 linux 系统的共享的目录）

linux 端

```shell
# 1、安装 rpcbind、nfs-utils
# 2、配置共享文件 /etc/exports
/root/nfsshare *(ro)
# 权限规则
# ro: 可读

# 3、启动服务 rpcbind
systemctl start rpcbind
netstat -tunlp|grep 111

# 4、给共享文件夹 /root/nfsshare 添加访问权限
chmod -Rf 777 /root/nfsshare # 强制递归给与权限
chown -r nfsnobody:nfsnobody /root/nfsshare

# 5、启动 NFS 服务
systemctl start nfs-server.service

# 6、检测本地共享情况
showmount -e 127.0.0.1

# 7、检测共享参数
cat /var/lib/nfs/etab

# 已经分享成功，后面可以省略
# 8、本地挂载测试
mount -t nfs 192.168.203.132:/root/nfsshare /mnt
umount /mnt # 取消挂载

# 9、永久挂载 /etc/fstab
192.168.203.132:/root/nfsshare /mnt nfs defaults 0 0

# 查看挂载情况
df -h


# 关闭防火墙，selinux
# 非要开启防火墙
# 找到配置文件 /etc/sysconfig/nfs
LOCKD_TCPPORT=32803                                                                                         LOCKD_UDPPORT=32769
MOUNTD_PORT=892
STATD_PORT=662

# 再开启 111、2049 六个端口
# 重启 firewall、nfs-server、rpcbind
```

window 端

```shell
# 从 启用或关闭windows功能 勾选 NFS
# 查看服务器开启的NFS共享
showmount -e 192.168.203.132

# 重启电脑 计算机/网络 搜索
\\192.168.203.132\root\nfsshare

# 将文件夹挂载到window某个目录
window 网络右键 > 映射驱动器 > 选择盘符，选择远程地址 \\192.168.203.132\root\nfsshare
```

### 配置 cifs-utils

> 将 window 共享的远程文件夹挂载到 linux

```shell
# 安装: cifs-utils
# 共享: window 新建共享文件夹->高级共享中设置`共享名称` -> 权限给予`读写执行`
# 挂载: mount -t cifs -o username="Administrator",password="1"   //192.168.12.40/nmon /mnt/share
#      mount -t cifs -o username="win 用户名",    password="密码" //win ip/共享名称     linux挂载目录
#      ls /mnt/share 查看共享文件
# 自动挂载 /etc/fstab
# //192.168.12.40/nmon /mnt/share cifs defaults,username=名字,password=你的密码
# //192.168.3.24/共享文件 /mnt/window cifs defaults,username=!·ujcliaozx,password=ujcliaozx123

# 本机案例
mount -t cifs -o username="xun lzo",password="lzx123456" //172.22.112.1/lzo-redmi-share /mnt/lzo-redmi-share
```

### 配置 cron

```shell
yum install cronie

# 配置文件位置 vim /etc/crontab

# 设置 crontab -e
# 查看 crontab -l
```



## 应用

### 安装 autojump

```shell
git clone https://github.com/wting/autojump.git
cd autojump&&./install.py
[[-s ~/.autojump/etc/profile.d/autojump.zsh]] && . ~/.autojump/etc/profile.d/autojump.zsh  到~/.zshrc

# 缓存数据库位置:`~/.local/shart/autojump/autojump.txt`
```

### 安装 oh-my-zsh

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

### 安装 lazygit

```shell
# 先安装 go /docs/server/go/go-bash.md

git clone https://github.com/jesseduffield/lazygit.git
cd lazygit
go install
```

### 安装 tig（ing...）

```shell
# git 分支数查看
yum install tig
```



### 安装 ranger

```shell
# 安装python3和pip3
yum install python3 python3-devel -y
pip3 install ranger-fm -i https://mirrors.aliyun.com/pypi/simple/
```

### 安装 tmux

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

### 安装 vim

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

### 安装 fzf

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

### 安装 htop

```shell
# 通过上下左右控制，不能HJKL
-   `F1`:帮助
-	`F2`:设置
-   `F3`:搜索
-   `F4`:过滤(隐藏不匹配的进程)
-   `F5`:进程树
-	`F6`:排序
-   `F9`:杀死选中的进程

# 快捷键
# u         选择用户，查看指定用户相关的进程
# shift+p   按CPU占用大小排序
# shift+m   按占用内存大小排序
# shift+i   反转排序
# 空格       标记进程，批量操作

```

### 安装 SHC

> 加密工具

```shell
# 将脚本加密，同意可以运行，打开查看的缺少密文
yum install shc

shc -f test.sh # 成功后生成 test.sh.x ,可执行的密文
```



### 安装 screenFetch

```shell
CentOS screenfetch
cd /usr/local/src
git clone https://github.com/liaozhongxun/screenFetch.git
cp screenFetch/screenfetch-dev /usr/local/bin/screenfetch
chmod 755 /usr/local/bin/screenfetch
```

## 指令

### 磁盘占用

```shell
df -h # 人性化显示大小
df -T # 查看文件系统格式
```

### 文件大小

```shell
du -h # 人性化显示
du -s # 汇总，查看目录所有文件占用磁盘空间
```

### 压缩包

```shell
# tar 压缩
tar -zcvf fileName.tar /root/dist # -z 打包方式 gzip，-c 打包，-v 列出详情 -f 新文件名
tar -xf fileName.tar -C /target_dir # -x 解包，-f 解压的文件
tar -tf fileName.tar.gz # 不解包直接查看压缩包内容

# zip 将 /root/dist 压缩为 fileName.zip
zip -q -r fileName.zip /root/dist # -r 递归处理文件夹 -q 不显示执行过程
# zip 从 fileName.zip 压缩 删除 index.html 文件
zip -dv fileName.zip index.html # -d 从压缩文件内删除指定文件

# 解压 unzip
unzip fileName.zip
unzip fileName.zip -d /home/xxx # -d 解压文件到当指定目录，-n 不覆盖原有文件,-o 覆盖
unzip -v fileName.zip # 查看信息不解压
```

## 功能

### 文件锁

```shell
# 保存文件时 :X
# 输入两次密码
# :wq 退出
```

### 文件操作

> 删除指定文件外的所有

```shell
find * | grep -v 1.txt | xargs rm
find * | grep -v '\(1.txt\|2.txt\)' | xargs rm
```

> 替换指定目录下，所有文件的指定内容

```shell
sed -i "s#https#http#g" `grep http -rl VERO` # 将 VERO 下所有子目录所有文件里的 http 替换成 https
sed -i "s#456#789#g" `grep 456 -rl ./lianxi` # 将 lianxi 下所有子目录所有文件里的 456 替换成 789
```

> 查询存在指定内容的文件

```shell
grep 456 -rl ./lianxi # 找到 lianxi 下所有存在 456 的文件
```

> 查询存在指定内容的文件并打印

```shell
grep 456 -r ./lianxi

grep -2 -r '456' ./     # 输出查找内容前后五行
grep -A 2 -r '456' ./   # 输出查找内容后五行
grep -B 2 -r '456' ./   # 输出查找内容前五行
```

### 通过端口查数据

> 通过端口，查看占用的程序名称

```shell
# 有 pid进程号/程序名
netstat -anp | grep 3306
# 有程序名、pid进程号
lsof -i :3306
```

### 通过 PID 查数据

```shell
netstat -antup|grep pid
```

### 通过进程名查数据

```shell
netstat -antup|grep nginx
```

### 查看进程关联的文件

```shell
lsof -c Pid # 打印指定进程使用到的文件
```

### 通过域名查 IP

```shell
nslookup github.com
```

### 统计文件行数

```shell
# grep 找到当前文件夹下所有文件 | 排除不需要统计的目录或文件 | 输出所有文件空行取反 | 查看内容行数
grep . -rl --exclude-dir={node_modules,dist} --exclude={yarn.lock} ./|xargs grep -v "^$"|wc -l
```

### 排除某个文件的批量操作

```shell
# 复制单前目录下除了bak文件夹的其他所有文件到 bak目录
ls | grep -v bak | xargs -i cp -r {} bak/
```



### 通配符

>  适用于匹配文件**名**的操作

| 字符 |                            通配符                            | 正则             | 同效 |
| ---- | :----------------------------------------------------------: | ---------------- | ---- |
| *    | 匹配任意数量（包括0个字符） 如：ls *.txt (列出所有以.txt结尾的文件) | 前面分组0或多个  | .*   |
| ?    |      匹配单个字符  如： ls ?.txt   (1.txt/a.txt/n.txt)       | 前面分组可有可无 | .    |
| []   |        匹配括号内给定的任何一个字符 如：ls [abc].txt         | 相同             | []   |
| {}   | 指定可选项集合 如：cp file{1,2}.txt dir (将file1.txt 和file2.txt 放入dir目录中) | 前面分组个数限定 | \|   |

### 正则

> 适用于匹配文件**内容**的操作

```javascript

```



### 查看系统信息

```shell
# 通过lsb
yum install -y redhat-lsb-core
lsb_release -a

# 通过 screenfetch
# 通过 top/htop
```

### 运行级别

```javascript
ls -la /usr/lib/systemd/system|grep runlevel

 -   `runlevel0.target`: poweroff.target(`不运行服务 关机`)
 -   `runlevel1.target`: resuce.target(`救援|单例|安全模式`)
 -   `runlevel2.target`: multi-user.target
 -   `runlevel3.target`: multi-user.target
 -   `runlevel4.target`: multi-user.target(`2，3，4多用户模式`，不运行图形界面级相关服务，字符界面)
 -   `runlevel5.target`: graphical.target(`图形相关服务`)
 -   `runlevel6.target`: reboot.target(`重启`)

systemctl get-default   // 查看默认运行级别
systemctl set-default multi-user.target
runlevel // 查看单前级别
init n // 临时切换运行级别
```

### 文件查找

```javascript
  - 通过扩展名查找文件：
    find 指定目录 -name '*.ext'

  - 查找匹配多个路径或名称模式的文件：
    find 指定目录 -path '**/path/**/*.ext' -or -name '*pattern*'

  - 查找匹配指定名称的目录，不区分大小写：
    find 指定目录 -type d -iname '*lib*'

  - 查找匹配指定模式的文件，排除特定路径：
    find 指定目录 -name '*.py' -not -path '*/site-packages/*'

  - 查找符合指定大小范围的文件：
    find 指定目录 -size +500k -size -10M

  - 对每个文件运行命令（在命令中使用 `{}` 代表当前文件）：
    find 指定目录 -name '*.ext' -exec wc -l {} \;

  - 查找最近 7 天修改的文件并删除：
    find 指定目录 -daystart -mtime -7 -delete

  - 查找空（0 字节）的文件并删除：
    find 指定目录 -type f -empty -delete
    
  -- 找到指定文件夹下所有文件进行操作
	find 指定目录 ".*" -exec chown lzoxun:lzoxun {} \; 
```



## 工具

### 连接工具

[MobaXterm](https://mobaxterm.mobatek.net/) [FinalShell](http://www.hostbuf.com/t/988.html) [WindTerm](https://github.com/kingToolbox/WindTerm/releases)

### 文件上传下载

> 用上传下载的 SSH 连接工具，终端直连无效

```shell
dnf install lrzsz
# 上传
rz
# 下载
sz <file-name>
```

### ncdu

> 树结构统计文件大小，du 指令优化

```shell
- c # 显示目录子目录文件总数
- d # 删除文件
- e # 隐藏文件显示
- g # 百分比
- h/j/k/l # 上级/向下/向上/下级
- i # 显示文件相关信息
- r # 刷新
```



### tldr

> 简洁文档

### cloc

> 文件数(files)、空白行数(blank)、注释行数(comment)和代码行数(code)

```shell
cloc ./dist
```

### asciinema

> 终端下非常棒的录屏和回放软件

```shell
# 录制
asciinema rec

# 结束录制
ctrl+d 或 exit

# Enter 上传，生成地址
# Ctrl+c 取消

# 播放
asciinema play https://asciinema.org/a/aJ8I9rH4Ob5wbNAywiskRu0cz

```

### 包下载器

`yum`、`dnf`、`wget`、`curl`

## 个人配置

### linux alias

```shell
alias jsr="systemctl restart"
alias jss="systemctl start"
alias jst="systemctl stop"
alias jse="systemctl enable"

alias tm="tmux new -t tm"

alias lg="lazygit"
alias ll='ls -la'
alias n='npm run dev'
alias nse='npm run serve'
alias nst='npm run start'
alias nb='npm run build'

alias gs='git status'
alias ga='git add .'
alias gcm='git commit -m'
alias gph='git push origin'
alias gpl='git pull origin'
alias gl='git log'
alias gb='git branch'
alias gc='git checkout'
bindkey -v
```

### window alias

