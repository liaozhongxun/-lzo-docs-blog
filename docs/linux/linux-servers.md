---
title: linux服务
---
## 常用
### 搭建ftp环境
- 安装 `vsftpd`
- 创建访问用户(本地linux用户)
- `/etc/vsftpd.conf`:配置文件
    - `local_enable=YES`:是否允许本地用户`如root`登录
    - `allow_writeable_chroot=YES`:如何文件不能上传 550 Permis....，可以加上这儿
    - `anonymous_enable=NO`:是否允许匿名访问
    - `local_root=/home/ftpuser`:设置本地用户登录后默认路径，否则默认在自己的家目录
    - `anon_root=/usr/local/ftpdir`:配置匿名用户根目录
    - `local_umask=022`:设置本地用户上传文件的权限
    - `anon_umask=022`:匿名用户上传文件的权限
    - `write_enable=YES`:是否允许写入，否则不能上传文件
    - `anon_upload_enable=YES`:是否允许匿名用户上传写入
    - `anon_other_write_enable=YES`:控制匿名用户对文件的删除与重命名
    - `anon_mkdir_write_enable=YES`:控制匿名用户创建目录
    - `ftpd_banner=Welcome to blah FTP service.`:ftp链接成功提示
    - `chroot_local_user=YES`:所有用户不能切换到上级
    - `chroot_list_enable=YES`:是否启用限制用户名单
    - `no_anon_password=YES`:匿名用户不用密码登录
    - `ftp_username=ftpuser`:匿名登录后的使用者
- `ftpusers`:不允许里面的用户登录服务器（manjaro没有）
- `user_list`:
    - `userlist_enable=YES`:启用这个配置文件   
    - 如果`userlist_deny=NO`,就只允许里面的用户登录，否则YES表示不允许里面的用户登录

- 匿名用户，不用账号密码登录用登录

- 安装ftp链接工具，`ftp localhost` 测试是否可以链接
