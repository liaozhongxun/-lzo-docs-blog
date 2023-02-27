---
title: uni-app 2023
---
> uni-app基于vue和微信小程序, 一套代码可以发布到ios、Android、h5、以及各种小程序平台

## 开启uniapp
原生开发：早期移动端主要 有 `IOS` 和 `Android` 两大平台开发**原生APP**

-   优点：原生APP **体验、性能、兼容性**都非常好，并可以非常方便使用硬件设备，如摄像头
-   缺点：两个需要单独开发，**消耗时间和成本**，上线周期繁琐，适合大公司

跨平台开发

-   优点：**一套代码，多端运行**，用js实现一套代码，打包生成到各个平台（IOS、Android、各种小程序、H5应用）
    -   成本低、周期短
-   缺点：只适合根系统交互少，页面不太复杂的场景，硬件支持相对不好（不适合做高性能、复制用户体验，定制高的程序）

跨平台发展史

-   **<2009**：   HTML+CSS+JS实现移动端开发
-   **2009-2014**：`PhoneGap、Cordova`等框架啊
-   **2015**：**ReactNative**
-   **2016**：阿里开源 **Weex**
-   **2017**：谷歌公布了 **Flutter** 需要掌握 **Dart**  （移动端和PC端都支持）
-   **2017**：**微信小程序**、**uni-app**（底层利用weex）、**Taro** （底层基于 ReactVative）等一下小程序框架啊

uniapp

