---
layout: question
title:  如何使用SCSS / SASS增加并发div的动画延迟
date:   2020-03-24T07:32:33.000Z
description: 我正在尝试复制Windows 8磁贴的加载动画。似乎每个图块都有一个动画延迟，该延迟略高于其前身。我一直在以低效的方式使用nth-child来实现这一点，...
img: 
author: 猪猪理查德
category: question
answer: 3
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试复制Windows 8磁贴的加载动画。</font><font style="vertical-align: inherit;">似乎每个图块都有一个动画延迟，该延迟略高于其前身。</font><font style="vertical-align: inherit;">我一直在以低效的方式使用nth-child来实现这一点，如下所示。</font><font style="vertical-align: inherit;">有谁知道我可以更有效地满足任意数量的div的方法？</font></font></p>

<p><a href="http://codepen.io/2ne/pen/bmvcu"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示</font></font></a></p>

<pre><code>.results div:nth-child(1) {<font></font>
  animation-delay: 0.25s;<font></font>
}<font></font>
.results div:nth-child(2) {<font></font>
  animation-delay: 0.5s;<font></font>
}<font></font>
.results div:nth-child(3) {<font></font>
  animation-delay: 0.75s;<font></font>
}<font></font>
.results div:nth-child(4) {<font></font>
  animation-delay: 1s;<font></font>
}<font></font>
.results div:nth-child(5) {<font></font>
  animation-delay: 1.25s;<font></font>
}<font></font>
.results div:nth-child(6) {<font></font>
  animation-delay: 1.5s;<font></font>
}<font></font>
.results div:nth-child(7) {<font></font>
  animation-delay: 1.75s;<font></font>
}<font></font>
.results div:nth-child(8) {<font></font>
  animation-delay: 2s;<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3450篇《如何使用SCSS / SASS增加并发div的动画延迟》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用这个混入：</font></font></p>

<pre><code>@mixin delay($rule, $number, $value) {<font></font>
  @for $i from 1 to ($number + 1) {<font></font>
    &amp;:nth-child(#{$i}) {<font></font>
      -webkit-#{$rule}-delay: (#{$i*$value});<font></font>
      #{$rule}-delay: (#{$i*$value});<font></font>
    }<font></font>
  }<font></font>
}<font></font>
<font></font>
.results div{<font></font>
  @include delay(animation, 8, 0.25s);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，您也可以重新使用它的过渡。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><pre><code>@for $i from 1 through 10 {<font></font>
  .results div:nth-child(#{$i}) {<font></font>
    -webkit-animation-delay:(#{$i*0.1s}); <font></font>
    animation-delay:(#{$i*0.1s}); <font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更好的解决方案。。。我测试了，它能起作用;）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁前端</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在Sass中使用for循环来执行以下操作：</font></font></p>

<pre><code>@for $i from 1 to 10 {<font></font>
  .results div:nth-child(#{$i}) { animation-delay: $i * 0.25s; }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以将10个div设置为所需的任何数量，以实现任意数量的div。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
