---
title: gitee + svn
---
## 项目创建
- 码云(gitee)创建私有仓库
- 进入管理-启用svn服务，就能通过svn方式管理仓库
- 下载
  - 进入Apache官网 ->  Subversion  -> 找到 Binary Packages 下载可以的包 -> 下载安装tools
  - 搭建服务器的话还要下载 `Visual SVN Server`
- 层级
  - 客户层
    - 通过命令行操作
    - 通过工具操作 
  - 服务层
    - 通过`(DAV)http://`方式访问远程仓库
      - 需要永远`Apache`服务器
    - 通过`(SVN)svn://`方式访问远程仓库
    - 通过`(Local)file://`方式访问仓库(搭建SVN仓库本机，不需要网络)
  - 仓库层
### SVN 命令行
  - 管理员命令
    - svnadmin --help
    - svnadmin --help 命令
    - 仓库
      - 顶级仓库 (顶级仓库下管理着很多根仓库)
        - 一个文件夹,创建根仓库时，根仓库路径中上一层必须存在，这个就是顶层参考
      - 根仓库
        - `svnadmin create path` :创建版本根仓库
          - `conf`: 根仓库配置文件夹
            - `authz`:权限文件
          - `db`:存放具体版本数据内容(不是源码)
  - 服务端命令
    - svnserve
    - svnserve -d：开启svn服务，开放顶层仓库，运行客户端访问
  - 客户端命令
    - 命令指令直接管理（有些指令不支持）
      - 检出：`svn checkout svn://gitee.com/lzo-gitee/lzo-svnmsg`
      - 提交
        - 状态：`svn status`
          - A - svn add filename
          - M - 内容修改过的文件
          - ? - 未跟踪
        - 提交：`svn commit -m 'LogMessage' ` (提交所以add和已修改的文件)
      - 更新
        - `svn update` ：如果后面没有目录，默认将当前目录以及子目录下的所有文件都更新到最新版本。
        - `svn update -r 200 test.php`： 将版本库中的文件test.php还原到版本200

### TortoiseSVN 
  - win下载安装TortoiseSVN（Subversion ）
    - 检出:复制仓库地址，右键检出(checkout)，输入gitee的账号密码

## 注意事项
[资料](https://gitee.com/help/articles/4131#article-header0)