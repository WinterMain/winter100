---
layout: question
title:  Nuxt.js：包含字体文件：使用/ static或/ assets
date:   2020-03-20T06:22:11.000Z
description: 我知道nuxt.js github存储库中的一些文章对此做了一些介绍，但是我想知道在nuxt.js中使用字体文件的正确方法是什么。到目前为止，我们已经...
img: 
author: 宝儿
category: question
answer: 1
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道nuxt.js github存储库中的一些文章对此做了一些介绍，但是我想知道在nuxt.js中使用字体文件的正确方法是什么。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，我们已经将它们保存在</font></font><code>/static/fonts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录中，但是其他人</font></font><code>assets</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用来存储字体文件。</font><font style="vertical-align: inherit;">有什么区别？</font><font style="vertical-align: inherit;">一种选择更好吗？如果是，为什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也有不同的方法来包含它们。</font><font style="vertical-align: inherit;">这样的路径是否正确：</font></font></p>

<pre><code>@font-face {<font></font>
  font-family: 'FontName';<font></font>
  font-weight: normal;<font></font>
  src: url('~static/fonts/font.file.eot'); /* IE9 Compat Mode */<font></font>
  src: url('~static/fonts/font.file.woff') format('woff'),<font></font>
       url('~static/fonts/font.file.otf') format('otf'),<font></font>
       url('~static/fonts/font.file.eot') format('eot');<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢您在这里的一些澄清：D。</font><font style="vertical-align: inherit;">干杯</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ĵ</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2543篇《Nuxt.js：包含字体文件：使用/ static或/ assets》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">官方文档对此进行了很好的解释：</font><a href="https://nuxtjs.org/guide/assets/" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://nuxtjs.org/guide/assets/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//nuxtjs.org/guide/assets/</font></font></a></p>

<p><code>assets\</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 为要处理的资产保留（例如，带有webpack的concat css）</font></font></p>

<p><code>static\</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无需任何处理即可</font><font style="vertical-align: inherit;">从根URL（static \ img \ test.jpg =&gt; </font></font><a href="http://example.fr/img/test.jpg" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://example.fr/img/test.jpg</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">公开所有静态文件。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
