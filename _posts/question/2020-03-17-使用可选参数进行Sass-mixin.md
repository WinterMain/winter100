---
layout: question
title:  使用可选参数进行Sass mixin
date:   2020-03-17T09:14:50.000Z
description: 我正在写一个像这样的mixin：\`mixin box-shadow($top, $left, $blur, $color, $inset "") {...
img: 
author: 樱AItachi
category: question
answer: 13
tags: ass CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在写一个像这样的mixin：</font></font></p>

<pre class="lang-css prettyprint-override"><code>@mixin box-shadow($top, $left, $blur, $color, $inset:"") {<font></font>
    -webkit-box-shadow: $top $left $blur $color $inset;<font></font>
    -moz-box-shadow: $top $left $blur $color $inset;<font></font>
    box-shadow: $top $left $blur $color $inset;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当真正被调用时，我真正想要的是如果不</font></font><code>$inset</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">传递</font><font style="vertical-align: inherit;">任何</font><font style="vertical-align: inherit;">值</font><font style="vertical-align: inherit;">，则不会</font><font style="vertical-align: inherit;">输出任何内容，而是将其编译为如下所示：</font></font></p>

<pre class="lang-css prettyprint-override"><code>-webkit-box-shadow: 2px 2px 5px #555555 "";<font></font>
-moz-box-shadow: 2px 2px 5px #555555 "";<font></font>
box-shadow: 2px 2px 5px #555555 "";<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何重写mixin，以便在没有</font></font><code>$inset</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">传递</font><font style="vertical-align: inherit;">值的情况下</font><font style="vertical-align: inherit;">什么也不输出？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1933篇《使用可选参数进行Sass mixin》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">HarryGreen前端</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">超级简单的方法</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需将默认值添加</font></font><code>none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到$ inset-这样</font></font></p>

<pre><code>@mixin box-shadow($top, $left, $blur, $color, $inset: none) { ....
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，当没有传递$ inset时，将不会显示任何内容。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">AEva</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>You can always assign null to your optional arguments. Here is a simple fix</p>

<pre><code>@mixin box-shadow($top, $left, $blur, $color, $inset:null) { //assigning null to inset value makes it optional<font></font>
    -webkit-box-shadow: $top $left $blur $color $inset;<font></font>
    -moz-box-shadow: $top $left $blur $color $inset;<font></font>
    box-shadow: $top $left $blur $color $inset;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖泡芙</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><pre><code>@mixin box-shadow($left: 0, $top: 0, $blur: 6px, $color: hsla(0,0%,0%,0.25), $inset: false) {<font></font>
    @if $inset {<font></font>
        -webkit-box-shadow: inset $left $top $blur $color;<font></font>
        -moz-box-shadow: inset $left $top $blur $color;<font></font>
        box-shadow: inset $left $top $blur $color;<font></font>
    } @else {<font></font>
        -webkit-box-shadow: $left $top $blur $color;<font></font>
        -moz-box-shadow: $left $top $blur $color;<font></font>
        box-shadow: $left $top $blur $color;<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁乐</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是CSS编译器的新手，希望能对您有所帮助，</font></font></p>

<pre><code>        @mixin positionStyle($params...){<font></font>
<font></font>
            $temp:nth($params,1);<font></font>
            @if $temp != null{<font></font>
            position:$temp;<font></font>
            }<font></font>
<font></font>
             $temp:nth($params,2);<font></font>
            @if $temp != null{<font></font>
            top:$temp;<font></font>
            }<font></font>
<font></font>
             $temp:nth($params,3);<font></font>
            @if $temp != null{<font></font>
            right:$temp;<font></font>
            }<font></font>
<font></font>
             $temp:nth($params,4);<font></font>
            @if $temp != null{<font></font>
            bottom:$temp;<font></font>
            }<font></font>
<font></font>
            $temp:nth($params,5);<font></font>
            @if $temp != null{<font></font>
            left:$temp;<font></font>
            }<font></font>
<font></font>
    .someClass{<font></font>
    @include positionStyle(absolute,30px,5px,null,null);<font></font>
    }<font></font>
<font></font>
//output<font></font>
<font></font>
.someClass{<font></font>
position:absolute;<font></font>
 top: 30px;<font></font>
 right: 5px;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙理查德</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><h1><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">甚至DRYer方式！</font></font></strong></h1>

<pre><code>@mixin box-shadow($args...) {<font></font>
  @each $pre in -webkit-, -moz-, -ms-, -o- {<font></font>
    #{$pre + box-shadow}: $args;<font></font>
  } <font></font>
  #{box-shadow}: #{$args};<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以更聪明地重用盒子阴影了：</font></font></p>

<pre><code>.myShadow {<font></font>
  @include box-shadow(2px 2px 5px #555, inset 0 0 0);<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil小哥番长</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用sass@3.4.9：</font></font></p>

<pre><code>// declare<font></font>
@mixin button( $bgcolor:blue ){<font></font>
    background:$bgcolor;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">且无价值使用时，按钮将变为蓝色    </font></font></p>

<pre><code>//use<font></font>
.my_button{<font></font>
    @include button();<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有值的按钮将为红色</font></font></p>

<pre><code>//use<font></font>
.my_button{<font></font>
    @include button( red );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也与六合一 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端L小小</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这个老问题，但是我认为这仍然有意义。</font><font style="vertical-align: inherit;">可以说，更清晰的方法是使用unquote（）函数（SASS自3.0.0版起使用）：</font></font></p>

<pre><code>@mixin box-shadow($top, $left, $blur, $color, $inset:"") {<font></font>
  -webkit-box-shadow: $top $left $blur $color unquote($inset);<font></font>
  -moz-box-shadow: $top $left $blur $color unquote($inset);<font></font>
  box-shadow: $top $left $blur $color unquote($inset);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这大致相当于Josh的答案，但是我认为显式命名的函数比字符串插值语法更容易混淆。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德小胖</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我使用的解决方案，以下说明：</font></font></p>

<pre><code>@mixin transition($trans...) {<font></font>
  @if length($trans) &lt; 1 {<font></font>
    $trans: all .15s ease-out;<font></font>
  }<font></font>
  -moz-transition: $trans;<font></font>
  -ms-transition: $trans;<font></font>
  -webkit-transition: $trans;<font></font>
  transition: $trans;<font></font>
}<font></font>
<font></font>
.use-this {<font></font>
  @include transition;<font></font>
}<font></font>
<font></font>
.use-this-2 {<font></font>
  @include transition(all 1s ease-out, color 2s ease-in);<font></font>
}<font></font>
</code></pre>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">宁愿将属性值作为本地css传递，以保持接近“舌头”</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">允许传递可变数量的参数</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义懒惰的默认值</font></font></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Pro</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道它不是您正在寻找的答案，但是您可以</font></font><code>"null"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在进行</font></font><code>@include box-shadow</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">混合</font><font style="vertical-align: inherit;">时作为最后一个参数</font><font style="vertical-align: inherit;">传递</font><font style="vertical-align: inherit;">，就像</font></font><code>@include box-shadow(12px, 14px, 2px, green, null);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在这样，如果那个参数在该属性中只有一个，则该属性（及其（默认）值）不会被编译。</font><font style="vertical-align: inherit;">如果该“行”上有两个或多个参数，则只有您为空的参数才会被编译（您的情况）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS输出完全如您所愿，但是您必须编写</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">s :)</font></font></p>

<pre><code>  @include box-shadow(12px, 14px, 2px, green, null);<font></font>
<font></font>
  // compiles to ...<font></font>
<font></font>
  -webkit-box-shadow: 12px 14px 2px green;  <font></font>
  -moz-box-shadow: 12px 14px 2px green;  <font></font>
  box-shadow: 12px 14px 2px green;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德GO</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sass支持</font></font><code>@if</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句。</font><font style="vertical-align: inherit;">（请参阅</font></font><a href="http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#control_directives" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以这样编写mixin：</font></font></p>

<pre><code>@mixin box-shadow($top, $left, $blur, $color, $inset:"") {<font></font>
  @if $inset != "" {<font></font>
    -webkit-box-shadow:$top $left $blur $color $inset;<font></font>
    -moz-box-shadow:$top $left $blur $color $inset;<font></font>
    box-shadow:$top $left $blur $color $inset;<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁JimDavaid</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将属性null设置为默认值，如果不传递该参数，它将不会被解释。</font></font></p>

<pre><code>@mixin box-shadow($top, $left, $blur, $color, $inset:null) {<font></font>
  -webkit-box-shadow: $top $left $blur $color $inset;<font></font>
  -moz-box-shadow:    $top $left $blur $color $inset;<font></font>
  box-shadow:         $top $left $blur $color $inset;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这意味着您可以这样编写include语句。</font></font></p>

<pre><code>@include box-shadow($top, $left, $blur, $color);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是像这样写。</font></font></p>

<pre><code>@include box-shadow($top, $left, $blur, $color, null);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如图答案</font></font><a href="https://stackoverflow.com/a/23565388/4601149"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝梅</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><h1><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更好的干法</font></font></strong></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是传递</font></font><code>$args...</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给的</font></font><code>@mixin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这样，无论</font></font><code>$args</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您要通过</font><font style="vertical-align: inherit;">多少</font><font style="vertical-align: inherit;">次。</font><font style="vertical-align: inherit;">在</font></font><code>@input</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通话中，您可以传递所有需要的参数。</font><font style="vertical-align: inherit;">像这样：</font></font></p>

<pre><code>@mixin box-shadow($args...) {<font></font>
  -webkit-box-shadow: $args;<font></font>
  -moz-box-shadow: $args;<font></font>
  box-shadow: $args;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以通过传递所有需要的参数，在每个所需的类中重用盒子阴影：</font></font></p>

<pre><code>.my-box-shadow {<font></font>
  @include box-shadow(2px 2px 5px #555, inset 0 0 0);<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐猴子</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种干燥的方式</font></font></h2>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且，通常，这是删除引号的巧妙方法。</font></font></em></p>

<pre class="lang-css prettyprint-override"><code>@mixin box-shadow($top, $left, $blur, $color, $inset:"") {<font></font>
  -webkit-box-shadow: $top $left $blur $color #{$inset};<font></font>
  -moz-box-shadow:    $top $left $blur $color #{$inset};<font></font>
  box-shadow:         $top $left $blur $color #{$inset};<font></font>
}<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SASS版本3+，您可以使用</font></font><code>unquote()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></h3>

<pre class="lang-css prettyprint-override"><code>@mixin box-shadow($top, $left, $blur, $color, $inset:"") {<font></font>
  -webkit-box-shadow: $top $left $blur $color unquote($inset);<font></font>
  -moz-box-shadow:    $top $left $blur $color unquote($inset);<font></font>
  box-shadow:         $top $left $blur $color unquote($inset);<font></font>
} <font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里进行选择：</font></font><a href="https://stackoverflow.com/questions/7517941/pass-a-list-to-a-mixin-as-a-single-argument-with-sass/9960372#9960372"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用SASS作为单个参数将列表传递给mixin</font></font></a></em></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
