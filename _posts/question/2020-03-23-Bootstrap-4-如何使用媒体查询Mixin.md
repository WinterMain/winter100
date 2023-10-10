---
layout: question
title:  Bootstrap 4-如何使用媒体查询Mixin
date:   2020-03-23T12:04:36.000Z
description: 我该如何设置媒体断点，比如说从中到大-我是否嵌套了最小mixin和max mixin或该怎么做呢。我需要的输出是这样的：\`media（min-widt...
img: 
author: 猴子
category: question
answer: 2
tags: twitter-bootstrap CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我该如何设置媒体断点，比如说从中到大-我是否嵌套了最小mixin和max mixin或该怎么做呢。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要的输出是这样的：@media（min-width：480px）and（max-width：767px）using breakpoint mixin。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥蛋蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采用 </font></font><code>media-breakpoint-between($lower, $upper)</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">依存关系</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">mixins在中声明</font></font><code>mixins/_breakpoints.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并取决于在中找到的$ grid-breakpoints映射</font></font><code>_variables.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例</font></font></h1>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">断点图：</font></font></strong></p>

<pre><code>$grid-breakpoints: (<font></font>
  xs: 0,<font></font>
  sm: 576px,<font></font>
  md: 768px,<font></font>
  lg: 992px,<font></font>
  xl: 1200px<font></font>
) <font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">混合：</font></font></strong></p>

<pre><code>@include media-breakpoint-between(sm, md) {<font></font>
    // your code<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编译为</font></font></strong></p>

<pre><code>@media (min-width: 576px) and (max-width: 991px) {}
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重要通知</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">混合之间的媒体断点之间使用声明的断点的“较低”和“较高”值。 </font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">断点的“较低”值是$ grid-breakpoint映射中的声明值。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">特定断点的“较高”值等于较高断点的值减去1px。</font></font></p></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上和下断点值示例</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（基于od $ grid-breakpoint map）</font></font></p>

<pre><code>Lower value of md is equal to 576<font></font>
Upper value of md is equal to 991 ( value of next breakpoint (lg) minus 1px (992px-1px)<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他媒体混合</font></font></strong></p>

<p><code>@include media-breakpoint-up(sm) {}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个最小宽度为的断点</font></font><code>$sm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><code>@include media-breakpoint-down(md) {}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建最大宽度为的断点</font></font><code>$md</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这也是mixin </font></font><code>media-breakpoint-between($lower, $upper)</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以这应该工作</font></font></p>

<pre><code>@include media-breakpoint-between(sm, md){<font></font>
  // this applies only between the sm and ms breakpoints <font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
