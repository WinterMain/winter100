---
layout: question
title:  如何在Vue JavaScript中引用静态资产
date:   2020-03-11T03:00:06.000Z
description: 我正在寻找引用静态资产的正确网址，例如Vue javascript中的图像。例如，我正在使用自定义图标图像创建传单标记，并且尝试了多个网址，但它们都返...
img: 
author: 达蒙猴子
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在寻找引用静态资产的正确网址，例如Vue javascript中的图像。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，我正在使用自定义图标图像创建传单标记，并且尝试了多个网址，但它们都返回了一个</font></font><code>404 (Not Found)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Main.vue：</font></font></strong></p>

<pre><code>var icon = L.icon({<font></font>
    iconUrl: './assets/img.png',<font></font>
    iconSize:     [25, 25],<font></font>
    iconAnchor:   [12, 12]<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试过将图像放在资产文件夹和静态文件夹中没有任何运气。</font><font style="vertical-align: inherit;">我是否必须告诉Vue以某种方式加载这些图像？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第574篇《如何在Vue JavaScript中引用静态资产》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙逆天Pro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有由Vue CLI生成的默认文件夹结构，例如，</font></font><code>src/assets</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将图像放置在此处，并按以下方式从HTML引用此图像</font></font><code>&lt;img src="../src/assets/img/logo.png"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（也可以自动运行，而无需对部署进行任何更改）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamStafan十三</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更好的解决方案是</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在@acdcjunior的答案中添加一些好的做法和安全性，以</font></font><code>@</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font><code>./</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中</font></font></strong></p>

<pre><code>require("@/assets/images/user-img-placeholder.png")
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JSX模板中</font></font></strong></p>

<pre><code>&lt;img src="@/assets/images/user-img-placeholder.png"/&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>@</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指向</font></font><code>src</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>~</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指向项目根目录的点，这使得访问</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和其他根目录级资源</font><font style="vertical-align: inherit;">更加容易</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
