---
title: Three-基础
---

## 概念

### 专业名词

- **场景** （Scene） ：所有物体都有放在场景上面
- **相机** （Camera）：相机让我们能看到场景里的物体
- **物体** （BoxGeometry 等各种几何体。。。）
  - `position 位移`、`scale 缩放`、`rotation 旋转`
- **材质** （Material）: 设置物体皮肤
- **渲染器** （Renderer）：渲染场景上的物体
- **控制器** （OrbitControls）：轨道控制器，控制查看物体
- **坐标轴** （AxesHelper）：坐标轴辅助器（红色 X 轴、绿色 Y 轴、蓝色 Z 轴）
- **向量** （Vector3）

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
