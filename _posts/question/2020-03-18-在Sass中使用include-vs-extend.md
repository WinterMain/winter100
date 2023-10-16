---
layout: question
title:  在Sass中使用\`include vs \`extend？
date:   2020-03-18T07:39:34.000Z
description: 在Sass中，我无法完全分辨使用\`includemixin和使用\`extend占位符类之间的区别。他们不是同一件事吗？...
img: 
author: 前端凯
category: question
answer: 4
tags: ass CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Sass中，我无法完全分辨使用</font></font><code>@include</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">mixin和使用</font></font><code>@extend</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">占位符类</font><font style="vertical-align: inherit;">之间的区别</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">他们不是同一件事吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2020篇《在Sass中使用\`include vs \`extend？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy猴子</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为扩展是纯粹的邪恶，应该避免。</font><font style="vertical-align: inherit;">原因如下：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">鉴于scss：</font></font></p>

<pre><code>%mystyle {color: blue;}<font></font>
.mystyle-class {@extend %mystyle}<font></font>
//basically anything not understood by target browser (such as :last-child in IE8):<font></font>
::-webkit-input-placeholder {@extend %mystyle}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将生成以下CSS：</font></font></p>

<pre><code>.mystyle-class, ::-webkit-input-placeholder { //invalid in non-webkit browsers<font></font>
  color: blue;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当浏览器不了解选择器时，它将使选择器的整个行无效。</font><font style="vertical-align: inherit;">这意味着您宝贵的mystyle类不再是蓝色的（对于许多浏览器而言）。</font><font style="vertical-align: inherit;">这到底是什么意思？</font><font style="vertical-align: inherit;">如果您在任何时候使用扩展程序而浏览器可能无法理解选择器，则该扩展程序的其他所有使用都会失效。</font><font style="vertical-align: inherit;">此行为还允许进行邪恶嵌套：</font></font></p>

<pre><code>%mystyle {color: blue;}<font></font>
@mixin mystyle-mixin {@extend %mystyle; height: 0;}<font></font>
::-webkit-input-placeholder {@include mystyle-mixin} <font></font>
//you thought nesting in a mixin would make it safe?<font></font>
.mystyle-class {@extend %mystyle;}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果：</font></font></p>

<pre><code>::-webkit-input-placeholder, .mystyle-class { //invalid in non-webkit browsers<font></font>
  color: blue;<font></font>
}<font></font>
<font></font>
::-webkit-input-placeholder {<font></font>
  height: 0;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tl; dr：@extend绝对可以，只要您从未将其与任何浏览器特殊选择器一起使用即可。</font><font style="vertical-align: inherit;">如果这样做，无论您在哪里使用它，它都会突然拆下样式。</font><font style="vertical-align: inherit;">尝试依靠mixin代替！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门Sam</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个好的方法是同时使用两者-创建一个mixin，它将允许您进行大量自定义，然后扩展该mixin的常见配置。</font><font style="vertical-align: inherit;">例如（SCSS语法）：</font></font></p>

<pre><code>@mixin my-button($size: 15, $color: red) {<font></font>
  @include inline-block;<font></font>
  @include border-radius(5px);<font></font>
  font-size: $size + px;<font></font>
  background-color: $color;<font></font>
}<font></font>
%button {<font></font>
  @include my-button;<font></font>
}<font></font>
%alt-button {<font></font>
  @include my-button(15, green);<font></font>
}<font></font>
%big-button {<font></font>
  @include my-button(25);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样可以避免您一次又一次调用“我的按钮” mixin。</font><font style="vertical-align: inherit;">这也意味着您不必记住通用按钮的设置，但是您仍然可以选择一个超级独特的一次性按钮。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我以</font><font style="vertical-align: inherit;">不久前</font></font><a href="http://fredparke.com/blog/ditto-making-good-use-sass-extends-and-placeholder-selectors"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">写的博客文章</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为例</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">希望这可以帮助。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我完全同意d4nyll的先前回答。</font><font style="vertical-align: inherit;">有</font></font><a href="https://kolosek.com/css-extend/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一篇</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于扩展选项的文章，当我研究这个主题时，我发现了很多关于扩展的抱怨，所以请记住，如果有可能使用mixin代替扩展，就跳过扩展。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云卡卡西神乐</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果mixins接受参数，请使用mixins，其中编译输出将根据传递给它的内容而改变。</font></font></p>

<pre><code>@include opacity(0.1);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将扩展（带占位符）用于</font><font style="vertical-align: inherit;">样式的</font><font style="vertical-align: inherit;">任何</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">静态</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可重复块。</font></font></p>

<pre><code>color: blue;<font></font>
font-weight: bold;<font></font>
font-size: 2em;<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
