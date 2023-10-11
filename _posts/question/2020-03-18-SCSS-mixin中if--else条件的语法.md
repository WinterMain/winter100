---
layout: question
title:  SCSS mixin中if / else条件的语法
date:   2020-03-18T07:35:29.000Z
description: 嗨，我正在尝试学习SASS / SCSS，并试图为clearfix重构我自己的mixin我想要的是mixin基于我是否将mixin传递为宽度。到目...
img: 
author: 小小MandyGil
category: question
answer: 1
tags: 条件 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">嗨，我正在尝试学习SASS / SCSS，并试图为clearfix重构我自己的mixin</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想要的是mixin基于我是否将mixin传递为宽度。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止的想法（仅伪代码，因为我将包括其他mixins）</font></font></p>

<pre class="lang-sass prettyprint-override"><code>@mixin clearfix($width) {<font></font>
<font></font>
   @if !$width {<font></font>
<font></font>
    // if width is not passed, or empty do this<font></font>
<font></font>
   } @else {<font></font>
<font></font>
        display: inline-block;<font></font>
        width: $width;<font></font>
   }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我以为我可以这样称呼它，但是它没有用。</font></font></p>

<p><code>@include clearfix();</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<p><code>@include clearfix(100%)</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<p><code>@include clearfix(960px)</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将以最好或正确的方式为您提供帮助！</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2012篇《SCSS mixin中if / else条件的语法》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil番长Stafan</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将参数默认设置为</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
这样，测试值是否已作为参数传递将更短。</font></font></p>

<pre class="lang-sass prettyprint-override"><code>@mixin clearfix($width: null) {<font></font>
<font></font>
  @if not ($width) {<font></font>
<font></font>
    // if width is not passed, or empty do this<font></font>
<font></font>
  } @else {<font></font>
<font></font>
    display: inline-block;<font></font>
    width: $width;<font></font>
<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
