---
layout: question
title:  有可能在sass中过载mixins吗？
date:   2020-03-23T07:44:06.000Z
description: 假设您有一个混合阴影，例如：\`mixin box-shadow($offset, $blur, $color){   -moz-box-shado...
img: 
author: 阳光小哥Tom
category: question
answer: 3
tags: ass CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您有一个混合阴影，例如：</font></font></p>

<pre><code>@mixin box-shadow($offset, $blur, $color)<font></font>
{<font></font>
   -moz-box-shadow: $offset $offset $blur $color;<font></font>
   -webkit-box-shadow: $offset $offset $blur $color;<font></font>
   box-shadow: $offset $offset $blur $color;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否可以使用以下内容重载该mixin：</font></font></p>

<pre><code>@mixin box-shadow($offset, $blur)<font></font>
{<font></font>
    @include box-shadow($offset, $blur, #999);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还是我必须为mixins使用不同的名称？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2932篇《有可能在sass中过载mixins吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi理查德</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@ numbers1311407解决方案是正确的，但是您可以使用</font></font><a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#each-directive" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@each</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指令创建较短的mixin：</font></font></p>

<pre><code>@mixin box-shadow($offset, $blur, $color: #999) {<font></font>
  @each $prefix in -moz-, -webkit-, null {<font></font>
    #{$prefix}box-shadow: $offset $offset $blur $color;<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L小宇宙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不能过载，但是典型的做法是设置默认值。</font></font></p>

<pre class="lang-css prettyprint-override"><code> /* this would take color as an arg, or fall back to #999 on a 2 arg call */<font></font>
 @mixin box-shadow($offset, $blur, $color: #999) {<font></font>
   -webkit-box-shadow: $offset $offset $blur $color;<font></font>
   -moz-box-shadow: $offset $offset $blur $color;<font></font>
   box-shadow: $offset $offset $blur $color;<font></font>
 }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要稍微调整供应商混音，则可以将其复制到另一个文件（包括在原始文件之后），然后在其中进行编辑，而供应商的原始文件将被忽略。</font></font></p>

<pre><code>@import "_their-mixins";<font></font>
@import "_our-mixins";<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">警告</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -这可能取决于您使用的处理器。</font><font style="vertical-align: inherit;">在撰写本文时，使用</font></font><a href="http://gruntjs.com/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">grunt</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><a href="https://github.com/gruntjs/grunt-contrib-compass" rel="nofollow"><font style="vertical-align: inherit;">grunt-contrib-compass</font></a><font style="vertical-align: inherit;">效果很好</font></font><a href="https://github.com/gruntjs/grunt-contrib-compass" rel="nofollow"><font style="vertical-align: inherit;"></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
