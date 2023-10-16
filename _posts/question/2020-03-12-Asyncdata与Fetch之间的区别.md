---
layout: question
title:  Asyncdata与Fetch之间的区别
date:   2020-03-12T06:44:17.000Z
description: 提取和异步数据之间的确切区别是什么。官方文档说：  异步数据    您可能想要获取数据并将其呈现在服务器端。Nuxt.js添加了asyncDat...
img: 
author: YOC67350214
category: question
answer: 1
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提取和异步数据之间的确切区别是什么。</font><font style="vertical-align: inherit;">官方文档说：</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">异步数据</font></font></strong></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能想要获取数据并将其呈现在服务器端。</font><font style="vertical-align: inherit;">Nuxt.js添加了asyncData方法，可让您在设置组件数据之前处理异步操作。</font></font></p>
  
  <p><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次在加载组件之前都会调用</font><strong><font style="vertical-align: inherit;">asyncData</font></strong><font style="vertical-align: inherit;">（仅对于页面组件）。</font><font style="vertical-align: inherit;">可以从服务器端调用它，也可以在导航到相应的路由之前调用它。</font><font style="vertical-align: inherit;">此方法将上下文对象作为第一个参数，您可以使用它来获取一些数据并返回组件数据。</font></font></p>
</blockquote>

<hr>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">取</font></font></strong></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">fetch方法用于在呈现页面之前填充商店，这与asyncData方法类似，只不过它没有设置组件数据。</font><font style="vertical-align: inherit;">如果设置了fetch方法，则每次在加载组件之前都会调用它（仅适用于页面组件）。</font><font style="vertical-align: inherit;">可以从服务器端调用它，也可以在导航到相应的路由之前调用它。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">fetch方法接收上下文对象作为第一个参数，我们可以使用它来获取一些数据并填充存储。</font><font style="vertical-align: inherit;">为了使fetch方法异步，返回Promise，nuxt.js将在渲染组件之前等待Promise被解决。</font></font></p>
</blockquote>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提取用于填充数据吗？</font><font style="vertical-align: inherit;">但是在asyncData中也可以通过存储来提交吗？</font><font style="vertical-align: inherit;">我不明白为什么有两种方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两种方法都在初始加载时在服务器端运行，此后，当您浏览应用程序时，它将在客户端运行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人可以向我解释使用这些方法的优势吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢帮助。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1012篇《Asyncdata与Fetch之间的区别》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖猪猪</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我要指出的一点是，我没有看到上述内容（至少，不清楚）。</font><font style="vertical-align: inherit;">asyncData自动将数据合并到页面的data（）对象中。</font><font style="vertical-align: inherit;">提取没有。</font><font style="vertical-align: inherit;">借助fetch，您可以根据需要自行处理数据。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
