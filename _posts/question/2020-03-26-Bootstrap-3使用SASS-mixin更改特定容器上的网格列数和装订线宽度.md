---
layout: question
title:  Bootstrap 3使用SASS mixin更改特定容器上的网格列数和装订线宽度
date:   2020-03-26T08:54:23.000Z
description: 我正在尝试更改特定容器内的网格列数和装订线宽度。最明显且最快的方法是在Bootstrap SASS中使用mixin。没有一个混合器可以一口气处理所...
img: 
author: DavaidTony宝儿
category: question
answer: 0
tags: 网格 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试更改特定容器内的网格列数和装订线宽度。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最明显且最快的方法是在Bootstrap SASS中使用mixin。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有一个混合器可以一口气处理所有这些吗？</font><font style="vertical-align: inherit;">我很努力地看到一个人运行_grid.scss中的所有mixins</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，我正在寻找这样的东西。</font></font></p>

<pre><code>@mixin new-grid-system($grid-columns, $grid-gutter-width);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">--</font></font></p>

<pre><code>.gallery {<font></font>
   @include new-grid-system('10', '10px');<font></font>
}<font></font>
<font></font>
.gforms {<font></font>
   @include new-grid-system('9', '10px');<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果没有，任何人有任何想法吗？</font></font></p>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经过一番坚持之后，我解决了问题并做出了自己的...</font></font></p>

<pre><code>@mixin new-grid-system($new-grid-columns, $new-grid-gutter-width) {<font></font>
<font></font>
    $grid-columns: $new-grid-columns;<font></font>
    $grid-gutter-width: $new-grid-gutter-width;  <font></font>
<font></font>
    .row {<font></font>
        @include make-row();<font></font>
    }<font></font>
<font></font>
    @include make-grid-columns();<font></font>
    @include make-grid(xs);<font></font>
    @media (min-width: $screen-sm-min) {<font></font>
        @include make-grid(sm);<font></font>
    }<font></font>
    @media (min-width: $screen-md-min) {<font></font>
        @include make-grid(md);<font></font>
    }<font></font>
    @media (min-width: $screen-lg-min) {<font></font>
        @include make-grid(lg);<font></font>
    }<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样跑...</font></font></p>

<pre><code>.gallery {<font></font>
   @include new-grid-system('10', '10px');<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3793篇《Bootstrap 3使用SASS mixin更改特定容器上的网格列数和装订线宽度》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
