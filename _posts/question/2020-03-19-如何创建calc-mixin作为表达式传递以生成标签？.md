---
layout: question
title:  如何创建calc mixin作为表达式传递以生成标签？
date:   2020-03-19T03:39:06.000Z
description: 我正在处理一个Sass样式表，在其中我希望使用该calc元素来动态调整某些内容的大小。由于calc元素尚未规范，我需要为目标calc()，-moz-cal...
img: 
author: 泡芙逆天
category: question
answer: 2
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在处理一个Sass样式表，在其中我希望使用该</font></font><code>calc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素来动态调整某些内容的大小。</font><font style="vertical-align: inherit;">由于</font></font><code>calc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素尚未规范，我需要为目标</font></font><code>calc()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>-moz-calc()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>-webkit-calc()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有一种方法可以创建可将表达式传递给的mixin或函数，以便生成所需的标签，然后将其设置为a </font></font><code>width</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>height</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2308篇《如何创建calc mixin作为表达式传递以生成标签？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil米亚卡卡西</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将是</font></font><a href="http://sass-lang.com/tutorial.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有参数</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的基本</font><a href="http://sass-lang.com/tutorial.html" rel="noreferrer"><font style="vertical-align: inherit;">mixin</font></a><font style="vertical-align: inherit;">，幸运的是，表达式在受支持的范围内不是特定于浏览器的：</font></font></p>

<pre class="lang-html prettyprint-override"><code>@mixin calc($property, $expression) {<font></font>
  #{$property}: -webkit-calc(#{$expression});<font></font>
  #{$property}: calc(#{$expression});<font></font>
}<font></font>
<font></font>
.test {<font></font>
  @include calc(width, "25% - 1em");<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将呈现为</font></font></p>

<pre class="lang-html prettyprint-override"><code>.test {<font></font>
  width: -webkit-calc(25% - 1em);<font></font>
  width: calc(25% - 1em);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当不支持calc时，您可能需要包括一个“默认”值。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙理查德</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种写法：</font></font></p>

<pre><code>@mixin calc($prop, $val) {<font></font>
  @each $pre in -webkit-, -moz-, -o- {<font></font>
    #{$prop}: $pre + calc(#{$val});<font></font>
  } <font></font>
  #{$prop}: calc(#{$val});<font></font>
}<font></font>
<font></font>
.myClass {<font></font>
  @include calc(width, "25% - 1em");<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这是一种更优雅的方式。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
