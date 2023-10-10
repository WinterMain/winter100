---
layout: question
title:  在nth-child中使用SASS变量？
date:   2020-03-23T02:40:42.000Z
description: 我有一个缩略图图像的网格设置，当前每行4个拇指。为了确保他们排队，我有以下代码片段：li nth-child(5) { margin-left  0;...
img: 
author: 猪猪
category: question
answer: 1
tags: ass CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个缩略图图像的网格设置，当前每行4个拇指。</font><font style="vertical-align: inherit;">为了确保他们排队，我有以下代码片段：</font></font></p>

<pre><code>li:nth-child(5) { margin-left: 0;}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图做的是这个，但是我收到语法错误：</font></font></p>

<pre><code> $galleryGrid: 5;<font></font>
    li:nth-child($galleryGrid) { margin-left: 0;}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我想更改第n个子项以使用另一个值，例如10（因此我可以连续拥有8个大拇指），我认为这是可行的。</font><font style="vertical-align: inherit;">这是不可能的，还是我做错了？！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此先感谢您的帮助。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2669篇《在nth-child中使用SASS变量？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿Gil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要使用变量插值来允许第n个子变量成为变量。</font></font></p>

<pre><code>$galleryGrid: 5;<font></font>
li:nth-child(#{$galleryGrid}) { margin-left: 0;}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产生</font></font></p>

<pre><code>li:nth-child(5){margin-left:0}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您可以完全控制图像和布局以确保元素总是以这样的方式包装，即每5个元素开始一个新行，那么此标记就可以了。</font><font style="vertical-align: inherit;">如果您不能提供此类保证，则在父元素上设置负边距是一种更好的方法。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
