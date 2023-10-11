---
layout: question
title:  Vue.js：无法在v-for中订购
date:   2020-03-11T15:23:51.000Z
description: 我已经升级到Vue.js 2.0.5，并且在v-for中的orderBy似乎不再起作用<li v-for="c in rooms | orderBy ...
img: 
author: Stafan逆天前端
category: question
answer: 0
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经升级到Vue.js 2.0.5，并且在v-for中的orderBy似乎不再起作用</font></font></p>

<pre><code>&lt;li v-for="c in rooms | orderBy 'last_iteraction'"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出</font></font></p>

<blockquote>
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无效的表达式：v-for =“房间中的c | orderBy'last_iteraction'”</font></font></li>
  </ul>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人知道如何解决吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第848篇《Vue.js：无法在v-for中订购》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
