---
title: window
---

## 快捷功能

-   截图 ：`win + shift + s` 或 PrtSc
-   查看电脑配置 ：运行 `dxdiag`

### 实用功能

-   查找谁占用了文件
    -   资源监视器 -> 打开关联的句柄(下拉按钮) -> 输入框中输入文件名回车 -> 查到的记录右键结束
-   设置开机自启 SVN（需要在有管理员权限的命令行执行）
    -   `sc create SVNServer binPath= "D:/xxxx/svnserve.exe --service -r D:/xxx/顶层仓库" start= auto depend= Tcpip`
        - SVNServer：服务名称
        - --service ：window 模式
        - start：auto 自动
    - `net start SVNServer`:手动启动
    - `net stop SVNServer`:手动停止
    - `sc delete SVNServer`:停止后删除服务
    - 成功案例：`sc create MySVNServer2 binpath= "\"C:\Program Files\TortoiseSVN\bin\svnserve.exe\" --service -r E:/lzo-project/svn-root" depend= Tcpip start= auto`
    - 

## 服务

### WSL

-   win10 微软的终端包管理工具
svn://192.168.3.18/mysvndir