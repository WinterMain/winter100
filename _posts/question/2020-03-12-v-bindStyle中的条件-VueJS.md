---
layout: question
title:  v-bind：Style中的条件-VueJS
date:   2020-03-12T06:42:48.000Z
description: 我有一个简单的问题，希望对您有帮助：<div>  <figure  style="{ 'background'  'url(' + item.mai...
img: 
author: 西门十三LEY
category: question
answer: 0
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个简单的问题，希望对您有帮助：</font></font></p>

<pre><code>&lt;div&gt;<font></font>
  &lt;figure :style="{ 'background': 'url(' + item.main_featured + ') center no-repeat' }"&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果API的URL未定义，我希望样式属性'background'返回颜色</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果item.featured_photo不为null：</font></font></p>

<pre><code>&lt;figure style="background: url('localhost:6969/image.img') center no-repeat"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果item.featured_photo为null：</font></font></p>

<pre><code>&lt;figure style="background: #FFF"&gt;
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1006篇《v-bind：Style中的条件-VueJS》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
