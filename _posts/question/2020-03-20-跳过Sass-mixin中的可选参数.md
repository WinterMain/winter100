---
layout: question
title:  跳过Sass mixin中的可选参数
date:   2020-03-20T06:00:33.000Z
description: 我有这个mixin来处理简单的CSS3线性渐变：\`mixin linear-gradient($from, $to, $dir  bottom, $d...
img: 
author: 西门斯丁
category: question
answer: 1
tags: 无礼的 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有这个mixin来处理简单的CSS3线性渐变：</font></font></p>

<pre><code>@mixin linear-gradient($from, $to, $dir: bottom, $dir-webkit: top, $ie-filters: false) {<font></font>
    background-color: $to;<font></font>
    background-image: -webkit-linear-gradient($dir-webkit, $from, $to);<font></font>
    background-image: linear-gradient(to $dir, $from, $to);<font></font>
    @if $ie-filters == true and $old-ie {<font></font>
         filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#{ie-hex-str($from)}', endColorstr='#{ie-hex-str($to)}');<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><code>$dir</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 是“方向”的缩写。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我需要设为</font></font><code>$ie-filters</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ true”，而无需更改</font></font><code>$dir</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><code>$dir-webkit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认值，那么我仍然需要重新声明它们，这显然不是很干且不是最佳选择，所以我必须这样做：</font></font></p>

<p><code>@include linear-gradient(#7a7a7a, #1a1a1a, bottom, top, true);</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我只想这样做时：</font></font></p>

<p><code>@include linear-gradient(#7a7a7a, #1a1a1a, true);</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用mixin时如何以这种方式跳过参数？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PS：如果您想知道该</font></font><code>$dir-webkit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数是否适用于Webkit，因为它仍然无法处理新的渐变语法（请参阅：</font></font><a href="http://generatedcontent.org/post/37949105556/updateyourcss3"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="http://generatedcontent.org/post/37949105556/updateyourcss3"><font style="vertical-align: inherit;">//generatedcontent.org/post/37949105556/updateyourcss3-</font></a><font style="vertical-align: inherit;"> &gt; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新的渐变语法</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），该方向需要与标准语法相反。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝村村Stafan</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从SASS 3.1开始，您可以传递命名参数来做到这一点：</font></font></p>

<pre><code>@include linear-gradient($from: #7a7a7a, $to: #1a1a1a, $ie-filters: true);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其余的将是默认设置。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
