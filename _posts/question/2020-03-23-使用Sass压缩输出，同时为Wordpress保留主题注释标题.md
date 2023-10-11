---
layout: question
title:  使用Sass压缩输出，同时为Wordpress保留主题注释标题
date:   2020-03-23T13:54:22.000Z
description: 其他Wordpress主题开发人员如何利用Sass的压缩输出样式将Sass纳入其主题开发​​中？Sass压缩会删除所有注释，因此我目前使用的主题声明为空s...
img: 
author: MandyL小胖
category: question
answer: 1
tags: WordPress的 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他Wordpress主题开发人员如何利用Sass的压缩输出样式将Sass纳入其主题开发​​中？</font><font style="vertical-align: inherit;">Sass压缩会删除所有注释，因此我目前使用的主题声明为空style.css，并使用@import从罗盘中调用缩小的CSS，但这似乎不是最佳解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有人找到解决方法？</font><font style="vertical-align: inherit;">如果没有，什么是最佳解决方案？</font></font></p>

<p><a href="http://codex.wordpress.org/Theme_Development#Theme_Stylesheet" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://codex.wordpress.org/Theme_Development#Theme_Stylesheet</font></font></a></p>

<p><a href="http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#id40" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#id40</font></font></a></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3106篇《使用Sass压缩输出，同时为Wordpress保留主题注释标题》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，我建议您使用</font></font><a href="http://compass-style.org/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Compass</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该注释应如下所示：</font></font></p>

<pre><code>/*! A loud SASS comment */
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
