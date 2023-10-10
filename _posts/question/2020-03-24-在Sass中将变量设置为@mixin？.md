---
layout: question
title:  在Sass中将变量设置为\`mixin？
date:   2020-03-24T06:17:13.000Z
description: 有没有办法设置\`include mixin();变量？我试过了\`mixin bg-gradient($fallback, $type, $positi...
img: 
author: Tony凯
category: question
answer: 2
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法设置</font></font><code>@include mixin();</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量？</font><font style="vertical-align: inherit;">我试过了</font></font></p>

<pre class="lang-css prettyprint-override"><code>@mixin bg-gradient($fallback, $type, $positionX, $positionY, $from, $from-percent, $to, $to-percent){<font></font>
    background: $fallback;<font></font>
    background: -webkit-#{$type}-gradient($positionX $positionY, $from $from-percent, $to $to-percent);<font></font>
    background:    -moz-#{$type}-gradient($positionX $positionY, $from $from-percent, $to $to-percent);<font></font>
    background:         #{$type}-gradient($positionX $positionY, $from $from-percent, $to $to-percent);<font></font>
}<font></font>
<font></font>
$navBg: @include bg-gradient(#eee, radial, top, center, #999, 0%, #555, 100%);<font></font>
body { $navBg; } // it gave me an error<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果尝试将返回值设置为SASS变量，则需要使用@function，而不是@mixin。</font><font style="vertical-align: inherit;">这让我挂了一会儿，却没有意识到@function。</font><font style="vertical-align: inherit;">例如...</font></font></p>

<pre><code>@function font($font-size, $line-height: 1.4, $font-family: Arial) {<font></font>
<font></font>
    @if $line-height == 1.4 {<font></font>
        $line-height: round($line-height*$font-size);<font></font>
    }<font></font>
<font></font>
    @return #{$font-size}/#{$line-height} $font-family;<font></font>
}<font></font>
<font></font>
$font-medium: font(20px);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">顺便说一句，尽管这不能完全满足该用户的需求，但这是互联网搜索中弹出的唯一一则关于将var设置为mixin的信息，所以我想在这里与其他人分享以了解如何做如果出现这种情况。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道有什么具体的方法可以实现，但是如果您只是尝试在特定类型的渐变上干燥设置，则可以为其编写包装mixin：</font></font></p>

<pre><code>@mixin navBg() {<font></font>
    @include bg-gradient(#eee, radial, top, center, #999, 0%, #555, 100%);<font></font>
}<font></font>
body { @include navBg; }<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><a href="http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#variables_" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是SASS变量支持的数据类型的列表。</font><font style="vertical-align: inherit;">既不包括mixin调用，也不包括它们的结果（整个CSS规则）。</font><font style="vertical-align: inherit;">我还尝试将include作为字符串处理并内插，但这仅适用于最终结果CSS，不适用于其他指令。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
