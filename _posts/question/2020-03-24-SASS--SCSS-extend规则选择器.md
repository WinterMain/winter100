---
layout: question
title:  SASS / SCSS \`extend规则选择器
date:   2020-03-24T10:14:37.000Z
description: 我在\`extend规则上有一个小问题，这就是我得到的（专注于h1）：.content-header {    // CSS properties ...
img: 
author: 番长猴子
category: question
answer: 3
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在@extend规则上有一个小问题，这就是我得到的（专注于h1）：</font></font></p>

<pre><code>.content-header {<font></font>
    // CSS properties<font></font>
    h1 {<font></font>
        // CSS properties<font></font>
    }<font></font>
}<font></font>
<font></font>
.box-header {<font></font>
    // CSS properties<font></font>
    h1 {<font></font>
        @extend .content-header h1; // My selector problem!<font></font>
        // And his own CSS properties<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此它将是：</font></font></p>

<pre><code>.content-header h1, .box-header h1 {<font></font>
    /* Happily sharing the same CSS properties */<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是似乎</font></font><code>@extend</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不喜欢这种方法，还有别的方法可以编写这种方法</font></font><code>h1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3632篇《SASS / SCSS \`extend规则选择器》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿L</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个明显的解决方案是</font></font><code>@mixin your-name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为您的</font></font><code>.content-header h1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义和</font></font><code>@include your-name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内部</font><font style="vertical-align: inherit;">定义一个新名称</font></font><code>.box-header h1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，有一个更好的解决方案：</font></font><a href="http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#referencing_parent_selectors_" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用父选择器：＆</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>h1 {<font></font>
    .content-header &amp;,<font></font>
    .box-header &amp; {<font></font>
        // CSS properties<font></font>
    }<font></font>
    .box-header &amp; {<font></font>
        // And his own CSS properties<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这不是很明显，因为逻辑是相反的，但是最好保持。</font><font style="vertical-align: inherit;">您正在更改</font></font><code>h1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">特定选择器</font><font style="vertical-align: inherit;">的定义</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长斯丁逆天</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">嵌套选择器无法扩展-实际上，这就是解析器报告的语法错误。</font><font style="vertical-align: inherit;">除了结构性评论（我不认为</font></font><code>@extend</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有必要保证</font><font style="vertical-align: inherit;">上述</font><font style="vertical-align: inherit;">关系的情况），这不是SASS当前可以完成的事情。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：这是</font></font><a href="http://learnboost.github.com/stylus/docs/extend.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Stylus</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持的，但是</font><font style="vertical-align: inherit;">如果您愿意的话。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如前所述，您只能扩展一个类。</font><font style="vertical-align: inherit;">通常，应跳过带有扩展的嵌套。</font><font style="vertical-align: inherit;">有更多的关于延长其在选择</font></font><a href="https://kolosek.com/css-extend/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个文本</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
