---
title: Uniapp学习笔记 
date: 2024/12/24 
tags:
 - uni-app 
categories:
 - 前端
---

## 介绍

uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。
[官方文档](https://zh.uniapp.dcloud.io/)

```text
uni-app x，是下一代 uni-app，是一个跨平台应用开发引擎。
uniCloud 是 DCloud 联合阿里云、腾讯云、支付宝云，为开发者提供的基于 serverless 模式和 js 编程的云开发平台。
```

## 项目结构

### 完整结构

```text
┌─uniCloud              云空间目录，支付宝小程序云为uniCloud-alipay，阿里云为uniCloud-aliyun，腾讯云为uniCloud-tcb（详见uniCloud）
│─components            符合vue组件规范的uni-app组件目录
│  └─comp-a.vue         可复用的a组件
├─utssdk                存放uts文件（已废弃）
├─pages                 业务页面文件存放的目录
│  ├─index
│  │  └─index.vue       index页面
│  └─list
│     └─list.vue        list页面
├─static                存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源都应存放于此目录
├─uni_modules           存放uni_module 详见
├─platforms             存放各平台专用页面的目录，详见
├─nativeplugins         App原生语言插件 详见
├─nativeResources       App端原生资源目录
│  ├─android            Android原生资源目录 详见
|  └─ios                iOS原生资源目录 详见
├─hybrid                App端存放本地html文件的目录，详见
├─wxcomponents          存放微信小程序、QQ小程序组件的目录，详见
├─mycomponents          存放支付宝小程序组件的目录，详见
├─swancomponents        存放百度小程序组件的目录，详见
├─ttcomponents          存放抖音小程序、飞书小程序组件的目录，详见
├─kscomponents          存放快手小程序组件的目录，详见
├─jdcomponents          存放京东小程序组件的目录，详见
├─unpackage             非工程代码，一般存放运行或发行的编译结果
├─main.js               Vue初始化入口文件
├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期
├─pages.json            配置页面路由、导航条、选项卡等页面类信息，详见
├─manifest.json         配置应用名称、appid、logo、版本等打包信息，详见
├─AndroidManifest.xml   Android原生应用清单文件 详见
├─Info.plist            iOS原生应用配置文件 详见
└─uni.scss              内置的常用样式变量
```

### 基础结构

```text
pages                 业务页面文件存放的目录
main.js               Vue初始化入口文件
App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期
pages.json            配置页面路由、导航条、选项卡等页面类信息，详见
manifest.json         配置应用名称、appid、logo、版本等打包信息，详见
uni.scss              内置的常用样式变量
static                存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源都应存放于此目录
```

### 小知识点

默认页面为pages目录下的index.vue，语法不像H5传统语法使用div标签去嵌套，而是使用view标签（H5使用div无问题，但小程序、app不支持）

## 基础语法

### 基础语法

```text
若为v2版本，则template下必须只有一个view根节点，及二级子节点只能有一个
若为v3版本，则template下可以有多个view根节点
```

### pages.json

```text
在pages.json中，style.navigationBarTitleText为页面上的标题及标签页的标题
```

### 组件

#### view(相当于div)

手机端无悬停态，有点击态，使用hover-class指定样式

```text
属性名	类型	默认值	说明
hover-class	String	none	指定按下去的样式类。当 hover-class="none" 时，没有点击态效果
hover-stop-propagation	Boolean	false	指定是否阻止本节点的祖先节点出现点击态，App、H5、支付宝小程序、百度小程序不支持（支付宝小程序、百度小程序文档中都有此属性，实测未支持）
hover-start-time	Number	50	按住后多久出现点击态，单位毫秒
hover-stay-time	Number	400	手指松开后点击态保留时间，单位毫秒
```

#### text(相当于span)

```text
属性名	类型	默认值	说明	平台差异说明
selectable	Boolean	false	文本是否可选	
user-select	Boolean	false	文本是否可选	微信小程序
space	String		显示连续空格	钉钉小程序不支持
decode	Boolean	false	是否解码	百度、钉钉小程序不支持
```

#### scroll-view

可滚动视图区域
```text
属性名	类型	默认值	说明	平台差异说明
scroll-x	Boolean	false	允许横向滚动	
scroll-y	Boolean	false	允许纵向滚动	
```

#### swiper
滑块视图容器。(轮播)
```text
属性名	类型	默认值	说明	平台差异说明
indicator-dots	Boolean	false	是否显示面板指示点	
indicator-color	Color	rgba(0, 0, 0, .3)	指示点颜色	
indicator-active-color	Color	#000000	当前选中的指示点颜色	
circular	Boolean	false	是否采用衔接滑动，即播放到末尾后重新回到开头	
autoplay	Boolean	false	是否自动切换
interval	Number	5000	自动切换时间间隔	
duration	Number	500	滑动动画时长	app-nvue不支持
vertical	Boolean	false	滑动方向是否为纵向
```

### image
```text
属性名	类型	默认值	说明	平台差异说明
src	String		图片资源地址	
mode	String	'scaleToFill'	图片裁剪、缩放的模式	
```

### navigator
页面跳转等同于html的a标签
```text
属性名	类型	默认值	说明	平台差异说明
url	String		应用内的跳转链接，值为相对路径或绝对路径，如："../first/first"，"/pages/first/first"，注意不能加 .vue 后缀	
open-type	String	navigate	跳转方式	
```

### button
```text
属性名	类型	默认值	说明	生效时机	平台差异说明
size	String	default	按钮的大小		
type	String	default	按钮的样式类型		
plain	Boolean	false	按钮是否镂空，背景色透明		
disabled	Boolean	false	是否禁用
```

### input
```text
属性名	类型	默认值	说明	平台差异说明
value	String		输入框的初始内容
type	String	text	input 的类型 有效值
text-content-type	String		文本区域的语义，根据类型自动填充 有效值	仅 App-nvue-iOS 支持
password	Boolean	false	是否是密码类型	H5和App写此属性时，type失效
placeholder	String		输入框为空时占位符
@input	EventHandle		当键盘输入时，触发input事件，event.detail = {value}	差异见下方 Tips
@focus	EventHandle		输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度	仅微信小程序、京东小程序、App（2.2.3+） 、QQ小程序、快手小程序支持 height
@blur	EventHandle		输入框失去焦点时触发，event.detail = {value: value}	
@confirm	EventHandle		点击完成按钮时触发，event.detail = {value: value}	
```

### switch
```text
属性名	类型	默认值	说明	平台差异说明
checked	Boolean	false	是否选中	
disabled	Boolean	false	是否禁用	抖音小程序与飞书小程序不支持
type	String	switch	样式，有效值：switch, checkbox	
color	Color		switch 的颜色，同 css 的 color	
@change	EventHandle		checked 改变时触发 change 事件，event.detail={ value:checked}	
```

### checkbox
多选项。在1组check-group中可选择多个
```text

```

### 小知识点

```text
在HBuilder中 敲下view.className 后按回车可自动补全
view与text的区别：text可以复制文本，view不能复制
在template中，不需要ref对象.value，但在js中需要先获取ref对象.value
若想同级别盒子，可以用template包裹，而不用view包裹

css:  
display:inline-block 行级块元素 （默认block）
white-space: nowrap 不换行

```

## 自定义组件
```text
uniapp中自定义组件不需要导包，只需要按照官网格式建目录components即可-》目录-》组件vue
```
