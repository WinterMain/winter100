---
layout: question
title:  Vue / Vuetify-未知的自定义元素：<v-app>-您是否正确注册了组件？
date:   2020-03-19T06:41:56.000Z
description: 我是Vue和Vuetify的新手。我刚刚创建了快速应用程序来检查它们。但是我在一开始遇到问题。尽管遵循了文档中概述的所有步骤，但是vue无法识别vueti...
img: 
author: LEY樱
category: question
answer: 2
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是Vue和Vuetify的新手。</font><font style="vertical-align: inherit;">我刚刚创建了快速应用程序来检查它们。</font><font style="vertical-align: inherit;">但是我在一开始遇到问题。</font><font style="vertical-align: inherit;">尽管遵循了文档中概述的所有步骤，但是vue无法识别vuetify组件。</font><font style="vertical-align: inherit;">错误如下：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vue.runtime.esm.js？ff9b：587 [Vue警告]：未知的自定义元素：-您是否正确注册了组件？</font><font style="vertical-align: inherit;">对于递归组件，请确保提供“名称”选项。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在发现</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">---&gt;在src \ App.vue
         </font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在沙箱</font><a href="https://codesandbox.io/s/40rqnl8kw" rel="noreferrer"><font style="vertical-align: inherit;">https://codesandbox.io/s/40rqnl8kw上</font></a><font style="vertical-align: inherit;">访问整个代码</font></font><a href="https://codesandbox.io/s/40rqnl8kw" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2413篇《Vue / Vuetify-未知的自定义元素：<v-app>-您是否正确注册了组件？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Tom</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最近遇到这个错误的另一个原因。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最近从Vuetify 1.5升级到了2.x，尽管我的操作顺序正确无误，如此处当前接受的答案所示，但我仍然收到有关v-app的错误消息：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未知的自定义元素：</font></font><code>&lt;v-app&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-您是否正确注册了组件？</font><font style="vertical-align: inherit;">对于递归组件，请确保提供“名称”选项。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事实证明，升级过程需要在package.json devDependencies部分中添加以下内容，而该部分最初在我的vuetify 1.5x软件包中不存在：</font></font></p>

<pre><code>"vuetify-loader": "^1.3.0"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（截至撰写本文时，当前版本为1.3.0）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一旦添加，错误就消失了。  </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim前端Near</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您来自Google：对我而言，它是从v1到v2的更改，那使大多数Codepen示例都变得毫无用处。</font><font style="vertical-align: inherit;">我必须更改此设置，以得到一个非常简单的带有导航抽屉的Vuetify应用程序才能再次运行：</font></font></p>

<pre><code>remove toolbar from &lt;v-app toolbar&gt;<font></font>
replace v-toolbar with v-app-bar<font></font>
replace v-app-bar-side-icon with v-app-bar-nav-icon<font></font>
replace v-app-bar-title with v-toolbar<font></font>
replace v-list-tile to v-list-item<font></font>
<font></font>
replace all flat with text<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许这可以帮助某人。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（编辑后附有孔瑜的讲话）</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
