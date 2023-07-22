---
title: kali
---

## 配置  apt-get

```shell
vim /etc/apt/sources.list

#中科大
deb http://mirrors.ustc.edu.cn/kali kali-rolling main non-free contrib
deb-src http://mirrors.ustc.edu.cn/kali kali-rolling main non-free contrib
#阿里云
deb http://mirrors.aliyun.com/kali kali-rolling main non-free contrib
deb-src http://mirrors.aliyun.com/kali kali-rolling main non-free contrib
#清华大学
deb http://mirrors.tuna.tsinghua.edu.cn/kali kali-rolling main contrib non-free
deb-src https://mirrors.tuna.tsinghua.edu.cn/kali kali-rolling main contrib non-free
#163 
deb http://mirrors.163.com/debian wheezy main non-free contrib 
deb-src http://mirrors.163.com/debian wheezy main non-free contrib 
deb http://mirrors.163.com/debian wheezy-proposed-updates main non-free contrib 
deb-src http://mirrors.163.com/debian wheezy-proposed-updates main non-free contrib 
deb-src http://mirrors.163.com/debian-security wheezy/updates main non-free contrib 
#东软大学
deb http://mirrors.neusoft.edu.cn/kali kali-rolling/main non-free contrib
deb-src http://mirrors.neusoft.edu.cn/kali kali-rolling/main non-free contrib

# 更新源
apt-get update

apt-get clean
```

### 配置 python

```shell
# 源码安装
# 进入目录 ./
sudo ./configure  --enable-optimizations --prefix=/usr/local/python/
sudo make
sudo make install

# 手动安装 pip3
sudo apt --fix-broken install python3-pip

# 安装youget
pip3 install you-get
```

