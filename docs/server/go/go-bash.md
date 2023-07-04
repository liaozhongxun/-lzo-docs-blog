---
title: go
---
[环境配置](https://www.cnblogs.com/huangeh/p/14331987.html)

####  安装

```shell
wget https://dl.google.com/go/go1.10.3.linux-amd64.tar.gz
tar -C /usr/local -zxvf  go1.10.3.linux-amd64.tar.gz
```

#### 配置环境

```shell
# go 工作空间必须包含这三个子目录
mkdir -p /usr/local/gocode/{src,bin,pkg}

# /etc/profile
export GOROOT=/usr/local/go           #Golang源代码目录，安装目录
export GOPATH=/usr/local/gocode        #Golang项目代码目录（工作空间）
export PATH=$GOROOT/bin:$PATH    #Linux环境变量
export PATH=$GOPATH/bin:$PATH    #Linux环境变量
export GOBIN=$GOPATH/bin        #go install后生成的可执行命令存放路径

# source /etc/profile 就安装好了
```
#### 查看安装专题
```shell
# 查看go环境变量路径
which go
# 查看go语言环境信息
go env
# 查看go版本，查看是否安装成功
go version
```
#### 安装包
> go get github.com/integrii/flaggy 

> golang.org 访问艰难
