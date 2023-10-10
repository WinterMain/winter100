---
layout: question
title:  在application.css.scss中的Require语句
date:   2020-03-23T02:39:00.000Z
description: 我想使用灯箱上的宝石，例如fancybox或color box。两个宝石都要求在application.css中添加此行 \*= require col...
img: 
author: GO
category: question
answer: 0
tags: 的Ruby-on-轨 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想使用灯箱上的宝石，例如fancybox或color box。</font><font style="vertical-align: inherit;">两个宝石都要求在application.css中添加此行</font></font></p>

<pre><code> *= require colorbox-rails
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是问题所在。</font><font style="vertical-align: inherit;">我只有application.css.scss文件。</font><font style="vertical-align: inherit;">我所有的css文件都是scss文件。</font><font style="vertical-align: inherit;">我在application.css.scss中有导入语句，但是没有* = require语句。</font><font style="vertical-align: inherit;">添加以上行会导致错误：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ *”后的CSS无效：预期的“ {”，是“ = require colorb ...”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是完整的application.css.scss</font></font></p>

<pre><code>@import "bootstrap";<font></font>
@import "welcome";<font></font>
@import "sessions";<font></font>
@import "users";<font></font>
<font></font>
<font></font>
*= require colorbox-rails<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2662篇《在application.css.scss中的Require语句》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
