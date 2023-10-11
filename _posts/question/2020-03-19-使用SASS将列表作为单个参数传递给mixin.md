---
layout: question
title:  使用SASS将列表作为单个参数传递给mixin
date:   2020-03-19T03:32:56.000Z
description: 我喜欢用SASS来制作mixins，这有助于我实现跨浏览器的良好兼容性。我想制作一个看起来像这样的mixin：\`mixin box-shadow($v...
img: 
author: 路易小卤蛋
category: question
answer: 6
tags: ass CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我喜欢用SASS来制作mixins，这有助于我实现跨浏览器的良好兼容性。</font><font style="vertical-align: inherit;">我想制作一个看起来像这样的mixin：</font></font></p>

<pre><code>@mixin box-shadow($value) {<font></font>
    box-shadow: $value;<font></font>
    -webkit-box-shadow: $value; <font></font>
    -moz-box-shadow: $value; <font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以通过这样的东西：</font></font></p>

<pre><code>@include box-shadow(inset -2px -2px 2px rgba(0,0,0,0.5), inset 1px 1px 2px rgba(255,255,255,0.5), inset 0px 0px 0px 1px #ff800f);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果是这样的：</font></font></p>

<pre><code>box-shadow: inset -2px -2px 2px rgba(0,0,0,0.5), inset 1px 1px 2px rgba(255,255,255,0.5),inset 0px 0px 0px 1px #ff800f;<font></font>
-moz-box-shadow: inset -2px -2px 2px rgba(0,0,0,0.5), inset 1px 1px 2px rgba(255,255,255,0.5),inset 0px 0px 0px 1px #ff800f;<font></font>
-webkit-box-shadow: inset -2px -2px 2px rgba(0,0,0,0.5), inset 1px 1px 2px rgba(255,255,255,0.5),inset 0px 0px 0px 1px #ff800f; <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，这不起作用，因为编译器认为我正在尝试传递mixin 3参数。</font><font style="vertical-align: inherit;">box-shadow需要可变数量的逗号分隔位，所以我不能只定义一个mixin </font></font><code>box-shadow($1,$2,$3)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图通过 </font></font></p>

<pre><code>@include box-shadow("inset -2px -2px 2px rgba(0,0,0,0.5), inset 1px 1px 2px rgba(255,255,255,0.5), inset 0px 0px 0px 1px #ff800f");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并进行了编译，但实际上并未渲染样式。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关如何解决此问题的任何提示？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2300篇《使用SASS将列表作为单个参数传递给mixin》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Green</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想指出的是，您也可以在调用mixin时使用参数名称传递值：</font></font></p>

<pre><code>@mixin shadow($shadow: 0 0 2px #000) {<font></font>
    box-shadow: $shadow;<font></font>
    -webkit-box-shadow: $shadow; <font></font>
    -moz-box-shadow: $shadow; <font></font>
}<font></font>
<font></font>
.my-shadow {<font></font>
  @include shadow($shadow: 0 0 5px #900, 0 2px 2px #000);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，scss是作用域的，因此</font></font><code>$shadow</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果以后再次使用，仍将保留其mixin值。</font><font style="vertical-align: inherit;">少一点我认为，在这种情况下会遭受重新分配</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ALEYHarry</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这不会编译：</font></font></p>

<pre><code>+box-shadow(inset 0 1px 0 #FFD265, 0 0 0 1px #912E01, 0 0 0 7px rgba(0, 0, 0, .1), 0 1px 4px rgba(0, 0, 0, .6))
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编译：</font></font></p>

<pre><code>+box-shadow((inset 0 1px 0 #FFD265, 0 0 0 1px #912E01, 0 0 0 7px rgba(0, 0, 0, .1), 0 1px 4px rgba(0, 0, 0, .6)))
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也就是说，在以逗号分隔的阴影列表周围添加括号，它应该可以工作：</font></font></p>

<pre><code>+box-shadow( (myshadow1, myshadow2, ...) )
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天L</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用字符串插值</font></font></p>

<pre><code>@include box-shadow(#{"inset -2px -2px 2px rgba(0,0,0,0.5), inset 1px 1px 2px rgba(255,255,255,0.5), inset 0px 0px 0px 1px #ff800f"});
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyEvaL</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可变参数</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时，mixin接受未知数量的参数是有意义的。</font><font style="vertical-align: inherit;">例如，用于创建框阴影的混合可以将任意数量的阴影作为参数。</font><font style="vertical-align: inherit;">在这些情况下，Sass支持“变量参数”，即在混合声明末尾的参数，该参数接受所有剩余的参数并将它们打包为列表。</font><font style="vertical-align: inherit;">这些参数看起来像普通参数，但后面跟有...。例如：</font></font></p>

<pre><code>@mixin box-shadow($shadows...) {<font></font>
  -moz-box-shadow: $shadows;<font></font>
  -webkit-box-shadow: $shadows;<font></font>
  box-shadow: $shadows;<font></font>
}<font></font>
<font></font>
.shadows {<font></font>
  @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过：</font><a href="http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#variable_arguments" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#variable_arguments" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#variable_arguments</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi理查德</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有很多方法可以做到这一点，最好的方法是使用像这样的mixin：</font></font></p>

<pre><code>@mixin box-shadow($value...) {<font></font>
  -webkit-box-shadow: $value;               <font></font>
  -moz-box-shadow: $value;                  <font></font>
  box-shadow: $value;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并像这样包含它：</font></font></p>

<p><code>@include box-shadow(inset 0 1px 0 #FFD265, 0 0 0 1px #912E01, 0 0 0 7px rgba(0, 0, 0, .1), 0 1px 4px rgba(0, 0, 0, .6));</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></strong></p>

<pre><code>@mixin box-shadow($value) {<font></font>
      -webkit-box-shadow: #{$value};               <font></font>
      -moz-box-shadow: #{$value};          <font></font>
      box-shadow: #{$value};<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并像这样包含它：</font></font></p>

<pre><code>@include box-shadow("inset 0 1px 0 #FFD265, 0 0 0 1px #912E01, 0 0 0 7px rgba(0, 0, 0, .1), 0 1px 4px rgba(0, 0, 0, .6)");
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么：</font></font></strong></p>

<pre><code>@mixin box-shadow($value) {<font></font>
      $value: unquote($value);<font></font>
      -webkit-box-shadow: $value;               <font></font>
      -moz-box-shadow: $value;          <font></font>
      box-shadow: $value;<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么：</font></font></strong></p>

<pre><code>@mixin box-shadow($value) {<font></font>
  -webkit-box-shadow: $value;               <font></font>
  -moz-box-shadow: $value;                  <font></font>
  box-shadow: $value;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并像这样包含它： </font></font></p>

<pre><code>@include box-shadow((inset 0 1px 0 #FFD265, 0 0 0 1px #912E01, 0 0 0 7px rgba(0, 0, 0, .1), 0 1px 4px rgba(0, 0, 0, .6)));
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sass非常强大:)</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子卡卡西</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SASS 3.1以下</font></font></h2>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：如果您使用的是SASS 3.2+，则按照rzar的建议使用“可变参数”功能。</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需在mixin本身中使用字符串插值，如下所示： </font></font></p>

<pre class="lang-java prettyprint-override"><code>@mixin box-shadow($value) {<font></font>
  -webkit-box-shadow: #{$value};               // #{} removes the quotation marks that<font></font>
  -moz-box-shadow: #{$value};                  // cause the CSS to render incorrectly.<font></font>
  box-shadow: #{$value};<font></font>
}<font></font>
<font></font>
// ... calling it with quotations works great ...<font></font>
@include box-shadow("inset -2px -2px 2px rgba(0,0,0,0.5), inset 1px 1px 2px rgba(255,255,255,0.5), inset 0px 0px 0px 1px #ff800f");<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢小费瑞安。</font></font></em></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
