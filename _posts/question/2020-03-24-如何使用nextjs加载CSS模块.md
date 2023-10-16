---
layout: question
title:  如何使用next.js加载CSS模块
date:   2020-03-24T06:30:38.000Z
description: 我正在尝试react-datepicker在我的React App中使用该模块，但是在尝试加载react-datepicker的CSS模块时遇到了困难。我...
img: 
author: 十三神无
category: question
answer: 1
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试</font></font><code>react-datepicker</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的React App中</font><font style="vertical-align: inherit;">使用该</font><font style="vertical-align: inherit;">模块，但是在尝试加载react-datepicker的CSS模块时遇到了困难。</font><font style="vertical-align: inherit;">我正在使用next.js在服务器端呈现我的应用程序。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图实现next提供的css加载器来解决此类问题，但是尝试构建我的应用时</font><a href="https://i.stack.imgur.com/kue4d.png" rel="nofollow noreferrer"><font style="vertical-align: inherit;">出现错误</font></a><font style="vertical-align: inherit;">： 
 </font></font><a href="https://i.stack.imgur.com/kue4d.png" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">error</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的component.js文件： </font></font></p>

<pre><code>import DatePicker from "react-datepicker";<font></font>
import 'react-datepicker/dist/react-datepicker-cssmodules.css';<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的nex.config.js文件： </font></font></p>

<pre><code>const withImages = require('next-images');<font></font>
const withCSS = require('@zeit/next-css');<font></font>
<font></font>
module.exports = withImages(<font></font>
    withCSS({<font></font>
        cssModules: true<font></font>
    })<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您能告诉我我的导入或配置出了什么问题吗？</font><font style="vertical-align: inherit;">或“最小化”属性（显示在错误消息上）是什么意思？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非常感谢</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：我最终通过直接从导入css结束了  
 </font></font><code>&lt;link href="/static/react-datepicker.css" rel="stylesheet" /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><a href="https://github.com/zeit/next.js/issues/299" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原始帖子</font></font></a></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3374篇《如何使用next.js加载CSS模块》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的代码很好！</font><font style="vertical-align: inherit;">与其将CSS导入组件中，不如尝试将其导入到要使用它的页面中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Next.js仅支持自定义页面CSS导入。 </font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
