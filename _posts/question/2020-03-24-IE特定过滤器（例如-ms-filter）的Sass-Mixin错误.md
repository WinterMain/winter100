---
layout: question
title:  IE特定过滤器（例如-ms-filter）的Sass Mixin错误
date:   2020-03-24T09:13:31.000Z
description: 我正在尝试使按钮混合如下：=default_button(\!lighter, \!darker)    border= 1px \!lighter so...
img: 
author: StafanTony
category: question
answer: 2
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使按钮混合如下：</font></font></p>

<pre><code>=default_button(!lighter, !darker) <font></font>
  :border= 1px !lighter solid<font></font>
  :background-color #e3e3e3<font></font>
  :background= -webkit-gradient(linear, 0 0, 0 100%, from(!lighter), to(!darker)) repeat-x, #d0581e<font></font>
  :background= -moz-linear-gradient(90deg, !darker, !lighter) repeat-x scroll 0 0 #d0581e<font></font>
  :filter= progid:DXImageTransform.Microsoft.gradient(startColorstr='!lighter', endColorstr='!darker')<font></font>
  :-ms-filter= "progid:DXImageTransform.Microsoft.gradient(startColorstr='!lighter', endColorstr='!darker')"<font></font>
  :zoom 1<font></font>
  :margin 0 0 0 0<font></font>
  :width auto<font></font>
  :padding 2px 14px 2px 14px<font></font>
  :border-radius 10px<font></font>
  :-webkit-border-radius 10px<font></font>
  :-moz-border-radius 10px<font></font>
  :color #FFF<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我编译sass时，对于以-filter和-ms-filter开头的行，我会收到此错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SASS :: SyntaxError：预期的rparen令牌，为single_eq令牌</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我很确定这是=的位置，但是我不确定如何正确编写它。</font><font style="vertical-align: inherit;">如果我传递十六进制值而不是！lighter，！darker，它将起作用，因为这样我就可以删除=符号，如下所示：</font></font></p>

<pre><code>:filter progid:DXImageTransform.Microsoft.gradient(startColorstr='#F89F16', endColorstr='#d0581e')<font></font>
:-ms-filter "progid:DXImageTransform.Microsoft.gradient(startColorstr='#F89F16', endColorstr='#d0581e')"<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3535篇《IE特定过滤器（例如-ms-filter）的Sass Mixin错误》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新语法以</font></font><code>:</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font><code>=</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性定义使用：</font></font></p>

<pre><code>=mixin($variable) <font></font>
  property: value<font></font>
  property: $variable<font></font>
</code></pre>

<p>Check out the <a href="http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#mixins" rel="nofollow noreferrer">SASS Reference</a>, though the examples are in SCSS rather than <a href="http://sass-lang.com/docs/yardoc/file.INDENTED_SYNTAX.html" rel="nofollow noreferrer">SASS indented style</a>. Full <a href="http://sass-lang.com/docs/yardoc/_index.html" rel="nofollow noreferrer">index of the SASS documentation</a>.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插值</font></font><code>#{}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时不起作用，因为它会缩短十六进制颜色值。</font><font style="vertical-align: inherit;">例如，它将缩短</font></font><code>#334455</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>#345</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这会破坏过滤器语法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SASS在3.2版中具有新功能：</font></font><code>ie-hex-str()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的工作方式：</font></font></p>

<pre><code>filter: unquote("progid:DXImageTransform.Microsoft.gradient(startColorstr='")<font></font>
+ ie-hex-str($start)<font></font>
+ unquote("', endColorstr='")<font></font>
+ ie-hex-str($stop)<font></font>
+ unquote("',GradientType=0)"); /* IE6-9 */<font></font>
</code></pre>

<ul>
<li><a href="http://sass-lang.com/docs/yardoc/file.SASS_CHANGELOG.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SASS变更日志</font></font></a></li>
<li><a href="http://sass-lang.com/docs/yardoc/Sass/Script/Functions.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SASS功能</font></font></a></li>
</ul></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
