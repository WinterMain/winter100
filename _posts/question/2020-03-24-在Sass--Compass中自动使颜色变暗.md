---
layout: question
title:  在Sass / Compass中自动使颜色变暗
date:   2020-03-24T09:18:07.000Z
description: 我正在为一个网站设置CSS，该网站的所有链接处于 hover状态，比正常状态更暗。我正在使用Sass / Compass，所以我darken在这里查看...
img: 
author: Tony凯
category: question
answer: 2
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在为一个网站设置CSS，该网站的所有链接处于</font></font><code>:hover</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态，比正常状态更暗。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Sass / Compass，所以我</font></font><code>darken</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font><font style="vertical-align: inherit;">查看了</font><font style="vertical-align: inherit;">Sass方法：</font><a href="http://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method</font></font></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是用途： </font></font><code>darken($color, $amount)</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是：如何使此“自动”功能将所有</font></font><code>&lt;a&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素设置为暗80％？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想做的是（Sass语法）：</font></font></p>

<pre><code>a<font></font>
   background: $blue<font></font>
   &amp;:hover<font></font>
      background: darken(this element background-color, 80%)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好的解决方案是什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3542篇《在Sass / Compass中自动使颜色变暗》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，最好在本机CSS中使用过滤器：</font></font></p>

<pre><code>.button:hover {<font></font>
  filter: brightness(85%);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom小卤蛋</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想到了</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现的唯一方法是创建一个mixin：</font></font></p>

<pre><code>@mixin setBgColorAndHover($baseColor)<font></font>
    background-color: $baseColor<font></font>
    &amp;:hover<font></font>
          background-color: darken($baseColor, 5%)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接着 ：</font></font></p>

<pre><code>.button<font></font>
    +setBgColorAndHover($green) // as $green is a color variable I use.<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是最好的，但是那样就可以了：)</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
