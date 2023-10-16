---
layout: question
title:  如何在nuxt中获取axios baseUrl？
date:   2020-03-23T02:57:29.000Z
description: 我的Nuxt.js项目中有axios模块。我还在localhost 4040/api客户端在端口3000上运行时设置了我的baseUrl（用于API）。...
img: 
author: 泡芙
category: question
answer: 3
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的Nuxt.js项目中有axios模块。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
我还在</font></font><code>localhost:4040/api</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">客户端在端口3000上运行时</font><font style="vertical-align: inherit;">设置了我的baseUrl（用于API）。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
当我在API中获取图片数据时，它会返回api服务器的相对路径，例如“ /upload/1.png”</font></font><br>
<code>
{
    "src":"/upload/1.png"
}
</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我需要获取axios baseUrl并将其与它合并以创建图像的完整路径。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
除了对其进行硬编码之外，还有其他方法吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2703篇《如何在nuxt中获取axios baseUrl？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以像这样访问axios配置来获取您的api基本URL：</font></font></p>

<pre><code>this.$axios.defaults.baseURL
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid猪猪</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有人想知道如何使axios baseURL与域无关：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是可以简单实现的方法：</font></font></p>

<pre><code>axios: {<font></font>
  baseURL: '/'<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将在</font></font><code>localhost:3000/api</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以及</font></font><code>any-domain.com/api</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nuxt.config.js中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义：</font></font></p>

<pre><code>axios: {<font></font>
  baseURL:"localhost:4040/api/"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于图像，您需要做的只是指向它，如下所示：</font></font></p>

<pre><code>:src="`${$axios.defaults.baseURL}upload/1.png`"
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
