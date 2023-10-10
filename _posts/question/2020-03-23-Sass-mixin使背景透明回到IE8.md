---
layout: question
title:  Sass mixin使背景透明回到IE8
date:   2020-03-23T13:52:11.000Z
description: 我是Sass的新手，正在为此苦苦挣扎。我无法同时在hex（针对IE）和中渲染颜色rgba。每个小小的片段都让我感到沮丧，因为我还没有掌握语法，而Googl...
img: 
author: 老丝
category: question
answer: 2
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是Sass的新手，正在为此苦苦挣扎。</font><font style="vertical-align: inherit;">我无法同时在</font></font><code>hex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（针对IE）和中</font><font style="vertical-align: inherit;">渲染颜色</font></font><code>rgba</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">每个小小的片段都让我感到沮丧，因为我还没有掌握语法，而Google对Sass的搜索结果仍然很少。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是mixin：</font></font></p>

<pre class="lang-css prettyprint-override"><code>@mixin transparent($hex, $a){<font></font>
    /* for IEGR8 */<font></font>
    background: transparent;<font></font>
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#{$a}#{$hex},endColorstr=#{$a}#{$hex});<font></font>
    zoom: 1;<font></font>
    /* for modern browsers */<font></font>
    background-color: rgba(#{$hex},.#{$a});<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样就</font></font><code>@include transparent(#FFF,.4)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该在下面产生漂亮的，与浏览器兼容的透明代码：</font></font></p>

<pre class="lang-css prettyprint-override"><code>background: transparent;         <font></font>
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#40FFFFFF,endColorstr=#40FFFFFF);<font></font>
zoom: 1;<font></font>
background-color: rgba(100,100,100,.40);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经忙了几个小时了：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>#</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要求#RGB格式。  </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>.</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要RGBA阿尔法。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者都需要包含在调用中</font></font><code>rgba()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是IE不能包含＃号</font></font><code>#AARRGGBB</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，否则看起来像</font></font><code>#AA#RRGGBB</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和。</font><font style="vertical-align: inherit;">不能包含在IE中，否则会被拒绝</font></font><code>#.AARRGGBB</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是否错过了一种更简单的方法？</font><font style="vertical-align: inherit;">可以使用Sass字符串操作或Sass中任何稍微聪明的颜色转换功能（已经为我完成此操作）完成此操作吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想将URL传递给mixin时遇到类似的问题。</font><font style="vertical-align: inherit;">我不只发送url，而是发送整个url参数作为mixin的参数。</font><font style="vertical-align: inherit;">你明白我的意思吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>@mixin bg($url)<font></font>
  background: #000 $url repeat-x<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装：</font></font></p>

<pre><code>@mixin bg($url)<font></font>
  background: #000 url($url) repeat-x<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，这可能不适合您的应用程序，但是我通常使用不透明度解决该问题：</font></font></p>

<pre><code>@mixin transparent_bg($hex, $a){<font></font>
  /* for IEGR8 */<font></font>
  filter:alpha(opacity=$a)<font></font>
  zoom: 1;<font></font>
<font></font>
  /* for modern browsers */<font></font>
  background-color: $hex;<font></font>
  opacity: ($a*10)<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><pre><code>@mixin transparent($color, $alpha) {<font></font>
  $rgba: rgba($color, $alpha);<font></font>
  $ie-hex-str: ie-hex-str($rgba);<font></font>
  background-color: transparent;<font></font>
  background-color: $rgba;<font></font>
  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#{$ie-hex-str},endColorstr=#{$ie-hex-str});<font></font>
  zoom: 1;<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：ie-hex-str仅在最新版本中可用，但不确定何时引入</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
