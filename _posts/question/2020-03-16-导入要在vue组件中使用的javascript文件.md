---
layout: question
title:  导入要在vue组件中使用的javascript文件
date:   2020-03-16T07:31:10.000Z
description: 我正在一个需要使用js插件的项目中。既然我们正在使用vue，并且有一个组件可以处理基于插件的逻辑，那么我需要在vue组件中导入js插件文件，以初始化插件。...
img: 
author: 理查德十三Davaid
category: question
answer: 1
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在一个需要使用js插件的项目中。</font><font style="vertical-align: inherit;">既然我们正在使用vue，并且有一个组件可以处理基于插件的逻辑，那么我需要在vue组件中导入js插件文件，以初始化插件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以前，这是在标记中按以下方式处理的：</font></font></p>

<pre><code>&lt;script src="//api.myplugincom/widget/mykey.js<font></font>
"&gt;&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我尝试过的方法，但出现编译时错误：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MyComponent.vue</font></font></p>

<pre><code>import Vue from 'vue';<font></font>
import * from  '//api.myplugincom/widget/mykey.js';<font></font>
<font></font>
export default {<font></font>
    data: {<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是，什么是导入此javascript文件的正确方法，以便可以在vue组件中使用它？</font><font style="vertical-align: inherit;">...</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇飞云Mandy</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于以浏览器方式（例如，带有标签）引入的脚本，它们通常使某些变量在全局范围内可用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于这些，您无需导入任何内容。</font><font style="vertical-align: inherit;">他们将可用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正在使用Webstorm（或任何相关的JetBrains IDE）之类的东西，则可以添加</font></font><code>/* global globalValueHere */</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使其知道“嘿，这不是我的文件中定义的，但是它存在。” </font><font style="vertical-align: inherit;">它不是必需的，但是它将使“未定义”的波浪线消失。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>/* global Vue */
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我从CDN下拉Vue时使用的方式（而不是直接使用它）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除此之外，您可以像平常一样使用它。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
