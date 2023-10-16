---
layout: question
title:  CSS calc（）函数中的Sass变量
date:   2020-03-13T12:27:12.000Z
description: 我正在尝试calc()在Sass样式表中使用该函数，但遇到了一些问题。这是我的代码：$body_padding  50pxbody    pad...
img: 
author: 西里神无Pro
category: question
answer: 6
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试</font></font><code>calc()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Sass样式表中</font><font style="vertical-align: inherit;">使用该</font><font style="vertical-align: inherit;">函数，但遇到了一些问题。</font><font style="vertical-align: inherit;">这是我的代码：</font></font></p>

<pre><code>$body_padding: 50px<font></font>
<font></font>
body<font></font>
    padding-top: $body_padding<font></font>
    height: calc(100% - $body_padding)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我使用文字</font></font><code>50px</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>body_padding</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量，那么我得到的正是我想要的。</font><font style="vertical-align: inherit;">但是，当我切换到变量时，这是输出：</font></font></p>

<pre><code>body {<font></font>
    padding-top: 50px;<font></font>
    height: calc(100% - $body_padding); }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何让Sass认识到它需要替换</font></font><code>calc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数中</font><font style="vertical-align: inherit;">的变量</font><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1553篇《CSS calc（）函数中的Sass变量》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱阿飞</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个使用SASS / SCSS和数学公式样式的非常简单的解决方案：</font></font></p>

<pre><code>/* frame circle */<font></font>
.container {<font></font>
    position: relative;<font></font>
    border-radius: 50%;<font></font>
    background-color: white;<font></font>
    overflow: hidden;<font></font>
    width: 400px;<font></font>
    height: 400px; }<font></font>
<font></font>
/* circle sectors */<font></font>
.menu-frame-sector {<font></font>
    position: absolute;<font></font>
    width: 50%;<font></font>
    height: 50%;<font></font>
    z-index: 10000;<font></font>
    transform-origin: 100% 100%;<font></font>
  }<font></font>
<font></font>
$sector_count: 8;<font></font>
$sector_width: 360deg / $sector_count;<font></font>
<font></font>
.sec0 {<font></font>
    transform: rotate(0 * $sector_width) skew($sector_width);<font></font>
    background-color: red; }<font></font>
.sec1 {<font></font>
    transform: rotate(1 * $sector_width) skew($sector_width);<font></font>
    background-color: blue; }<font></font>
.sec2 {<font></font>
    transform: rotate(2 * $sector_width) skew($sector_width);<font></font>
    background-color: red; }<font></font>
.sec3 {<font></font>
    transform: rotate(3 * $sector_width) skew($sector_width);<font></font>
    background-color: blue; }<font></font>
.sec4 {<font></font>
    transform: rotate(4 * $sector_width) skew($sector_width);<font></font>
    background-color: red; }<font></font>
.sec5 {<font></font>
    transform: rotate(5 * $sector_width) skew($sector_width);<font></font>
    background-color: blue; }<font></font>
.sec6 {<font></font>
    transform: rotate(6 * $sector_width) skew($sector_width);<font></font>
    background-color: red; }<font></font>
.sec7 {<font></font>
    transform: rotate(7 * $sector_width) skew($sector_width);<font></font>
    background-color: blue; }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，我强烈建议你理解</font></font><code>transform-origin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>rotate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>skew()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><a href="https://tympanus.net/codrops/2013/08/09/building-a-circular-navigation-with-css-transforms/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://tympanus.net/codrops/2013/08/09/building-a-circular-navigation-with-css-transforms/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门十三LEY</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个：</font></font></p>

<pre><code>@mixin heightBox($body_padding){<font></font>
   height: calc(100% - $body_padding);<font></font>
}<font></font>
<font></font>
body{<font></font>
   @include heightBox(100% - 25%);<font></font>
   box-sizing: border-box<font></font>
   padding:10px;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Tony古一</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以用你的口头表达 </font></font><code>#{your verbal}</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilTom神乐</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使它没有直接关系。</font><font style="vertical-align: inherit;">但是我发现如果您没有正确放置空格，CALC代码将无法正常工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以这对我不起作用 </font></font><code>calc(#{$a}+7px)</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这有效 </font></font><code>calc(#{$a} + 7px)</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">花了我一些时间来解决这个问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy神奇</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><a href="https://sass-lang.com/documentation/interpolation" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插值</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>body<font></font>
    height: calc(100% - #{$body_padding})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing#Values" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">边界框</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也足够了：</font></font></p>

<pre><code>body<font></font>
    box-sizing: border-box<font></font>
    height: 100%<font></font>
    padding-top: $body_padding<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro路易</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要</font></font><code>$variables</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您</font></font><code>calc()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的height属性</font><font style="vertical-align: inherit;">内</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML：</font></font></p>

<pre><code>&lt;div&gt;&lt;/div&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SCSS：</font></font></p>

<pre><code>$a: 4em;<font></font>
<font></font>
div {<font></font>
  height: calc(#{$a} + 7px);<font></font>
  background: #e53b2c;<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
