---
layout: post
title:  基于tauri+vite4+pinia跨端后台管理系统应用
date:   2023-07-17T02:27:18.000Z
description: 基于tauri+vue3跨端开发桌面端后台管理系统应用TauriAdmin。使用跨端技术tauri+rust搭配vite构建工具开发桌面端后台管理系统...
img: 
author: xiaoyan2021
category: blog
answer: 0
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><h2>基于<strong>tauri+vue3</strong>跨端开发桌面端后台管理系统应用TauriAdmin。</h2><p>&nbsp;</p><p>使用跨端技术tauri+rust搭配vite构建工具开发桌面端后台管理系统模板。内置了多种布局模板，实现了常用的`图表/表格/表单/图文编辑器/权限控制`等功能</p><p>&nbsp;</p><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1689560949721.png"></figure><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1689560965996.png"></figure><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1689560979335.png"></figure><p>&nbsp;</p><p><a href="https://www.cnblogs.com/xiaoyan2017/p/17552562.html">tauri-admin</a>支持<strong>多窗口切换管理、vue-i18n多语言包、动态路由权限、动态路由缓存</strong>等功能。</p><p>&nbsp;</p><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1689561028980..gif"></figure><p>&nbsp;</p><h2>技术栈</h2><ul><li>编码工具：vscode</li><li>框架技术：tauri+vite^4.2.1+vue^3.2.45+pinia+vue-router</li><li>UI组件库：ve-plus (基于vue3轻量级UI组件库)</li><li>样式处理：sass^1.63.6</li><li>图表组件：echarts^5.4.2</li><li>国际化方案：vue-i18n^9.2.2</li><li>编辑器组件：wangeditor^4.7.15</li><li>缓存插件：pinia-plugin-persistedstate^3.1.0</li></ul><p>&nbsp;</p><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1689561092796..gif"></figure><p>&nbsp;</p><h2>项目结构</h2><p>&nbsp;</p><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1689561122422.png"></figure><p>&nbsp;</p><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1689561141675..gif"></figure><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1689561161937..gif"></figure><p>&nbsp;</p><h2>tauri+vue3多窗口管理</h2><p>基于tauri创建多开窗口，登录窗口切换到主窗口。</p><p>&nbsp;</p><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1689561192463.png"></figure><p>&nbsp;</p><pre><code class="language-javascript">// 创建窗口参数配置

export const windowConfig = {

   label: null,            // 窗口唯一label

   title: '',              // 窗口标题

   url: '',                // 路由地址url

   width: 1000,            // 窗口宽度

   height: 640,            // 窗口高度

   minWidth: null,         // 窗口最小宽度

   minHeight: null,        // 窗口最小高度

   x: null,                // 窗口相对于屏幕左侧坐标

   y: null,                // 窗口相对于屏幕顶端坐标

   center: true,           // 窗口居中显示

   resizable: true,        // 是否支持缩放

   maximized: false,       // 最大化窗口

   decorations: false,     // 窗口是否装饰边框及导航条

   alwaysOnTop: false,     // 置顶窗口

   fileDropEnabled: false, // 禁止系统拖放

   visible: false          // 隐藏窗口

}</code></pre><p>&nbsp;</p><pre><code class="language-typescript">/**

* @desc    窗口管理

* @author: YXY  Q：282310962

* @time    2023.07

*/



import { WebviewWindow, appWindow, getAll } from '@tauri-apps/api/window'

import { relaunch, exit } from '@tauri-apps/api/process'

import { emit, listen } from '@tauri-apps/api/event'



import { setWin } from './actions'



// 创建窗口参数配置

export const windowConfig = {

   label: null,            // 窗口唯一label

   title: '',              // 窗口标题

   url: '',                // 路由地址url

   width: 1000,            // 窗口宽度

   height: 640,            // 窗口高度

   minWidth: null,         // 窗口最小宽度

   minHeight: null,        // 窗口最小高度

   x: null,                // 窗口相对于屏幕左侧坐标

   y: null,                // 窗口相对于屏幕顶端坐标

   center: true,           // 窗口居中显示

   resizable: true,        // 是否支持缩放

   maximized: false,       // 最大化窗口

   decorations: false,     // 窗口是否装饰边框及导航条

   alwaysOnTop: false,     // 置顶窗口

   fileDropEnabled: false, // 禁止系统拖放

   visible: false          // 隐藏窗口

}



