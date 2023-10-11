---
layout: question
title:  SASS中的嵌套mixin或函数
date:   2020-03-23T06:32:05.000Z
description: 有些人知道如何在SASS中使用嵌套的mixin或函数？我有这样的事情：\`mixin A(){    do something....}\`mix...
img: 
author: 乐米亚
category: question
answer: 3
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有些人知道如何在SASS中使用嵌套的mixin或函数？</font><font style="vertical-align: inherit;">我有这样的事情：</font></font></p>

<pre><code>@mixin A(){<font></font>
    do something....<font></font>
}<font></font>
<font></font>
@mixin B($argu){<font></font>
    @include A();<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2839篇《SASS中的嵌套mixin或函数》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green古一</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如其他答案所述，您可以在其他mixin中包括mixin。</font><font style="vertical-align: inherit;">此外，您可以调整混合对象的范围。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例</font></font></strong></p>

<pre><code>.menu {<font></font>
  user-select: none;<font></font>
<font></font>
  .theme-dark &amp; {<font></font>
    color: #fff;<font></font>
    background-color: #333;<font></font>
<font></font>
    // Scoped mixin<font></font>
    // Can only be seen in current block and descendants,<font></font>
    // i.e., referencing it from outside current block<font></font>
    // will result in an error.<font></font>
    @mixin __item() {<font></font>
      height: 48px;<font></font>
    }<font></font>
<font></font>
    &amp;__item {<font></font>
      @include __item();<font></font>
<font></font>
      &amp;_type_inverted {<font></font>
        @include __item();<font></font>
<font></font>
        color: #333;<font></font>
        background-color: #fff;<font></font>
      }<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将输出：</font></font></p>

<pre><code>.menu {<font></font>
  user-select: none;<font></font>
}<font></font>
<font></font>
.theme-dark .menu {<font></font>
  color: #fff;<font></font>
  background-color: #333;<font></font>
}<font></font>
<font></font>
.theme-dark .menu__item {<font></font>
  height: 48px;<font></font>
}<font></font>
<font></font>
.theme-dark .menu__item_type_inverted {<font></font>
  height: 48px;<font></font>
  color: #333;<font></font>
  background-color: #fff;<font></font>
}<font></font>
</code></pre>

<p>Scoping mixins means that you can have multiple mixins named the same in different scopes without conflicts arising.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanPro</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，您已经做对了。</font><font style="vertical-align: inherit;">您可以在第二个中调用第一个mixin。</font><font style="vertical-align: inherit;">检查这支笔</font></font><a href="http://codepen.io/crazyrohila/pen/mvqHo"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://codepen.io/crazyrohila/pen/mvqHo</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以多嵌套mixin，也可以在mixins中使用占位符。</font></font></p>

<pre><code>@mixin a {<font></font>
  color: red;<font></font>
}<font></font>
@mixin b {<font></font>
  @include a();<font></font>
  padding: white;<font></font>
  font-size: 10px;<font></font>
}<font></font>
@mixin c{<font></font>
  @include b;<font></font>
  padding:5;<font></font>
}<font></font>
div {<font></font>
  @include c();<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给出了CSS</font></font></p>

<pre><code>div {<font></font>
  color: red;<font></font>
  padding: white;<font></font>
  font-size: 10px;<font></font>
  padding: 5;<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