-   优点：容易开发成本低、基于vue、轻、适合开发app、活跃度高、支持 `IOS` 和 `Android` `web` `小程序` `快应用`
-   介绍：uni 统一的意思，使用 [Hbuilder X](https://uniapp.dcloud.net.cn/) 开发
-   创建：Hbuilder X 中**可视化界面创建**，也能用vue-cli命令行创建
-   对比小程序：支持跨平台、定制低，兼容稳定稍差
-   如果开发**微信小程序**，最终会通过微信小程**序专有API**转换生成**wxss**那种代码

![](../../static\img\2023-02-26_110241.jpg)

### Hbuilder X 
配置[下载](https://www.dcloud.io/hbuilderx.html)

-   快捷键：工具 > 预设快捷键 选择熟悉的 可以选择vscode
-   注册一个账号

运行

-   浏览器
-   微信小程序
    -   第一次需要指定微信开发者工具安装路径
    -   并且在开发者工作的**设置 安全**中开启服务端口，运行时就会自动打开（或手动去unpackage目录下打开）
    -   开发**百度、支付宝**下程序，需要安装对应的开发者工具，配置好安装路径就会自动启动
-   手机模拟器（需要先安装模拟器）
    -   安卓使用`mumu`，ISO使用`X Code`
    -   模拟器（Android还需要配置 adb命令行工具）
    -   选择运行App到手机或模拟器
-   运行到真机
    -   找到开发者模式，授权USB连接，adb桥接打开，就能直接从运行到Android App基座运行调试
    -   自动搜索到真机的标准基座
    -   遇到问题: 连接usb不弹出授权弹窗，要去用户目录 找到 .android 下的 adbkey 删除，重启HBuilder X，再插入USB


## 目录结构
### pages.json

>   页面配置文件，路由、页面标题、窗口信息、页面样式 （微信的 app.json）

```json
{
	"pages": [
		{
			"path": "pages/index/index",
			"style": {
				"navigationBarTitleText": "uni-app"
			}
		}
	],
	"globalStyle": {  // 配置公共窗口信息
        "navigationBarBackgroundColor": "#F8F8F8", // 窗口背景颜色
		"navigationBarTitleText": "uni-app", // 窗口标题
        "navigationBarTextStyle": "black", // 窗口标题颜色
		"backgroundColor": "#F8F8F8"
	},
    "tabBar": { // ===================================配置底部菜单
	    "color": "#7A7E83",  //颜色
	    "selectedColor": "#3cc51f",  //选中的颜色
	    "borderStyle": "black",
	    "backgroundColor": "#ffffff",
		"position":"top", //仅微信小程序支持
	    "list": [{
	        "pagePath": "pages/index/index",
	        "iconPath": "static/logo.png", //图标路径
	        "selectedIconPath": "static/logo.png", //选中的图标路径
	        "text": "首页"
	    }, {
	        "pagePath": "pages/about/new_file",
	        "iconPath": "static/logo.png",
	        "selectedIconPath": "static/logo.png",
	        "text": "关于"
	    }]
	},
	"uniIdRouter": {}
}
```
### App.vue

>   入口组件，所有页面都在 App.vue 下切换，本身并不是页面，也没有template元素

-   应用的什么周期

```javascript
// 应用的什么周期
export default {
    onLaunch: function() {
        console.log('App Launch')
    },
    onShow: function() {
        console.log('App Show')
    },
    onHide: function() {
        console.log('App Hide')
    }
}
```

-   全局数据

```javascript
export default {
    globalData:{
        name:'lzo'
    }
}

// pages 中获取
onLoad() {
    // 拿到全局 App.vue 的 globalData 中的数据
    const app = getApp();
    console.log(app.globalData.name)
},
```

-   定义全局样式，页面中style定义**局部样式**默认有**scoped作用域**了

```css
<style>
	/*每个页面公共css */
	@import url('./static/css/base.scss');

	.globalTestClass {
		background-color: #f00 !important;
	}
	page{
		border: 1px solid #f0f;
		width: 100%;
		height:100%;
	}
</style>
```
### pages

>   页面存放位置

#### 路由跳转

[uni.navigateTo](https://uniapp.dcloud.io/api/router?id=navigateto)

```javascript
//tabBar页面，并关闭其他非tabBar页面
uni.switchTab({ 
    url: 'pages/about/new_file'
});

uni.navigateTo({
    url: 'pages/about/new_file'
});

//替换到新页面
uni.redirectTo({
    url: 'xxx'
});

// 返回上两级页面
uni.navigateBack({
	delta: 2
});

// 1、跳转通过?传的参数，子页面onLoad 通过生命周期onLoad获取参数
onLoad(option) {
    //监听页面加载 ，并拿到上级页面传递的参数
    //只会触发一次页面切换时不会触发
    console.log("页面加载了"+ option)
},
    
// 2、事件总线
// 3、全局数据 globalData
// 4、本地数据存储
// 5、pinia 等状态管理库
```


### main.js

>   uni-app 的入口文件，初始化vue 、定义全局组件、定义全局属性、安装插件如pinia等

### manifest.json 

>   清单配置文件

```json
{
    "appid" : "__UNI__EDA2F03", // 为UNI项目生成的唯一ID
    /* 小程序特有相关 */
    "mp-weixin" : {
        "appid" : "wx3ffcef9fc255b0bc",
        "setting" : {
            "urlCheck" : false
        },
        "usingComponents" : true
    },
}
```




### uni.scss

>   全局变量，内部变量，任意页面随意使用，修改后需要重新编译

1.   可以重新uni-app内置样式变量
2.   定义自定义全局变量，**每个页面都可以使用**
     1.   `支持 @import 导入外部文件`
3.   重新uni-ui内置变量

### unpackage 

>   打包文件存放路径

## UI库

#### [uni-ui](https://uniapp.dcloud.net.cn/component/uniui/quickstart.html)

1、全局导入

2、按需导入（需要登录）

​	   直接从文档中的插件时长导入到`HBuilder X` 中，选择项目，组件就会安装到`uni_modules`下，**无需注册引入**，直接使用

## 各个端的兼容问题

1、隐藏滚动条问题

>   **scroll-view** 的 **:show-scrollbar="false"** 隐藏滚动条 h5 端不生效，需要找到对应元素将 ::--webkit-scrollar{display:none}

2、微信小程序本地背景图片

>   要么使用**服务器上的图片**，要么使用**base64**当做背景图片，uni中小于40kb运行到小程序会自动转base64, 如果用太大的本地图片单做背景，小程序端将无法显示