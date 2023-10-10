---
layout: question
title:  SASS是否支持在混入中的所有属性中添加！important？
date:   2020-03-24T01:56:11.000Z
description: 我目前正在使用罗盘框架及其所有有用的CSS3 mixins。我想使用border-radius(5px)mixin并将所有来自它的属性标记为\!import...
img: 
author: 猪猪A
category: question
answer: 3
tags: 上海社会科学院 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我目前正在使用</font></font><a href="http://compass-style.org" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">罗盘框架</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">及其所有有用的CSS3 mixins。</font><font style="vertical-align: inherit;">我想使用</font></font><code>border-radius(5px)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">mixin并将所有来自它的属性标记为</font></font><code>!important</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="http://lesscss.org" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">LESS中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可以</font></font><code>!important</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过在调用后简单地指定它</font><font style="vertical-align: inherit;">来将其应用于</font><font style="vertical-align: inherit;">mixin中的所有属性</font></font></p>

<pre><code>.myMixin(@x) {<font></font>
    border-radius: @x;<font></font>
    -moz-border-radius: @x;<font></font>
}<font></font>
<font></font>
.myClass {<font></font>
  .myMixin(5px) !important;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编译为</font></font></p>

<pre><code>.myClass {<font></font>
    border-radius: 5px !important;<font></font>
    -moz-border-radius: 5px !important;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这在</font></font><a href="http://sass-lang.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SASS中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是可能的</font><font style="vertical-align: inherit;">，还是我必须用一个重要的参数重写mixins？</font></font></p>

<pre><code>@mixin my-border-radius($value, $important: false) {<font></font>
    border-radius: @value if($important, !important, null);<font></font>
    ....<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3190篇《SASS是否支持在混入中的所有属性中添加！important？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">混合：</font></font></p>

<pre><code>@mixin verlauf($color1, $color2) {<font></font>
  background: $color1;<font></font>
  background: -moz-linear-gradient(top, $color1 0%, $color2 100%);<font></font>
  background: -webkit-linear-gradient(top, $color1 0%,$color2 100%);<font></font>
  background: linear-gradient(to bottom, $color1 0%,$color2 100%);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SCSS：</font></font></p>

<pre><code> @include verlauf(#607a8b !important, #4b6272 !important);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果：</font></font></p>

<pre><code>background: #607a8b !important;<font></font>
background: -moz-linear-gradient(top, #607a8b !important 0%, #4b6272 !important 100%);<font></font>
background: -webkit-linear-gradient(top, #607a8b !important 0%, #4b6272 !important 100%);<font></font>
background: linear-gradient(to bottom, #607a8b !important 0%, #4b6272 !important 100%); }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它也可以与两个（和更多）变量mixin一起使用！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Cander的答案适用于简单变量，其后没有任何其他属性。</font><font style="vertical-align: inherit;">对于更复杂的CSS，您可以这样操作，例如transition属性：</font></font></p>

<pre><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    @mixin transition（$ duration，$ content：null）{</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        -webkit-transition：所有$ duration线性$ content;</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        -moz-transition：所有$ duration线性$ content;</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        -o-transition：所有$ duration线性$ content;</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        过渡：所有$ duration线性$ content;</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    }</font></font><font></font>
<font></font>
</pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我添加了</font></font><code>$content</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量并将其设置为</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">现在，您可以使用以下命令来简单地调用mixin：</font></font></p>

<p><code>@include transition(0.3s);</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要添加</font></font><code>!important</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请使用</font></font></p>

<p><code>@include transition(0.3s, !important);</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案几乎太明显了……</font></font></p>

<p><code>!important</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 可以简单地指定为属性值的一部分</font></font></p>

<pre><code>border-radius(5px !important);
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
