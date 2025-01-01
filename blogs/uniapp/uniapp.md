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

### 页面生命周期
	import {
		onLoad,
		onReady
	} from '@dcloudio/uni-app'

```text
函数名	说明	平台差异说明	最低版本
onInit	监听页面初始化，其参数同 onLoad 参数，为上个页面传递的数据，参数类型为 Object（用于页面传参），触发时机早于 onLoad	百度小程序	3.1.0+
onLoad	监听页面加载，该钩子被调用时，响应式数据、计算属性、方法、侦听器、props、slots 已设置完成，其参数为上个页面传递的数据，参数类型为 Object（用于页面传参），参考示例。		
onShow	监听页面显示，页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面		
onReady	监听页面初次渲染完成，此时组件已挂载完成，DOM 树($el)已可用，注意如果渲染速度快，会在页面进入动画完成前触发		
onHide	监听页面隐藏		
onUnload	监听页面卸载		
onResize	监听窗口尺寸变化	App、微信小程序、快手小程序	
onPullDownRefresh	监听用户下拉动作，一般用于下拉刷新，参考示例		
onReachBottom	页面滚动到底部的事件（不是scroll-view滚到底），常用于下拉下一页数据。具体见下方注意事项		
onTabItemTap	点击 tab 时触发，参数为Object，具体见下方注意事项	微信小程序、QQ小程序、支付宝小程序、百度小程序、H5、App、快手小程序、京东小程序	
onShareAppMessage	用户点击右上角分享	微信小程序、QQ小程序、支付宝小程序、抖音小程序、飞书小程序、快手小程序、京东小程序	
onPageScroll	监听页面滚动，参数为Object	nvue不支持	
onNavigationBarButtonTap	监听原生标题栏按钮点击事件，参数为Object	App、H5	
onBackPress	监听页面返回，返回 event = {from:backbutton、 navigateBack} ，backbutton 表示来源是左上角返回按钮或 android 返回键；navigateBack表示来源是 uni.navigateBack；详见	app、H5、支付宝小程序	
onNavigationBarSearchInputChanged	监听原生标题栏搜索输入框输入内容变化事件	App、H5	1.6.0
onNavigationBarSearchInputConfirmed	监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。	App、H5	1.6.0
onNavigationBarSearchInputClicked	监听原生标题栏搜索输入框点击事件（pages.json 中的 searchInput 配置 disabled 为 true 时才会触发）	App、H5	1.6.0
onShareTimeline	监听用户点击右上角转发到朋友圈	微信小程序	2.8.1+
onAddToFavorites	监听用户点击右上角收藏	微信小程序、QQ小程序	2.8.1+
```

```text
uniapp中组件生命周期函数和页面生命周期函数的执行顺序
不包含组件的页面
onLoad > onShow > onReady

包含组件的页面
onLoad > onShow > onBeforeMount > onReady > onMounted
```

### 尺寸单位
```text
uni-app 支持的通用 css 单位包括 px、rpx

px 即屏幕像素
rpx 即响应式 px，一种根据屏幕宽度自适应的动态单位。以 750 宽的屏幕为基准，750rpx 恰好为屏幕宽度。屏幕变宽，rpx 实际显示效果会等比放大，但在 App（vue2 不含 nvue） 端和 H5（vue2） 端屏幕宽度达到 960px 时，默认将按照 375px 的屏幕宽度进行计算，具体配置参考：rpx 计算配置 。
```

### 全局样式
app.vue为全局样式，uni.scss中样式可以直接复制粘贴引入，需要注意自定义样式以；结尾，并且scss为预编译，得重启项目


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


### 插件
在日常编写中发现不断的使用import太麻烦,每次使用组件都需要导入
可以通过unplugin-auto-import插件来完成
```text
npm install unplugin-auto-import
```
vite.config.js
```text
// 导入 Vite 的配置函数
import { defineConfig } from 'vite';
// 导入 UniApp 的 Vite 插件
import uni from '@dcloudio/vite-plugin-uni';
// 导入自动导入插件
import AutoImport from 'unplugin-auto-import/vite';
 
// 定义 Vite 配置
export default defineConfig({
    plugins: [
        // 使用 UniApp 插件
        uni(),
        
        // 自动导入配置
        AutoImport({
            imports: [
                // 预设导入库
                'vue', // 自动导入 Vue 相关函数
                'uni-app' // 自动导入 UniApp 相关函数
            ]
        })
    ]
});
```

### 交互反馈
```text
uni.showToast(OBJECT)显示消息提示框。

uni.hideToast()隐藏消息提示框。

uni.showLoading(OBJECT)显示 loading 提示框, 需主动调用 uni.hideLoading 才能关闭提示框。

uni.showModal(OBJECT)弹框

uni.showActionSheet(OBJECT)从底部向上弹出操作菜单、选项框
```

### 导航条
```text
uni.setNavigationBarTitle(OBJECT)动态设置当前页面的标题。

uni.setNavigationBarColor(OBJECT)设置页面导航条颜色。如果需要进入页面就设置颜色，请延迟执行，防止被框架内设置颜色逻辑覆盖

uni.showNavigationBarLoading(OBJECT)在当前页面显示导航条加载动画。

uni.hideNavigationBarLoading(OBJECT)在当前页面隐藏导航条加载动画。

uni.hideHomeButton(OBJECT)隐藏返回首页按钮。

```
