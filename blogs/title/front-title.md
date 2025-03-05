---
title: 前端面试常见题笔记(个人总结)
date: 2025/3/3
tags:
 - 面试
categories:
 - 面试
---

# Vue2 数据传递
子传父
```text
自定义事件
事件总线
Vuex状态管理库
```
父传子
```text
props 是父组件向子组件传递数据的主要方式。
可以传递静态数据、动态数据、复杂数据（对象、数组）以及方法。
子组件可以通过 props 验证机制确保数据的正确性。
使用 $attrs 可以传递未声明的属性。
```

# Vue2 和 Vue3 区别
```text

```

# 前端优化
性能优化是提升网页加载速度和运行效率的关键。以下是一些常见的优化方法：
```text
1. 减少资源体积
压缩代码：使用工具（如 Webpack、Terser）压缩 JavaScript、CSS 文件。

图片优化：使用合适的图片格式（如 WebP），压缩图片大小，使用懒加载。

Tree Shaking：移除未使用的代码（通过 Webpack 等工具实现）。

2. 减少 HTTP 请求
合并文件：将多个 CSS 或 JS 文件合并为一个文件。

使用雪碧图：将多个小图标合并为一张图片，减少请求次数。

使用 HTTP/2：支持多路复用，减少请求开销。

3. 缓存优化
浏览器缓存：设置 Cache-Control 和 ETag，利用浏览器缓存静态资源。

Service Worker：实现离线缓存和资源预加载。

4. 代码优化
减少重绘和回流：避免频繁操作 DOM，使用 transform 和 opacity 等属性优化动画。

防抖和节流：减少高频事件（如滚动、输入）的处理频率。

5. 加载策略
异步加载：使用 async 或 defer 加载 JavaScript 文件。

预加载：使用 <link rel="preload"> 提前加载关键资源。

CDN 加速：使用 CDN 分发静态资源，减少延迟。
```

# 懒加载
1. 图片懒加载
```text
原理：只加载当前视口内的图片，当用户滚动时再加载其他图片。
实现方式：
使用 IntersectionObserver API 监听图片是否进入视口。
使用第三方库（如 lozad.js 或 lazysizes）。
```
2. 组件懒加载
```text
原理：在需要时再加载组件，减少初始加载时间。
实现方式：
使用 Vue 的 defineAsyncComponent 或 React 的 React.lazy。
```
3. 路由懒加载
```text
原理：在访问某个路由时再加载对应的组件。
实现方式：
使用 Vue Router 或 React Router 的动态导入功能。
```
