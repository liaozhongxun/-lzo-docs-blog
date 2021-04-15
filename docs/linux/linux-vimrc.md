---
title: vimrc
---
## 配置文件 and 插件管理

### 第三方配置

-   amix/vimrc

```shell
git clone --depth=1 https://github.com/amix/vimrc.git ~/.vim_runtime
sh ~/.vim_runtime/install_awesome_vimrc.sh
# 直接生成.vimrc
```

### 插件管理

-   插件管理器`vimplus`
    -   `~/.vimrc为vimplus`的默认配置，一般不做修改
    -   `~/.vimrc.custom.plugins`为用户自定义插件列表，用户增加、卸载插件请修改该文件
    -   `~/.vimrc.custom.config`为用户自定义配置文件，一般性配置请放入该文件，可覆盖~/.vimrc 里的配置
-   插件存放在 `~/.vim/plugged`下
-   新插件可以直接复制进去或 vim 中执行`:plugInstall`进行安装
-   [github](https://github.com/chxuan/vimplus)

### 配置文件
``` python
set nu "行号
set clipboard=unnamed "vim与外界相互复制
set hlsearch "搜索匹配的高亮
set cursorline "行下划线
set noswapfile "意外关闭不需要wap文件

set softtabstop=4 "tab的步长
set shiftwidth=4 ">><<缩进的步长
set expandtab "设置可把tab转成空格 :retab 可以直接重置
set showtabline=1 "tabe的标签页 0:不会出现页签、1:大于1页出现、2:只有1页也出现
set splitbelow "new分屏时，新页面在下
set splitright "vnew分屏时，新页面在右
set ignorecase "搜索无视大小写 
set incsearch "搜索时匹配到的直接高亮,不要的回车
set ruler "行列位置标注
set warp "可折行
set showcmd "查看按键
set showmode "状态栏查看模式
set scrolloff=3 "距离上下多少开始滚动
set list "显示一下隐藏符号
autocmd 一个事件 *文件 :set xxx "符合某个条件做什么事情
":set all 查看所以可以用的设定

" color
syntax on "开启语法高亮
"colorscheme default
colorscheme darkxxxx "指定主题

" filetype 读取文件类型，o新增行时自动缩进
filetype on
filetype indent on
filetype plugin on

":h key-notation  查看自定义键位表示方法
":map  查看map的相关定义
" map|unmap  一般模式、选择模式键位设置
" nmap|nunmap 一般模式
" vmap|vunmap 选择模式
" imap|iunmap 插入模式
nmap <C-v> p "一般模式下 ctrl+v 的功能设置成粘贴
nmap <Tab> >> "一般模式下 Tab 的功能设置成缩进

" noremap 与 map作用类似但是避免死循环问题 

" try
try
  error
catch
  xxx 
endtry
```
### vscodevim
```javascript
{
        //普通模式下非递归键位绑定，在原生vim中是noremap
    "vim.normalModeKeyBindingsNonRecursive":[
        {
            "before":["<Enter>"],
            "after":["o"]
        },
    ],
    //命令行模式非递归键位绑定，在原生vim中等同于norecmap
    "vim.commandLineModeKeyBindingsNonRecursive": [
         
    ],
    //指的是插入模式下键位绑定，在原生vim里面指的是imap
    "vim.insertModeKeyBindings":[
        {
            "before":["<C-h>"],
            "after":["<Left>"]
        },
        {
            "before":["<C-l>"],
            "after":["<Right>"]
        },
        {
            "before":["<C-j>"],
            "after":["<Down>"]
        },
        {
            "before":["<C-k>"],
            "after":["<Up>"]
        },
        {
            "before":["j","j"],
            "after":["<Esc>"]
        },
    ]
}
```