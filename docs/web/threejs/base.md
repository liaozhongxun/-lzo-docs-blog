---
title: Three-基础
---

## 概念

### 学习步骤

第一天：场景、相机、几何体、材质、渲染器、控制器、坐标轴、向量、requestAnimationFrame 实现动画、Clock 时钟、gsap 动画库、窗口 resize 更新场景、像素比、全屏元素、dat.gui（UI 界面变量控制库）

第二天：物体属性认识、自定义几何体、系统提供几何体详解、材质详解、材质纹理、纹理重复偏移、纹理的大小显示设置

### 专业名词

- **场景** （Scene） ：所有物体都有放在场景上面
- **相机** （Camera）：相机让我们能看到场景里的物体
- **几何体** （BoxGeometry 等各种几何体。。。）
  - 文档位置：`https://localhost:8082/docs/index.html#api/zh/geometries/BoxGeometry`
  - `position 位移`、`scale 缩放`、`rotation 旋转`
- **材质** （Material）: 设置物体皮肤
  - 设置纹理
    - 纹理加载器 THREE.TextureLoader()
    - 纹理属性
- **物体** ：**几何体**加**材质**，通过 `THREE.Mesh` 方法形成
  - 物体.geometry 得到几何体信息
  - 物体.material 得到材质信息
  - 物体.attributes 储存几何体相关属性
    - `position`: 有每个面，每个点，xyz 的位置形成的数组列表
    - `uv`:几何体展开后的平面图信息
- **渲染器** （Renderer）：渲染场景上的物体
- **控制器** （OrbitControls）：轨道控制器，控制查看物体
- **坐标轴** （AxesHelper）：坐标轴辅助器（红色 X 轴、绿色 Y 轴、蓝色 Z 轴）
- **二维** （Vector2）
- **三维** （Vector3）

### 最基础的引用

```javascript
// 1、创建场景
const scene = new THREE.Scene();

// 2、创建透视相机 （还有其他相机）
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidht / window.innerHeight,
  0.1,
  1000
); // 角度、宽高比例、近端、远端
// 设置位置，并添加到场景中
camera.position.set(0, 0, 10);
// 将相机添加到场景
scene.add(camera);

// 3、添加物体
// 创建几何体
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
// 创建材质
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
// 根据几何体和材质创建物体
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
// 将物体添加到场景
scene.add(cube);

// 4、初始化渲染器
const renderer = new THREE.WebGLRenderer();
// 设置渲染器（canvas）大小
renderer.setSize(window.innerWidth, window.innerHeight);
// 将webgl渲染的canvas内容添加到body
document.body.appendChild(renderer.domElement);
// 使用渲染器（通过相机将场景渲染进来）
renderer.render(scene, camera);
```

## 几何体-物体
