---
title: 数据可视化话 - canvas
---



## 概念

**2004** 年引入，首先被**火狐**和**Chrome**实现，被**W3C提议为**下一代标准，最后成为`Html5`的一个**标签**

提供很多**JavaScript绘图API**，配合 `canvas` 元素**主要绘制**各种**2D图形**

也能使用`canvas` 提供的 `WebGL API` 绘制一些 **3D 图形**

应用场景

​	**动画**、**游戏画面**、**数据可视化**、**图片编辑**、**视频处理**等

兼容性

​	**不支持 IE8**

缺点

​     **占内存**、**只能通过JavaScript脚本操作**、**放大像素话(模糊失真)**

### canvas标签

-   `canvas` 标签只有`width`和`height`两个属性，默认300 和 150
-   必须有结束标签
-   通过`canvas.getContext()` 方法检测浏览器是否支持

```html
<canvas id='canvas1'>不兼容显示这里提示文字</canvas>

<script>
    /*  */
	window.onload = function(){
        /* 获取canvas容器  */
        var can = document.getElementById('canvas1');
        can.width = '1000';
        can.height = '150';
        
        /**
         * 创建一个画布, 
         *     ctx 绘图上下文，提供绘图指令，通过 ctx 在画布上各种绘制
         */
        var ctx = can.getContext('2d'); /* 2d 或 webgl */
    }
</script>
```

>   canvas 的坐标系统

canvas画布默认被**网格(坐标系)覆盖**，一个单元相当于 canvas元素的一像素，**网格原点**默认位于**左上角 0,0**

**所有绘制**都相对于**原点**，图形变换后，绘制都基于新的坐标系

### 绘制api

两种绘制方式：**矩形绘制** 和 **路径绘制（点列表，通过线段连接）**

矩形的绘制方法类型：**fill 开头**的方法，得到一个**实心的矩形**，**stroke 开头**的方法，得到一个矩形**边框或描边**

>   矩形绘制

```html
<canvas id='canvas1'>不兼容显示这里提示文字</canvas>

<script>
    /*  */
	window.onload = function(){
        var can = document.getElementById('canvas1');
        can.width = '1000';
        can.height = '150';
       
        var ctx = can.getContext('2d'); 
         
        /* 1、设置绘制样式 */
        /* 2、绘制，指定位置与绘制范围 */
        /* 3、清除，指定清除的位置与清除范围 */
    }
</script>
```