class Windows {

   constructor() {

       // 主窗口

       this.mainWin = null

   }



   // 创建新窗口

   async createWin(options) {

       console.log('-=-=-=-=-=开始创建窗口')



       const args = Object.assign({}, windowConfig, options)



       // 判断窗口是否存在

       const existWin = getAll().find(w =&gt; w.label == args.label)

       if(existWin) {

           console.log('窗口已存在&gt;&gt;', existWin)

           if(existWin.label.indexOf('main') == -1) {

               // 自定义处理...

           }

       }



       // 是否主窗口

       if(args.label.indexOf('main') &gt; -1) {

           console.log('该窗口是主窗口')

           // 自定义处理...

       }



       // 创建窗口对象

       let win = new WebviewWindow(args.label, args)

       // 是否最大化

       if(args.maximized &amp;&amp; args.resizable) {

           win.maximize()

       }



       // 窗口创建完毕/失败

       win.once('tauri://created', async() =&gt; {

           console.log('window create success!')

           await win?.show()

       })



       win.once('tauri://error', async() =&gt; {

           console.log('window create error!')

       })

   }



   // 获取窗口

   getWin(label) {

       return WebviewWindow.getByLabel(label)

   }



   // 获取全部窗口

   getAllWin() {

       return getAll()

   }



   // 开启主进程监听事件

   async listen() {

       console.log('——+——+——+——+——+开始监听窗口')



       // 创建新窗体

       await listen('win-create', (event) =&gt; {

           this.createWin(event.payload)

       })



       // 显示窗体

       await listen('win-show', async(event) =&gt; {

           if(appWindow.label.indexOf('main') == -1) return

           await appWindow.show()

           await appWindow.unminimize()

           await appWindow.setFocus()

       })



       // 隐藏窗体

       await listen('win-hide', async(event) =&gt; {

           if(appWindow.label.indexOf('main') == -1) return

           await appWindow.hide()

       })



       // 关闭窗体

       await listen('win-close', async(event) =&gt; {

           await appWindow.close()

       })



       // 退出应用

       await listen('win-exit', async(event) =&gt; {

           setWin('logout')

           await exit()

       })



       // ...

   }

}</code></pre><p>&nbsp;</p><p>&nbsp;</p><h2>整体布局模板</h2><p>&nbsp;</p><p>提供了入图分栏、垂直、水平三种常见布局。</p><p>&nbsp;</p><pre><code class="language-typescript">&lt;script setup&gt;

   import { computed } from 'vue'

   import { appStore } from '@/pinia/modules/app'



   // 引入布局模板

   import Columns from './template/columns/index.vue'

   import Vertical from './template/vertical/index.vue'

   import Transverse from './template/transverse/index.vue'



   const store = appStore()

   const config = computed(() =&gt; store.config)



   const LayoutConfig = {

       columns: Columns,

       vertical: Vertical,

       transverse: Transverse

   }

&lt;/script&gt;



&lt;template&gt;

   &lt;div class="veadmin__container" :style="{'--themeSkin': store.config.skin}"&gt;

       &lt;component :is="LayoutConfig[config.layout]" /&gt;

   &lt;/div&gt;

&lt;/template&gt;</code></pre><p>&nbsp;</p><h2>路由配置</h2><p>&nbsp;</p><pre><code class="language-typescript">/**

* 路由配置

* @author YXY

*/



import { appWindow } from '@tauri-apps/api/window'

import { createRouter, createWebHistory } from 'vue-router'

import { appStore } from '@/pinia/modules/app'

import { hasPermission } from '@/hooks/usePermission'

import { loginWin } from '@/multiwins/actions'



// 批量导入modules路由

const modules = import.meta.glob('./modules/*.js', { eager: true })

const patchRoutes = Object.keys(modules).map(key =&gt; modules[key].default).flat()



