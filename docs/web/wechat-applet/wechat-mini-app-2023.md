---
title: 微信小程序总结
---

## 开启微信小程序

### 微信开发者工具

## 目录结构

### app.json

>   页面配置文件，路由、页面标题、窗口信息、页面样式 

```json
{
  "pages": [
    "pages/index/index", // 没style，页面的私有配置在 index.json 中配置
  ],
  "window": { // 配置公共窗口信息
    "navigationBarBackgroundColor": "#fff",   // 窗口背景颜色
    "navigationBarTitleText": "小程序版本",   // 窗口标题
    "navigationBarTextStyle": "black",   // 窗口标题颜色
    "backgroundTextStyle": "light",
  },
  "tabBar": {
    "list": [{
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "/static/images/icos/home.png",
        "selectedIconPath": "/static/images/icos/home_active.png"
      },
      {
        "pagePath": "pages/groupchat/groupchat",
        "text": "群聊",
        "iconPath": "/static/images/icos/friends.png",
        "selectedIconPath": "/static/images/icos/friends_active.png"
      },
      {
        "pagePath": "pages/user/user",
        "text": "我",
        "iconPath": "/static/images/icos/my.png",
        "selectedIconPath": "/static/images/icos/my_active.png"
      }
    ]
  },
  "usingComponents": {
    "van-button": "/miniprogram_npm/@vant/weapp/button/index",
    "van-dialog": "/miniprogram_npm/@vant/weapp/dialog/index",
    "van-toast": "@vant/weapp/toast/index",
    "van-notify": "@vant/weapp/notify/index",

    "van-field": "@vant/weapp/field/index",
    "van-radio": "@vant/weapp/radio/index",
    "van-radio-group": "@vant/weapp/radio-group/index",
    "van-cell": "@vant/weapp/cell/index",
    "van-cell-group": "@vant/weapp/cell-group/index"
  },
  "sitemapLocation": "sitemap.json",
  "lazyCodeLoading": "requiredComponents"
}
```


### app.js
-   程序的生命周期 [文档](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html)

```javascript
// 必须再app.js中调用，且只能调用一次
App({
    onLaunch(options){ // 只执行1次
        console.log("小程序生命周期，初始化");
        // 1. 执行登录等业务逻辑
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        })
        //1.1 如果登录成功就将获取的数据储存到 store
        //1.2 只有一个，且是全局共享的，所以 共享数据可以放这里 this.globalData 

         wx.onAppRoute((res) => {} // 监听全局路由跳转
    },
    onShow(options){ // 执行多次
        // 判断用户进入小程序的场景（群聊，扫一扫）
        console.log(options.scene) // 场景编码 主入口1001
        console.log("小程序生命周期，切换到前台");
    },
    onHide(){
        console.log("小程序生命周期，切换到后台");
    }
})
```

-   全局数据

```javascript
App({
    globalData: { // 自定义随机对象，储存全局属性
       name:'lzo'
    }
})

// pages 中获取
const app = getApp(); // 通过app使用全局方法和全局数据
console.log(app.globalData.name)
```

-   全局样式 app.wxss（uni 可以在 App.vue页面的style中）

### pages

>   页面存放位置

#### 路由跳转

```javascript
// 跳转tabBar页面 并关闭其他非tabBar页面
wx.switchTab({  
    url: '/pages/test/test',
})

// 保留单前页面，跳转到应用某个页面
wx.navigateTo({
    url: 'url?a=1&b=2'
})

// 关闭所有页面，打开程序内的某个页面（经过多个页面时，经过的页面都关闭）
wx.reLaunch({
   url: 'url',
})

// 返回上一个页面
wx.navigateBack(number); // number 默认 1，最多返回到首页 

//1、跳转通过?传的参数 url 页面 onLoad（options）中获取参数
```

