---
layout: question
title:  您可以在SASS / SCSS CSS中使用多个条件吗
date:   2020-04-07T03:38:18.000Z
description: 我正在使用SCSS代码来设计我的ruby应用程序的样式，并试图编写自己的“四舍五入”的mixin来帮助进行多浏览器边框的四舍五入。目前，我有以下内容：...
img: 
author: Tony凯
category: question
answer: 2
tags: HTML CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用SCSS代码来设计我的ruby应用程序的样式，并试图编写自己的“四舍五入”的mixin来帮助进行多浏览器边框的四舍五入。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前，我有以下内容：</font></font></p>

<pre><code>@mixin rounded($corner: all , $radius: 8px) {<font></font>
  @if $corner==all || $corner==bottom || $corner == right || $corner==bottom-right{webkit-border-bottom-right-radius: $radius;}<font></font>
  @if $corner==all || $corner==bottom || $corner == left || $corner==bottom-left{-webkit-border-bottom-left-radius: $radius;}<font></font>
  @if $corner==all || $corner==top || $corner == right || $corner==top-right{-webkit-border-top-right-radius: $radius;}<font></font>
  @if $corner==all || $corner==bottom || $corner == left || $corner==top-left{-webkit-border-top-left-radius: $radius;}<font></font>
<font></font>
  @if $corner==all || $corner==bottom || $corner == right || $corner==bottom-right{-khtml-border-radius-bottomright: $radius;}<font></font>
  @if $corner==all || $corner==bottom || $corner == left || $corner==bottom-left{-khtml-border-radius-bottomleft: $radius;}<font></font>
  @if $corner==all || $corner==top || $corner == right || $corner==top-right{-khtml-border-radius-topright: $radius;}<font></font>
  @if $corner==all || $corner==bottom || $corner == left || $corner==top-left{-khtml-border-radius-topleft: $radius;}<font></font>
<font></font>
  @if $corner==all || $corner==bottom || $corner == right || $corner==bottom-right{-moz-border-radius-bottomright: $radius;}<font></font>
  @if $corner==all || $corner==bottom || $corner == left || $corner==bottom-left{-moz-border-radius-bottomleft: $radius;}<font></font>
  @if $corner==all || $corner==top || $corner == right || $corner==top-right{-moz-border-radius-topright: $radius;}<font></font>
  @if $corner==all || $corner==bottom || $corner == left || $corner==top-left{-moz-border-radius-topleft: $radius;}<font></font>
<font></font>
  @if $corner==all || $corner==bottom || $corner == right || $corner==bottom-right{border-bottom-right-radius: $radius;}<font></font>
  @if $corner==all || $corner==bottom || $corner == left || $corner==bottom-left{border-bottom-left-radius: $radius;}<font></font>
  @if $corner==all || $corner==top || $corner == right || $corner==top-right{border-top-right-radius: $radius;}<font></font>
  @if $corner==all || $corner==bottom || $corner == left || $corner==top-left{border-top-left-radius: $radius;}<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，似乎SASS只能在if语句中处理一个条件？</font><font style="vertical-align: inherit;">有没有办法解决这个问题，或者我必须为每个圆角做四个if语句？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4091篇《您可以在SASS / SCSS CSS中使用多个条件吗》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Pro卡卡西</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要使用</font></font><code>or</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>||</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">请参阅</font></font><a href="http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#boolean_operations" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sass文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且看起来您在</font></font><code>@if</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个块</font><font style="vertical-align: inherit;">的最后一个</font><font style="vertical-align: inherit;">语句中</font><font style="vertical-align: inherit;">都有一个错字</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>$corner==bottom should be $corner==top
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我这样写：希望您会发现它有用。 </font></font></p>

<pre><code>@mixin rounded($amount: "10px",$position: null) {<font></font>
  @if $position != null {<font></font>
    @if $position == "top" or $position == "bottom" {<font></font>
      // top or bottom <font></font>
      -webkit-border#{$position}-left-radius: $amount;<font></font>
      -moz-border#{$position}-left-radius: $amount;<font></font>
      border#{$position}-left-radius: $amount;<font></font>
<font></font>
      -webkit-border#{$position}-right-radius: $amount;<font></font>
      -moz-border#{$position}-right-radius: $amount;<font></font>
      border#{$position}-right-radius: $amount;<font></font>
<font></font>
    } @else {<font></font>
      // top-left or top-right or bottom-left or bottom-right<font></font>
      -webkit-border#{$position}-radius: $amount;<font></font>
      -moz-border#{$position}-radius: $amount;<font></font>
      border#{$position}-radius: $amount;      <font></font>
    }<font></font>
  } @else {<font></font>
    // ALL IF EMPTY<font></font>
    -webkit-border-radius: $amount;<font></font>
    -moz-border-radius: $amount;<font></font>
    border-radius: $amount; <font></font>
  }<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以这样使用它：</font></font></p>

<pre><code>  @include rounded(); /*as default 10px on all corners*/<font></font>
  @include rounded(15px); /*all corners*/ <font></font>
<font></font>
  @include rounded(15px, top); /*all top corners*/ <font></font>
  @include rounded(15px, bottom); /* all bottom corners*/ <font></font>
<font></font>
  @include rounded(15px, top-right); /*this corner only*/ <font></font>
  @include rounded(15px, top-left); /*this corner only*/ <font></font>
  @include rounded(15px, bottom-right); /*this corner only*/ <font></font>
  @include rounded(15px, bottom-left); /*this corner only*/ <font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
