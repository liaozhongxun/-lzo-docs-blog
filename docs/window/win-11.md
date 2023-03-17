---
title: win 11 set 
---

### 状态栏
#### 更改图标大小
> 打开注册表:  `计算机\HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced`  
1、右键 Advanced，新增DWORD 32位值
2、编辑名称为 TaskbarSi 值 0 太小不好看
3、任务管理器重启 **Window资源管理器**

#### 更改状态栏位置(无效)
> 打开注册表: `计算机\HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\StuckRects3`

1、编辑Settings文件
2、双击 FE 下的 03 改成 01
3、任务管理器重启 **Window资源管理器**
