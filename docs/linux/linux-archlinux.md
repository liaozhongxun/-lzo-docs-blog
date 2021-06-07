---
title: archlinux
---
[下载](https://wiki.archlinux.org/)
[国内镜像](http://mirrors.163.com/archlinux/iso/2021.06.01/)

## 安装
### 进入配置环境
- 虚拟机安装
- 真假安装win有直接制作U盘启动,
    - linux:`dd bs=4M if=xxx.iso of=/dev/dexxxx(U盘位置) status=progress(看到输出信息) && sync`
- 配置好后选择option -> 高级 -> 从BIOS转UEFI

### 配置与测试
- 检测是否为`UEFI`模式：`ls /sys/firmware/efi/efivars` 
- 真机如果没网通过 `wifi-menu` 链接wifi
- 检测是否联网:`ping www.baidu.com`
- 设置时钟：`timedatectl set-ntp true`
- 设置源:`/etc/pacman.d/mirrorlist`(把国内或是块的放到前面)
- 查看磁盘:`lsblk`
- 分区:`cfdisk`图形界面配置
    - 进入`gpt`
    - 上下贯标定位在`Free space`上,限制下面`new`按钮输入大小(10G、300M)等
    - 新建根目录sda1、家目录sda2、EFI目录sda3(新建需选择进入type,选择EFI System)、生下的建swap(type,选择Linux swap)
    - 设置完成进入 write - yes回车
    - `lsblk|fdisk`查看状态
- 格式化
    - 格式化根目录：`mkfs.ext4 /dev/sda1`
    - 格式化家目录：`mkfs.ext4 /dev/sda2`
    - 格式化EFI：`mkfs.vfat /dev/sda3`
    - 格式化swap：`mkswap -f /dev/sda4`
        - `swapon /dev/sda4`
- 挂载目录
    - mkdir /mnt/home
    - mkdir -p /mnt/boot/EFI
    - 挂载根目录：`mount /dev/sda1 /mnt`
    - 挂载家目录：`mount /dev/sda2 /mnt/home`
    - 挂载EFI：`mount /dev/sda3 /mnt/boot/EFI`
- 安装软件
    - 基础软件：`pacstrap /mnt base`
    - 开发相关包：`pacstrap /mnt base-devel`
- 生成fstab：`genfstab -U /mnt /mnt/etc/fstab`(保存挂载)
- 将系统切换到刚刚安装的环境：`arch-chroot /mnt`

### 进入系统配置
- 配置时区：`ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime`
- 设置时间:`hwclock --systohc`
- 安装VIM：`pacman -S vim`
- 设置语言: `vim /etc/locale.gen` 打开`zh_CN.UTF8 UTF8`
    - 查看 `locale-gen`
    - 设置到配置文件中：`echo 'LANG=zh_CN.UTF-8'` > /etc/locale.conf
- 安装一下网络相关的包:
    - `pacman -S iw wpa_supplicant dialog`
    - 测试联网：`ping www.baidu.com`
- 设置root密码
    - 直接`passwd`
- inter cpu需要:`pacman -S intel-ucode`
- 安装引导程序：`pacman -S grub efibootmgr`
    - 执行 `grub-install --target=x86_64-efi --efi-directory=/boot/EFI --bootloader-id=grub`
    - 配置 `grub-mkconfig -o /boot/grub/grub.cfg`
- 退出exit环境：`exit`
- 卸载/mnt：`umount -R /mnt`
- 重启 reboot