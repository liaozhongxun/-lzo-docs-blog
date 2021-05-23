---
title: linux服务
---
## 防火墙
### 安装防火墙服务 firewalld
   - `firewall-cmd --zone=public --add-service=ftp --permanent`:防火墙开头ftp
   - `firewall-cmd --list-service`:查看防火墙已开通的服务
   - `firewall-cmd --list-all`:开放的端口
   - `firewall-cmd --add-port=8001/tcp --permanent`:新增开放端口
   - `firewall-cmd --reload`:重启防火墙

### iptables
 - 指令 ` iptables`,名称 `Netfilter`

## 常用
### 搭建ftp环境
- 安装 `vsftpd`
- 创建访问用户(本地linux用户)
- `/etc/vsftpd.conf`:配置文件
```shell

# 本地用户
local_enable=YES #是否允许本地用户`如root`登录
local_root=/home/ftpuser #设置本地用户登录后默认路径，否则默认在自己的家目录
local_umask=022 #设置本地用户上传文件的权限
# 匿名用户
# 账户:anonymous或ftp 密码随意
anonymous_enable=YES #是否允许匿名访问
anon_root=/usr/local/ftpdir #配置匿名用户根目录(如果无法直接设置777，许在ftpdir创建777权限文件夹，供匿名用户使用)
anon_umask=022 #匿名用户上传文件的权限
anon_upload_enable=YES #是否允许匿名用户上传写入
anon_mkdir_write_enable=YES #控制匿名用户创建目录
no_anon_password=YES #匿名用户不用密码登录
ftp_username=ftpuser #匿名登录后的使用者
anon_other_write_enable=YES　　　　　 　  # 开启匿名用户可以删除目录和文件
anon_world_readable_only=YES　　　　　 　# 开启匿名用户下载权限
# 功能性配置
write_enable=YES #是否允许写入，否则不能上传文件
chroot_local_user=YES #所有用户不能切换到上级
allow_writeable_chroot=YES #如何文件不能上传 550 Permis....，可以加上这儿
ftpd_banner=Welcome to blah FTP service. #ftp链接成功提示
chroot_list_enable=YES #是否启用限制用户名单
# 我的arch配置
anonymous_enable=NO
local_enable=YES
write_enable=YES
local_umask=022
dirmessage_enable=YES
xferlog_enable=YES
connect_from_port_20=YES
ascii_upload_enable=YES
ascii_download_enable=YES
banned_email_file=/etc/vsftpd.banned_emails
listen=YES
seccomp_sandbox=NO # arch vsftpd 无法显示列表的原因之一
pam_service_name=vsftpd

```
- `ftpusers`:不允许里面的用户登录服务器（manjaro没有）
- `user_list`:
    - `userlist_enable=YES`:启用这个配置文件   
    - 如果`userlist_deny=NO`,就只允许里面的用户登录，否则YES表示不允许里面的用户登录

- 安装命令行ftp链接工具，`ftp localhost` 测试是否可以链接
