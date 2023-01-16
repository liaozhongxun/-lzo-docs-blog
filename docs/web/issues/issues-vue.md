---
title: vue
---
### mixin混入
> mixin:里面的属性方法是独立的多组件调用不相互影响
> vuex:里面的数据是共用的，而mixin数据在各个组件中是私有的
> 组件:父组件与子组件是相对独立的，而mixin是在父组件对象中添加新的数据，直接合成新的组件
> 优先级:如果名称相同，组件中的方法覆盖mixin中的方法，mixiny优先级别低

#### 全局混入
```javascript
//mixin/mixin.js
import Vue from 'vue'
Vue.mixin({
    data(){
        return{

        }
    },
    methods:{
        //全局关闭dialogChannel组件弹窗
        dialogChannelsClose(name){
            this.$set(this,name,false);
        },
    },
})

//main.js
import @/mixin/mixin.js

```
#### 局部混入
```javascript
//mixins/index.js
export const mymixins = {
    data(){
        return{
        }
    },
    methods:{
        aaa(){
            console.log('1111')
        }
    }
}

//组件中使用局部混入
import { mymixins } from "@/mixins/index.js";
export default {
    mixins: [mymixins],
}
 

```
### 插件
```JavaScript
//定义
MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或 property
    Vue.myGlobalMethod = function () {
        //xxxx
    }
}

//使用
Vue.use(MyPlugin, { someOption: true })
```
### vue 模板处理本地图片路径问题

```vue
<!-- 固定图片 -->
<template>
    <div class="index-page">
        <!-- 字符串直接引入是可以正常加载 -->
        <img src="@/assets/images/head_g.png" />
        
        <!-- 如果是动态数据 -->
        <img :src="imgurl" />
    </div>
</template>

<script setup>
    const imgurl="@/assets/images/head_g.png" // x
    
    <!-- webpack环境 直接使用无法加载的-->
    const imgurl= require("@/assets/images/head_g.png") // √
    
     <!-- vite环境 和 webpack环境 -->
    import imgurl from "@/assets/images/head_g.png" // √
    
</script>
```

```vue
<!-- 变量中的图片 -->
<template>
    <div class="index-page">
        <!-- webpack环境 -->
        <div v-for="item in list">
            <img :src="require(`../assets/images/${item}`)" alt="">
        </div>
        
        <!-- vite环境 -->
        <div v-for="item in list">
            <img :src="getSrc(item)" alt="">
        </div>
    </div>
</template>

<script setup>
    const list = ["head_g.png", "head_g.png"];
	
    
    // vite 环境
    const getSrc = (item) => {  // 错误
        import imgurl from "xxx"; // 这个是有问题的，import 被Js解析的，执行逻辑代码的时候以及跳过了解析阶段
        return imgurl
    }
    
    const getSrc = (item) => { // 正确，必须要用相对路径
        return new URL(`../assets/images/${item}`, import.meta.url).href;
    }
    
</script>
```





### 彻底关闭eslint

```shell
"rules": {
    "no-console":  "off",
    "no-debugger":  "off",
    "prettier/prettier": "off",
    "no-unused-vars":"off",
    "no-empty":"off"
}
```
### vue add 与 npm install 
```shell
npm install 只会下载包不会改变项目中文件或文件内容
vue add 不加会安装下载包，还好添加需要的配置文件，例如 vue add router 會幫你配置 router.js
        安装 electron-builder 会在 package.js script自动添加上指令 和 src/background.js 主进程等
```
