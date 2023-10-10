---
layout: question
title:  \`function v / s \`mixin在Sass-lang中。使用哪一个？
date:   2020-03-24T07:24:01.000Z
description: 在搜索\`function和\`mixin之间的差异后，我最终到了这里。 与\`funcion相比，使用\`mixin有什么优势吗？反之亦然。在什么情况下它们...
img: 
author: Gil
category: question
answer: 1
tags: ass CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在搜索@function和@mixin之间的差异后，我最终到了这里。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与@funcion相比，使用@mixin有什么优势吗？反之亦然。</font><font style="vertical-align: inherit;">在什么情况下它们会有所不同，如何互换使用它们，请提供示例。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3438篇《@function v / s @mixin在Sass-lang中。使用哪一个？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数特别有用，因为它们</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值。</font><font style="vertical-align: inherit;">Mixins不同于函数，它们通常仅提供有价值的代码块。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，在某些情况下您可能必须同时使用两者。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，如果我想</font></font><a href="http://codepen.io/danieltott/pen/AjKay" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用SASS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个</font><a href="http://codepen.io/danieltott/pen/AjKay" rel="noreferrer"><font style="vertical-align: inherit;">长阴影</font></a><font style="vertical-align: inherit;">，我将调用如下函数：</font></font></p>

<pre><code>@function makelongshadow($color) {<font></font>
  $val: 0px 0px $color;<font></font>
  @for $i from 1 through 200 {<font></font>
    $val: #{$val}, #{$i}px #{$i}px #{$color};<font></font>
  }<font></font>
  @return $val;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后将使用此mixin进行调用：</font></font></p>

<pre><code>@mixin longshadow($color) {<font></font>
  text-shadow: makelongshadow($color);<font></font>
}<font></font>
</code></pre>

<p>Which provides us with the actual code.</p>

<p>That gets included in the element:</p>

<pre><code>h1 {<font></font>
    @include longshadow(darken($color, 5% ));<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
