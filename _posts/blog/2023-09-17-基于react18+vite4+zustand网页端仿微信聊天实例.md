---
layout: post
title:  基于react18+vite4+zustand网页端仿微信聊天实例
date:   2023-09-17T00:11:07.000Z
description: react18.x+arco仿微信网页端聊天|react+vite聊天实例使用vite4构建工具搭建react18.2聊天项目react18-vite...
img: 
author: xiaoyan2021
category: blog
answer: 0
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><h2>react18.x+arco仿微信网页端聊天|react+vite聊天实例</h2><p>&nbsp;</p><p>使用vite4构建工具搭建react18.2聊天项目<a href="https://www.cnblogs.com/xiaoyan2017/p/17695193.html">react18-vite-webchat</a>。实现了发送图文消息、图片/视频预览、红包/朋友圈、动态更换聊天背景等功能。</p><p>&nbsp;</p><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1694908811332.jpg"></figure><p>&nbsp;</p><p>react-webchat全部采用hooks function编码开发页面。</p><p>&nbsp;</p><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1694908855136.jpg"></figure><p>&nbsp;</p><h2>项目目录结构</h2><p>&nbsp;</p><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1694908888732.jpg"></figure><p>&nbsp;</p><h2>技术栈</h2><p>&nbsp;</p><ul><li>编辑器：vscode</li><li>技术栈：react18+vite4+react-router-dom+zustand+sass</li><li>组件库：@arco-design/web-react (字节跳动react组件库)</li><li>状态管理：zustand^4.4.1</li><li>路由管理：react-router-dom^6.15.0</li><li>className拼合：clsx^2.0.0</li><li>对话框组件：rdialog (基于react18 hooks自定义桌面端弹窗组件)</li><li>滚动条组件：rscroll (基于react18 hooks自定义美化滚动条)</li></ul><p>&nbsp;</p><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1694908934182..gif"></figure><p>&nbsp;</p><h2>main.jsx入口配置</h2><p>&nbsp;</p><pre><code class="language-typescript">import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@arco-design/web-react/dist/css/arco.css'
import './style.scss'

ReactDOM.createRoot(document.getElementById('root')).render(&lt;App /&gt;)</code></pre><p>&nbsp;</p><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1694908994509.jpg"></figure><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1694909011832.jpg"></figure><h2>App.jsx模板</h2><p>&nbsp;</p><pre><code class="language-typescript">import { HashRouter } from 'react-router-dom'

// 引入useRoutes集中式路由配置文件
import Router from './router'

function App() {
    return (
        &lt;&gt;
            &lt;HashRouter&gt;
              &lt;Router /&gt;
            &lt;/HashRouter&gt;
        &lt;/&gt;
    )
}

export default App</code></pre><p>&nbsp;</p><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1694909049698.jpg"></figure><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1694909065480.jpg"></figure><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1694909083578.jpg"></figure><h2>react-router-dom路由管理</h2><p>&nbsp;</p><pre><code class="language-typescript">/**
 * 路由配置 by YXY Q：282310962
*/

import { lazy, Suspense } from 'react'
import { useRoutes, Outlet, Navigate } from 'react-router-dom'
import { Spin } from '@arco-design/web-react'

import { authStore } from '@/store/auth'

// 引入路由页面
import Login from '@views/auth/login'
import Register from '@views/auth/register'
const Index = lazy(() =&gt; import('@views/index'))
const Contact = lazy(() =&gt; import('@views/contact'))
const Uinfo = lazy(() =&gt; import('@views/contact/uinfo'))
const NewFriend = lazy(() =&gt; import('@views/contact/newfriend'))
const Chat = lazy(() =&gt; import('@views/chat/chat'))
const ChatInfo = lazy(() =&gt; import('@views/chat/info'))
const RedPacket = lazy(() =&gt; import('@views/chat/redpacket'))
const Fzone = lazy(() =&gt; import('@views/my/fzone'))
const Favorite = lazy(() =&gt; import('@views/my/favorite'))
const Setting = lazy(() =&gt; import('@views/my/setting'))
const Error = lazy(() =&gt; import('@views/404'))

import Menu from '@/layouts/menu'
import Aside from '@/layouts/aside'

// 加载提示
const SpinLoading = () =&gt; {
    return (
        &lt;div className="rcLoading"&gt;
            &lt;Spin size="20" tip='loading...' /&gt;
        &lt;/div&gt;
    )
}

// 延迟加载
const lazyload = children =&gt; {
    // React 16.6 新增了&lt;Suspense&gt;组件,让你可以“等待”目标代码加载,并且可以直接指定一个加载的界面，让它在用户等待的时候显示
    // 路由懒加载报错：react-dom.development.js:19055 Uncaught Error: A component suspended while responding to synchronous input.
    // 懒加载的模式需要我们给他加上一层 Loading的提示加载组件
    return &lt;Suspense fallback={&lt;SpinLoading /&gt;}&gt;{children}&lt;/Suspense&gt;
}

// 路由鉴权验证
const RouterAuth = ({ children }) =&gt; {
    const authState = authStore()

    return authState.isLogged ? (
        children
    ) : (
        &lt;Navigate to="/login" replace={true} /&gt;
    )
}

export const routerConfig = [
    {
        path: '/',
        element: &lt;RouterAuth&gt;&lt;RouterLayout /&gt;&lt;/RouterAuth&gt;,
        children: [
            // 首页
            { index: true, element: &lt;Index /&gt; },

            // 通讯录模块
            { path: '/contact', element: &lt;Contact /&gt; },
            { path: '/uinfo', element: &lt;Uinfo /&gt; },
            { path: '/newfriend', element: &lt;NewFriend /&gt; },

            // 聊天模块
            { path: '/chat', element: &lt;Chat /&gt; },
            { path: '/chatinfo', element: &lt;ChatInfo /&gt; },
            { path: '/redpacket', element: &lt;RedPacket /&gt; },

            // 我的模块
            { path: '/fzone', element: &lt;Fzone /&gt; },
            { path: '/favorite', element: &lt;Favorite /&gt; },
            { path: '/setting', element: &lt;Setting /&gt; },

            // 404模块 path="*"不能省略
            { path: '*', element: &lt;Error /&gt; }
        ]
    },
    // 登录/注册
    { path: '/login', element: &lt;Login /&gt; },
    { path: '/register', element: &lt;Register /&gt; }
]

const Router = () =&gt; useRoutes(routerConfig)

export default Router</code></pre><p>&nbsp;</p><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1694909304080.jpg"></figure><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1694909317125.jpg"></figure><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1694909331937.jpg"></figure><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1694909346516.jpg"></figure><p>ok，以上就是react18开发聊天实例的一些知识分享，希望对大家有所帮助哈。</p><p>&nbsp;</p><p><a href="https://segmentfault.com/a/1190000044116713">https://segmentfault.com/a/1190000044116713</a></p><p>&nbsp;</p><p><a href="https://segmentfault.com/a/1190000044012253">https://segmentfault.com/a/1190000044012253</a></p><p>&nbsp;</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4295篇《基于react18+vite4+zustand网页端仿微信聊天实例》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
