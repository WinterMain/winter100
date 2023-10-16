---
layout: question
title:  可以使SASS \`extend样式！重要吗？
date:   2020-03-24T10:12:44.000Z
description: 有没有一种方法可以使使用\`extend功能应用的SASS样式具有！important状态？我尝试了这个：.somestyles {    width...
img: 
author: 村村
category: question
answer: 1
tags: ass CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有一种方法可以使使用@extend功能应用的SASS样式具有！important状态？</font><font style="vertical-align: inherit;">我尝试了这个：</font></font></p>

<pre><code>.somestyles {<font></font>
    width: 1000px;<font></font>
}<font></font>
.importantstyle {<font></font>
    @extend .somestyles !important;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没用，但是怎么办呢？</font><font style="vertical-align: inherit;">还是只是不可能？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3626篇《可以使SASS \`extend样式！重要吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva伽罗</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您要的是不可能的。</font><font style="vertical-align: inherit;">您可以增加进行扩展的选择器的特异性。</font></font></p>

<pre><code>body .importantstyle {<font></font>
    @extend .somestyles;<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
