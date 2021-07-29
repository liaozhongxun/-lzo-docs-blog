---
title:go
---
[环境配置](https://www.cnblogs.com/huangeh/p/14331987.html)
wget https://dl.google.com/go/go1.10.3.linux-amd64.tar.gz
tar -C /usr/local -zxvf  go1.10.3.linux-amd64.tar.gz

#### 配置环境
> mkdir -p /usr/local/gocode/{src,bin,pkg}

```shell
export GOROOT=/usr/local/go           #Golang源代码目录，安装目录
export GOPATH=/usr/local/gocode        #Golang项目代码目录
export PATH=$GOROOT/bin:$PATH    #Linux环境变量
export GOBIN=$GOPATH/bin        #go install后生成的可执行命令存放路径
```
#### 安装包
> go get github.com/integrii/flaggy 
