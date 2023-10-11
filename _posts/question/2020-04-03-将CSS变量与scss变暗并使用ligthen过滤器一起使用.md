---
layout: question
title:  将CSS变量与scss变暗并使用ligthen过滤器一起使用
date:   2020-04-03T02:45:08.000Z
description: 我想在CSS4中使用scss lighten()和darken()function var。像这样 ： box-shadow  inset 0px...
img: 
author: 樱西门
category: question
answer: 1
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想</font><font style="vertical-align: inherit;">在CSS4中</font><font style="vertical-align: inherit;">使用scss </font></font><code>lighten()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>darken()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">function </font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样 ： </font></font></p>

<pre><code>box-shadow: inset 0px -2px 50px 45px darken(var(--colorbtn),20%);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎无法正常工作，gulp写道：</font></font></p>

<pre><code>Error: $color: "var(--colorbtn)" is not a color for `darken'
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它不可能做到吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3908篇《将CSS变量与scss变暗并使用ligthen过滤器一起使用》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于SASS是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">预处理器</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此CSS定制属性可以在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行时</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">动态更改，</font><font style="vertical-align: inherit;">因此这实际上是行不通的</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">为了使SASS能够通过变暗对其进行预处理，就必须用一个静态值替换该自定义属性，在这种情况下，该自定义属性的用处就丧失了。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
