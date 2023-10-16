---
layout: question
title:  jQuery removeClass通配符
date:   2020-03-23T07:13:45.000Z
description: 是否有任何简单的方法来删除所有匹配的类，例如， color-\*所以如果我有一个元素：<div id="hello" class="color...
img: 
author: 飞云
category: question
answer: 1
tags: jQuery HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有任何简单的方法来删除所有匹配的类，例如， </font></font></p>

<pre><code>color-*
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以如果我有一个元素：</font></font></p>

<pre><code>&lt;div id="hello" class="color-red color-brown foo bar"&gt;&lt;/div&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除后，它将是</font></font></p>

<pre><code>&lt;div id="hello" class="foo bar"&gt;&lt;/div&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢！</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2894篇《jQuery removeClass通配符》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font><a href="http://api.jquery.com/category/version/1.4/" rel="noreferrer"><font style="vertical-align: inherit;">jQuery 1.4开始</font></a><font style="vertical-align: inherit;">，</font></font><a href="http://api.jquery.com/removeClass/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">removeClass</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数接受一个函数参数</font><font style="vertical-align: inherit;">。</font></font><a href="http://api.jquery.com/category/version/1.4/" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p>

<pre><code>$("#hello").removeClass (function (index, className) {<font></font>
    return (className.match (/(^|\s)color-\S+/g) || []).join(' ');<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实时示例：</font><a href="http://jsfiddle.net/xa9xS/1409/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;">：</font></font><a href="http://jsfiddle.net/xa9xS/1409/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/xa9xS/1409/</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
