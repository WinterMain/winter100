---
layout: question
title:  Sass的\`if语句中的\`import
date:   2020-03-23T03:50:48.000Z
description: 我只想加载登录页面所需的CSS以提高性能。在其他页面上，我需要一个分组的CSS文件，该文件将在包含我所有CSS的每个页面上缓存。我有以下文件：mi...
img: 
author: 宝儿
category: question
answer: 2
tags: if语句 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只想加载登录页面所需的CSS以提高性能。</font><font style="vertical-align: inherit;">在其他页面上，我需要一个分组的CSS文件，该文件将在包含我所有CSS的每个页面上缓存。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有以下文件：</font></font></p>

<pre><code>minifiedcssforloginpage.scss<font></font>
grouped-pages.scss<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在minifiedcssforloginpage.scss中，我声明$ load-complete-css：false。</font><font style="vertical-align: inherit;">之后，我导入myproject.scss，其中包含模块，布局，核心的所有导入...在myproject.scss中，我想做类似的事情</font></font></p>

<pre><code>@if $load-complete-css {<font></font>
     @import module1;<font></font>
     @import module2;<font></font>
     @import module3;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，minifiedcssforloginpage.scss会生成minifiedcssforloginpage.css，而css少于grouped-pages.css（将$ load-complete-css变量设置为true）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我收到一个错误，那就是这是不可能的：“在控制指令或mixins中可能无法使用导入指令”。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2762篇《Sass的\`if语句中的\`import》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY小卤蛋Near</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管核心开发团队正在考虑实施全新的依赖系统，但他们仍不愿实现此功能。 </font></font></p>

<hr>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅以下Github问题：</font></font></h3>

<ul>
<li><a href="https://github.com/nex3/sass/issues/451" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在@if中允许@import（＃451）</font></font></a></li>
<li><a href="https://github.com/sass/sass/issues/1194" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在控制指令或Mixins中使用@import语句（＃779）</font></font></a></li>
<li><a href="https://github.com/sass/sass/issues/779" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">允许可选的@imports（＃779）</font></font></a></li>
<li><a href="https://github.com/sass/sass/issues/739" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">动态依赖项（＃739）</font></font></a></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱前端</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是不允许的事情之一。</font><font style="vertical-align: inherit;">您唯一可以做的就是将这些导入转换为mixin（将文件导入外部，</font></font><code>@if</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并在适当的地方调用mixin）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">澄清：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">_partial.scss</font></font></p>

<pre><code>@mixin partial {<font></font>
    .test { color: red }<font></font>
    // other styles here<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">styles.scss</font></font></p>

<pre><code>@import "partial";<font></font>
@if $someval == true {<font></font>
    @include partial;<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
