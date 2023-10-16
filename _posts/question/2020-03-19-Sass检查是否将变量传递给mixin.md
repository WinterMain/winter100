---
layout: question
title:  Sass检查是否将变量传递给mixin
date:   2020-03-19T04:44:24.000Z
description: 可以说我有一个默认值的mixin$default  1;\`mixin test($p   $default) {    \`if () {   ...
img: 
author: Itachi理查德
category: question
answer: 1
tags: 变量 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以说我有一个默认值的mixin</font></font></p>

<pre><code>$default: 1;<font></font>
<font></font>
@mixin test($p : $default) {<font></font>
    @if () {<font></font>
        // Do something if $p was 4passed?<font></font>
    } @else {<font></font>
        // Do something if $p was not passed?<font></font>
    }<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我这样称呼mixin，则有两个不同的地方：</font></font></p>

<pre><code>@include test(); // A<font></font>
@include test(1);  // B<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么办法可以区分默认值</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（A）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和覆盖默认值</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（B）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的区别</font><font style="vertical-align: inherit;">吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2386篇《Sass检查是否将变量传递给mixin》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi小卤蛋凯</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果稍微修改一下，mixin就会起作用（因为您实际上需要将有问题的参数传递给</font></font><code>@if</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指令。并且您希望将参数默认为</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">or </font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这意味着什么都没有传递）。</font></font></p>

<pre class="lang-js prettyprint-override"><code>@mixin test($p: null) {<font></font>
    @if ($p) {<font></font>
        /* Do something if $p was passed */<font></font>
    } @else {<font></font>
        /* Do something if $p was not passed */<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><a href="http://sassmeister.com/gist/9803199"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示</font></font></strong></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想将其他值设置为默认值，则只需在if语句中检查该特定值（例如，“将if </font></font><code>$p</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置为默认值”）。</font><font style="vertical-align: inherit;">在这里，您将如何通过设置变量的默认值来执行此操作，就像在示例中一样。</font><font style="vertical-align: inherit;">但是，这不会区分“ </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有传递参数</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”和“ </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">传递的值等于默认值</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”。</font></font></p>

<pre class="lang-js prettyprint-override"><code>@mixin test($p: $default) {<font></font>
    @if ($p == $default) {<font></font>
      /* Do something if $p is set to $default */<font></font>
    } @else {<font></font>
      /* Do something else if $p is not $default */<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><a href="http://sassmeister.com/gist/9803569"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示</font></font></strong></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但实际上，您可以结合使用这两种方法...检查是否传递了某些东西</font></font><code>$p</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（如果传递了或不传递，则执行其他操作），如果没有传递任何东西，请将set </font></font><code>$p</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的值</font><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">为default。</font></font></p>

<pre class="lang-js prettyprint-override"><code>@mixin test($p: null) {<font></font>
    @if ($p) {<font></font>
      /* Do something if argument passed */<font></font>
    } @else {<font></font>
      /* Do something else if no argument passed. Set $p to default. */<font></font>
      $p: $default;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><a href="http://sassmeister.com/gist/9805178"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示</font></font></strong></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，它应该适用于除，的布尔值以外的所有值</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都可以</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>@if</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指令进行</font><font style="vertical-align: inherit;">验证</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，要允许将其</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为参数值</font><font style="vertical-align: inherit;">传递</font><font style="vertical-align: inherit;">，您将需要使用更具体的表达式。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre class="lang-js prettyprint-override"><code>...<font></font>
    @if ($p != null) {<font></font>
...<font></font>
</code></pre>

<p><a href="http://sassmeister.com/gist/9805993"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示</font></font></strong></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">瞧瞧，这应该可以解决问题-除非您出于某种原因想要通过</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为论点。</font><font style="vertical-align: inherit;">然后，您需要使用其他默认值，例如极不可能作为参数传递的字符串，例如</font></font><code>"no arguments have been passed"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">=）</font></font></p>

<p><a href="http://sassmeister.com/gist/9806598"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示</font></font></strong></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
