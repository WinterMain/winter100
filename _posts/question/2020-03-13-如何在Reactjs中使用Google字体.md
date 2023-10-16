---
layout: question
title:  如何在React.js中使用Google字体？
date:   2020-03-13T12:13:44.000Z
description: 我已经用React.js和webpack建立了一个网站。我想在网页中使用Google字体，因此将链接放在该部分中。Google字体<link ...
img: 
author: LEY古一阿飞
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React.js</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建立了一个网站</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想</font><font style="vertical-align: inherit;">在网页中</font><font style="vertical-align: inherit;">使用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google字体</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此将链接放在该部分中。</font></font></p>

<h2><a href="https://fonts.google.com/specimen/Bungee+Inline?selection.family=Bungee%20Inline" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google字体</font></font></a></h2>

<pre><code>&lt;link href="https://fonts.googleapis.com/css?family=Bungee+Inline" rel="stylesheet"&gt;
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并设置CSS</font></font></h3>

<pre><code>body{<font></font>
    font-family: 'Bungee Inline', cursive;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，它不起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我怎么解决这个问题？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1529篇《如何在React.js中使用Google字体？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">YOC45692046</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在css文件中添加了@import和@ font-face，它可以正常工作。</font></font><a href="https://i.stack.imgur.com/o0Gvg.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/o0Gvg.png" alt="在此处输入图片说明"></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
