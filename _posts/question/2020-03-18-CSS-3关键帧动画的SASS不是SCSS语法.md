---
layout: question
title:  CSS 3关键帧动画的SASS（不是SCSS）语法
date:   2020-03-18T10:26:42.000Z
description: 有什么办法可以在SASS中编写关键帧？我发现的每个示例实际上都是SCSS，即使它说是SASS。需要明确的是，我的意思是没有大括号的那个。...
img: 
author: 猴子番长
category: question
answer: 1
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么办法可以在SASS中编写关键帧？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现的每个示例实际上都是SCSS，即使它说是SASS。</font><font style="vertical-align: inherit;">需要明确的是，我的意思是没有大括号的那个。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2148篇《CSS 3关键帧动画的SASS（不是SCSS）语法》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯凯</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是使用Sass语法实现CSS关键帧的方法：</font></font></p>

<pre><code>@keyframes name-of-animation<font></font>
  0%<font></font>
    transform: rotate(0deg)<font></font>
  100%<font></font>
    transform: rotate(360deg)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个Sass mixin，用于添加供应商前缀：</font></font></p>

<pre><code>=keyframes($name)<font></font>
  @-webkit-keyframes #{$name}<font></font>
    @content<font></font>
  @-moz-keyframes #{$name}<font></font>
    @content<font></font>
  @-ms-keyframes #{$name}<font></font>
    @content<font></font>
  @keyframes #{$name}<font></font>
    @content<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是在Sass语法中使用mixin的方法：</font></font></p>

<pre><code>+keyframes(name-of-animation)<font></font>
  0%<font></font>
    transform: rotate(0deg)<font></font>
  100%<font></font>
    transform: rotate(360deg)<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
