---
layout: question
title:  占位符Mixin SCSS / CSS
date:   2020-03-17T10:09:18.000Z
description: 我正在尝试为sass中的占位符创建一个mixin。 这是我创建的mixin。\`mixin placeholder ($css) {    -we...
img: 
author: Itachi理查德
category: question
answer: 3
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试为sass中的占位符创建一个mixin。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我创建的mixin。</font></font></p>

<pre><code>@mixin placeholder ($css) {<font></font>
  ::-webkit-input-placeholder {$css}<font></font>
  :-moz-placeholder           {$css}<font></font>
  ::-moz-placeholder          {$css}<font></font>
  :-ms-input-placeholder      {$css}  <font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是我想要包含mixin的方式：</font></font></p>

<pre><code>@include placeholder(font-style:italic; color: white; font-weight:100;);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然，由于所有冒号和分号都已传递给mixin，因此这行不通，但是...我真的很想输入静态CSS并将其完全传递给上面的函数。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能吗？ </font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1968篇《占位符Mixin SCSS / CSS》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐飞云</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是速记语法</font></font></p>

<pre><code>=placeholder<font></font>
  &amp;::-webkit-input-placeholder<font></font>
    @content<font></font>
  &amp;:-moz-placeholder<font></font>
    @content<font></font>
  &amp;::-moz-placeholder<font></font>
    @content<font></font>
  &amp;:-ms-input-placeholder<font></font>
    @content<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用起来像</font></font></p>

<pre><code>input<font></font>
  +placeholder<font></font>
    color: red<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用与NoDirection完全相同的Sass Mixin占位符。</font><font style="vertical-align: inherit;">我在</font></font><a href="https://www.npmjs.com/package/scss-mixins-collection" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> sass mixins集合中找到它，</font><font style="vertical-align: inherit;">对此我感到非常满意。</font><font style="vertical-align: inherit;">有</font></font><a href="https://kolosek.com/sass-mixins/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一段文字</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说明了mixins选项。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长Gil</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了避免从sass编译器抛出“未封闭的块：CssSyntaxError”错误，请添加“;” </font><font style="vertical-align: inherit;">到@content的末尾。</font></font></p>

<pre><code>@mixin placeholder {<font></font>
   ::-webkit-input-placeholder { @content;}<font></font>
   :-moz-placeholder           { @content;}<font></font>
   ::-moz-placeholder          { @content;}<font></font>
   :-ms-input-placeholder      { @content;}<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