/**

* @description 动态路由参数配置

* @param path ==&gt; 菜单路径

* @param redirect ==&gt; 重定向地址

* @param component ==&gt; 视图文件路径

* 菜单信息(meta)

* @param meta.icon ==&gt; 菜单图标

* @param meta.title ==&gt; 菜单标题

* @param meta.activeRoute ==&gt; 路由选中(默认空 route.path)

* @param meta.rootRoute ==&gt; 所属根路由选中(默认空)

* @param meta.roles ==&gt; 页面权限 ['admin', 'dev', 'test']

* @param meta.breadcrumb ==&gt; 自定义面包屑导航 [{meta:{...}, path: '...'}]

* @param meta.isAuth ==&gt; 是否需要验证

* @param meta.isHidden ==&gt; 是否隐藏页面

* @param meta.isFull ==&gt; 是否全屏页面

* @param meta.isKeepAlive ==&gt; 是否缓存页面

* @param meta.isAffix ==&gt; 是否固定标签(tabs标签栏不能关闭)

* */

const routes = [

   // 首页

   {

       path: '/',

       redirect: '/home'

   },

   // 错误模块

   {

       path: '/:pathMatch(.*)*',

       component: () =&gt; import('@views/error/404.vue'),

       meta: {

           title: 'page__error-notfound'

       }

   },

   ...patchRoutes

]



const router = createRouter({

   history: createWebHistory(),

   routes

})



// 全局钩子拦截

router.beforeEach((to, from, next) =&gt; {

   // 开启加载提示

   loading({

       text: 'Loading...',

       background: 'rgba(70, 255, 170, .1)'

   })

   

   const store = appStore()

   if(to?.meta?.isAuth &amp;&amp; !store.isLogged) {

       loginWin()

       loading.close()

   }else if(!hasPermission(store.roles, to?.meta?.roles)) {

       // 路由鉴权

       appWindow?.show()

       next('/error/forbidden')

       loading.close()

       Notify({

           title: '访问限制！',

           description: `&lt;span style="color: #999;"&gt;当前登录角色 ${store.roles} 没有操作权限，请联系管理员授权后再操作。&lt;/div&gt;`,

           type: 'danger',

           icon: 've-icon-unlock',

           time: 10

       })

   }else {

       appWindow?.show()

       next()

   }

})



router.afterEach(() =&gt; {

   loading.close()

})



router.onError(error =&gt; {

   loading.close()

   console.warn('Router Error》》', error.message);

})



export default router</code></pre><p>&nbsp;</p><p>&nbsp;</p><h2>tauri.conf.json配置</h2><p>配置打包参数、初始窗口及系统托盘等参数。</p><p>&nbsp;</p><pre><code class="language-typescript">{

 "build": {

   "beforeDevCommand": "yarn dev",

   "beforeBuildCommand": "yarn build",

   "devPath": "http://localhost:1420",

   "distDir": "../dist",

   "withGlobalTauri": false

 },

 "package": {

   "productName": "tauri-admin",

   "version": "0.0.0"

 },

 "tauri": {

   "allowlist": {

     "all": true,

     "shell": {

       "all": false,

       "open": true

     }

   },

   "bundle": {

     "active": true,

     "targets": "all",

     "identifier": "com.tauri.admin",

     "icon": [

       "icons/32x32.png",

       "icons/128x128.png",

       "icons/128x128@2x.png",

       "icons/icon.icns",

       "icons/icon.ico"

     ]

   },

   "security": {

     "csp": null

   },

   "windows": [

     {

       "fullscreen": false,

       "resizable": true,

       "title": "tauri-admin",

       "width": 1000,

       "height": 640,

       "center": true,

       "decorations": false,

       "fileDropEnabled": false,

       "visible": false

     }

   ],

   "systemTray": {

     "iconPath": "icons/icon.ico",

     "iconAsTemplate": true,

     "menuOnLeftClick": false

   }

 }

}</code></pre><p>&nbsp;</p><p>以上就是tauri+vue3开发跨端后台系统模板的一些分享，希望对大家有所帮助哈~~</p><p>&nbsp;</p><p><a href="https://juejin.cn/post/7249347651787243581">https://juejin.cn/post/7249347651787243581</a></p><p>&nbsp;</p><p><a href="https://juejin.cn/post/7230558835227066427">https://juejin.cn/post/7230558835227066427</a></p><p>&nbsp;</p><p>&nbsp;</p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第4294篇《基于tauri+vite4+pinia跨端后台管理系统应用》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
