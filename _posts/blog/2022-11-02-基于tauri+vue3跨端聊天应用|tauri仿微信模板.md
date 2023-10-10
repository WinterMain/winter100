---
layout: post
title:  基于tauri+vue3跨端聊天应用|tauri仿微信模板
date:   2022-11-02T14:37:51.000Z
description: 最近tauri跨端框架比较热门，在github上关注度持续上升。tauri对标electron，具有体积小、运行快、内存占用小、更高安全性等特性。\[T...
img: 
author: xiaoyan2021
category: blog
answer: 0
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>最近tauri跨端框架比较热门，在github上关注度持续上升。tauri对标electron，具有体积小、运行快、内存占用小、更高安全性等特性。</p><p>&nbsp;</p><p>[TauriVue3Chat聊天](https://www.cnblogs.com/xiaoyan2017/p/16830689.html) 基于tauri+rust+vue3+element-plus等技术开发的跨端聊天程序。</p><p>&nbsp;</p><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1667399402004.png"></figure><p>&nbsp;</p><h2><strong>技术框架</strong></h2><p>&nbsp;</p><p>使用技术：tauri+vue^3.2.37+vite^3.0.2+vuex4+vue-router@4</p><p>UI组件库：element-plus^2.2.17 (饿了么vue3组件库)</p><p>弹窗组件：v3layer（基于vue3自定义pc端弹窗组件）</p><p>滚动条组件：v3scroll（基于vue3模拟滚动条组件）</p><p>矢量图标：阿里iconfont字体图标库</p><p>&nbsp;</p><figure class="image"><img></figure><p><strong>tauri实现主题换肤</strong></p><figure class="image"><img></figure><p><strong>tauri实现朋友圈功能</strong></p><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1667399652453.png"></figure><p>&nbsp;</p><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1667399652256.png"></figure><p>&nbsp;</p><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1667399652256.png"></figure><p><strong>tauri多开窗口</strong></p><pre><code class="language-plaintext">// 关于
const openAboutWin = () =&gt; {
    createWin({
        label: 'about',
        title: '关于',
        url: '/about',
        width: 430,
        height: 330,
        resizable: false,
        alwaysOnTop: true,
    })
}

// 主题换肤
const openThemeSkinWin = () =&gt; {
    createWin({
        label: 'skin',
        title: '换肤',
        url: '/skin',
        width: 630,
        height: 400,
        resizable: false,
    })
}

// 朋友圈
const openQzoneWin = () =&gt; {
    createWin({
        label: 'fzone',
        title: '朋友圈',
        url: '/fzone',
        width: 550,
        height: 700,
        resizable: false,
    })
}</code></pre><p>&nbsp;</p><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1667399689735.png"></figure><p><strong>tauri自定义拖拽区域</strong></p><figure class="image"><img src="https://img2022.cnblogs.com/blog/1289798/202210/1289798-20221027002719131-235938324.png"></figure><p>&nbsp;设置 data-tauri-drag-region&nbsp;属性，在需要拖拽的元素上设置该属性，该区域就能自由拖拽了。</p><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1667399772004.png"></figure><pre><code class="language-plaintext">&lt;template&gt;
    &lt;div class="nt__navbar"&gt;
        &lt;div data-tauri-drag-region class="nt__navbar-wrap"&gt;
            &lt;div class="nt__navbar-title"&gt;
                &lt;template v-if="$slots.title"&gt;&lt;slot name="title" /&gt;&lt;/template&gt;
                &lt;template v-else&gt;{{title}}&lt;/template&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;WinTool :minimizable="minimizable" :maximizable="maximizable" :closable="closable"&gt;
            &lt;slot name="wbtn" /&gt;
        &lt;/WinTool&gt;
    &lt;/div&gt;
&lt;/template&gt;</code></pre><p>&nbsp;</p><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1667399804737.png"></figure><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1667399819977.png"></figure><p>&nbsp;</p><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1667399829057.png"></figure><figure class="image"><img src="https://www.samyoc.com/uploads/users/26987/images/1667399843134.png"></figure><p>Okr，基于tauri+vue3开发跨端聊天程序就分享到这里吧。</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
