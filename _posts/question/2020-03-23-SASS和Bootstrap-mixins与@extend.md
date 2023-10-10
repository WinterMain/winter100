---
layout: question
title:  SASS和Bootstrap-mixins与\`extend
date:   2020-03-23T03:47:46.000Z
description: 我正在使用Bootstrap的SASS端口，并且想知道使用预定义的mixins和使用SASS的之间是否有区别\`extend。例如，如果我有：<di...
img: 
author: Gil伽罗小宇宙
category: question
answer: 0
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用</font></font><a href="https://github.com/twbs/bootstrap-sass" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><a href="https://github.com/twbs/bootstrap-sass" rel="noreferrer"><font style="vertical-align: inherit;">SASS端口</font></a><font style="vertical-align: inherit;">，并且想知道使用预定义的mixins和使用SASS的之间是否有区别</font></font><code>@extend</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，如果我有：</font></font></p>

<pre><code>&lt;div class="wrapper"&gt;<font></font>
    Some content here....<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者之间有什么区别吗</font></font></p>

<pre><code>.wrapper {<font></font>
    @include make-row();<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font></p>

<pre><code>.wrapper {<font></font>
    @extend .row;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果没有区别，是否还有其他mixin不等同于单个</font></font><code>@extend</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句？</font><font style="vertical-align: inherit;">如果没有这样的混合，为什么混合甚至存在？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
