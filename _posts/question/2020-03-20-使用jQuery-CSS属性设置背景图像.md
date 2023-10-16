---
layout: question
title:  使用jQuery CSS属性设置背景图像
date:   2020-03-20T05:12:56.000Z
description: 我在一个imageUrl变量中有一个图像URL，我正在尝试使用jQuery将其设置为CSS样式：$('myObject').css('backgrou...
img: 
author: TomJim前端
category: question
answer: 1
tags: JavaScript CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在一个</font></font><code>imageUrl</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量中</font><font style="vertical-align: inherit;">有一个图像URL，</font><font style="vertical-align: inherit;">我正在尝试使用jQuery将其设置为CSS样式：</font></font></p>

<pre><code>$('myObject').css('background-image', imageUrl);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这似乎不起作用，因为：</font></font></p>

<pre><code>console.log($('myObject').css('background-image'));
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font></font><code>none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何想法，我在做什么错？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2467篇《使用jQuery CSS属性设置背景图像》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Tony</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了其他答案，您还可以使用“背景”。</font><font style="vertical-align: inherit;">当您要设置与背景使用图像方式有关的其他属性时，这特别有用，例如：</font></font></p>

<pre><code>$("myObject").css("background", "transparent url('"+imageURL+"') no-repeat right top");
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
