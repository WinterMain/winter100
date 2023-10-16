---
layout: question
title:  在SASS IF语句中使用多个条件（AND）
date:   2020-03-18T10:33:32.000Z
description: 使用SASS，我想在IF语句中有多个条件 我现在使用的是：\`function color-x ($alpha) {    \`if      $a...
img: 
author: 泡芙逆天
category: question
answer: 2
tags: if语句 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用SASS，我想在IF语句中有多个条件 </font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我现在使用的是：</font></font></strong></p>

<pre><code>@function color-x ($alpha) {<font></font>
    @if      $accent == red   {@return red($alpha)} <font></font>
    @else if $accent == green {@return green($alpha)} <font></font>
    @else if $accent == blue  {@return blue($alpha)}<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的幼稚（失败）尝试使用多个条件：</font></font></strong></p>

<pre><code>@function color-x ($alpha) {<font></font>
    @if      $accent == red   &amp;&amp; theme == light {@return red($alpha)} <font></font>
    @else if $accent == green &amp;&amp; theme == light {@return green($alpha)} <font></font>
    @else if $accent == blue  &amp;&amp; theme == light {@return blue($alpha)}<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否可以有多个条件？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2157篇《在SASS IF语句中使用多个条件（AND）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿小小</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从Sass语言参考文档中：</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">布尔运算</font></font></strong></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SassScript支持</font></font><code>and</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>or</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>not</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运营商布尔值。</font></font></p>
</blockquote>

<p><a href="http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#boolean_operations" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（链接）</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，具有复合条件的if语句表达式将如下所示：</font></font></p>

<pre><code>@if $var1 == value1 and $var2 == value2 {<font></font>
    // ...<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，括号可用于影响更复杂的表达式中的运算顺序：</font></font></p>

<pre><code>@if ($var1 == value1 and not ($var2 == value2)) or ($var3 == value3) {<font></font>
    // ...<font></font>
} <font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光猪猪</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以这样做：</font></font></p>

<pre><code>@if index("foo" "bar", $value) { .. }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是要当心：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您尝试执行的操作可能不太明显。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它返回数字或</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而不是布尔值。</font></font></li>
</ol></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
