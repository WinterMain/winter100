---
layout: question
title:  对可变参数Sass mixins进行数学运算
date:   2020-03-23T07:43:54.000Z
description: 我喜欢在像素大小上使用rem单位进行CSS大小调整，并且正在尝试使用mixin来帮助解决此问题。对于字体大小，这很容易：\`mixin font-siz...
img: 
author: 蛋蛋
category: question
answer: 2
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我喜欢在像素大小上使用rem单位进行CSS大小调整，并且正在尝试使用mixin来帮助解决此问题。</font><font style="vertical-align: inherit;">对于字体大小，这很容易：</font></font></p>

<pre><code>@mixin font-size($size) {<font></font>
  font-size: $size + px;<font></font>
  font-size: ($size / 10) + rem;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是对于填充，边距等，mixin需要接受可变参数，根据Sass文档</font></font><a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variable_arguments" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variable_arguments</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，使用以下mixin，而不是除以10，mixin只是在数字之间添加斜杠。</font><font style="vertical-align: inherit;">也就是说，这是：</font></font></p>

<pre><code>@mixin padding($padding...) {<font></font>
    padding: $padding + px;<font></font>
    padding: ($padding / 10) + rem;<font></font>
}<font></font>
.class {<font></font>
    @include padding(24);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出此：</font></font></p>

<pre><code>.class {<font></font>
    padding: 24px;<font></font>
    padding: 24/10rem;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是像我期望的那样：</font></font></p>

<pre><code>.class {<font></font>
    padding: 24px;<font></font>
    padding: 2.4rem;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法确保Sass将变量识别为数字，从而正确使用除法运算符？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，在进一步测试之后，我意识到串联仅发生在最后一个变量上。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2931篇《对可变参数Sass mixins进行数学运算》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿前端</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎我真正需要在这里使用的是列表而不是变量参数，以便分别操作每个值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我首先尝试使用@each指令执行此操作，但无法弄清楚如何在声明中使用它。</font><font style="vertical-align: inherit;">这将引发错误：</font></font></p>

<pre><code>@mixin padding($padding) {<font></font>
   padding: @each $value in $padding { $value + px };<font></font>
   padding: @each $value in $padding { ($value / 10) + rem };<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我最终写了一些更为冗长的内容，分别处理四种可能的情况（即，您传递了1、2、3或4个参数）。</font><font style="vertical-align: inherit;">看起来像这样，可以按我的意愿工作：</font></font></p>

<pre><code>@mixin padding($padding) {<font></font>
    @if length($padding) == 1 {<font></font>
        padding: $padding+px;<font></font>
        padding: $padding/10+rem;<font></font>
    }<font></font>
    @if length($padding) == 2 {<font></font>
        padding: nth($padding, 1)+px nth($padding, 2)+px;<font></font>
        padding: nth($padding, 1)*0.1+rem nth($padding, 2)*0.1+rem;<font></font>
    }<font></font>
    @if length($padding) == 3 {<font></font>
        padding: nth($padding, 1)+px nth($padding, 2)+px nth($padding, 3)+px;<font></font>
        padding: nth($padding, 1)*0.1+rem nth($padding, 2)*0.1+rem nth($padding, 3)*0.1+rem;<font></font>
    }<font></font>
    @if length($padding) == 4 {<font></font>
        padding: nth($padding, 1)+px nth($padding, 2)+px nth($padding, 3)+px nth($padding, 4)+px;<font></font>
        padding: nth($padding, 1)*0.1+rem nth($padding, 2)*0.1+rem nth($padding, 3)*0.1+rem nth($padding, 4)*0.1+rem;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在这里收集了rem mixins的集合，包括这个作为Gist的一个</font><a href="https://gist.github.com/doughamlin/7103259"><font style="vertical-align: inherit;">。https</font></a><font style="vertical-align: inherit;">：//gist.github.com/doughamlin/7103259</font></font><a href="https://gist.github.com/doughamlin/7103259"><font style="vertical-align: inherit;"></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个：</font></font></p>

<pre><code>padding: #{$padding / 10}rem;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在SASS / SCSS中进行级联使用ruby语法，并且您在混合一个数学方程式，然后进行级联，这是一个变量类型的混合，所以我不感到惊讶它无效。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对{{here}中包含的表达式和变量进行了评估，就好像它们与该行的其余部分是分开的一样，因此，请不要键入其余部分。</font><font style="vertical-align: inherit;">如果在您不期望的时候输出被引用，这也会派上用场（unquote（）函数也是如此）</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
