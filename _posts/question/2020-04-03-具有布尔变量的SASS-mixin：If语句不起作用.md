---
layout: question
title:  具有布尔变量的SASS mixin：If语句不起作用
date:   2020-04-03T02:45:25.000Z
description: 我正在创建一个mixin，其样式为$element，$property以生成特定于页面的CSS。（背景：有四页具有不同的配色方案）。不起作用的mixi...
img: 
author: 飞云
category: question
answer: 2
tags: 范围 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在创建一个mixin，其样式为</font></font><code>$element</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>$property</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以生成特定于页面的CSS。</font><font style="vertical-align: inherit;">（背景：有四页具有不同的配色方案）。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不起作用的mixin（带有if语句）：</font></font></strong></p>

<pre><code>@mixin themify($element, $property, $color-light: false) {<font></font>
    @if $color-light == "true" {<font></font>
        $pages: home forestGreen, about darkOrange, work dodgerBlue, contact fireBrick;<font></font>
    }<font></font>
    @else {<font></font>
        $pages: home darkGreen, about orange, work royalBlue, contact crimson;<font></font>
    }<font></font>
    @each $page in $pages {<font></font>
        .page--#{nth($page, 1)} .#{$element} {<font></font>
            #{$property}: nth($page, 2);<font></font>
        }<font></font>
    }<font></font>
}<font></font>
<font></font>
/* Call the mixin */<font></font>
@include themify(site-nav, background-color, $color-light: true);<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误：</font></font></strong></p>

<pre><code>error/style.scss (Line 47 of css/ui/_misc.scss: Undefined variable "$pages".)
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新资料</font></font></h2>

<p><font style="vertical-align: inherit;"></font><code>$pages: "";</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在if语句之前</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">为什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3909篇《具有布尔变量的SASS mixin：If语句不起作用》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要</font></font><code>$pages</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>@if</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">子句</font><font style="vertical-align: inherit;">外定义</font><font style="vertical-align: inherit;">一个默认值</font><font style="vertical-align: inherit;">。</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
这是一个范围问题...该</font></font><code>@if</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">子句的范围比您的mixin窄...因此内部定义的任何内容对该范围都是私有的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样尝试：</font></font></p>

<pre><code>@mixin themify($element, $property, $color-light: false) {<font></font>
    $pages: ();<font></font>
    @if $color-light == true { // boolean check not string<font></font>
        $pages: home forestGreen, about darkOrange, work dodgerBlue, contact fireBrick;<font></font>
    }<font></font>
    @else {<font></font>
        $pages: home darkGreen, about orange, work royalBlue, contact crimson;<font></font>
    }<font></font>
    @each $page in $pages {<font></font>
        .page--#{nth($page, 1)} .#{$element} {<font></font>
            #{$property}: nth($page, 2);<font></font>
        }<font></font>
    }<font></font>
}<font></font>
<font></font>
/* Call the mixin */<font></font>
@include themify(site-nav, background-color, $color-light: true);<font></font>
</code></pre>

<p><a href="http://sassmeister.com/gist/8615883" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">消息错误可能令人困惑，但是您有语法错误。</font><font style="vertical-align: inherit;">应该</font></font><code>@else</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会</font></font><code>else</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
