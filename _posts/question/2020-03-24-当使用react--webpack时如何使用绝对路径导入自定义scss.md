---
layout: question
title:  当使用react + webpack时如何使用绝对路径导入自定义scss？
date:   2020-03-24T06:10:31.000Z
description: 在一个scss文件中，我试图导入自定义的，广泛使用的scss块（在React / SASS / Webpack堆栈中）。这样我就可以使用共享的mixi...
img: 
author: Stafan
category: question
answer: 1
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在一个scss文件中，我试图导入自定义的，广泛使用的scss块（在React / SASS / Webpack堆栈中）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样我就可以使用共享的mixin。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设我正在创建MyAdminButton，并且想要导入与项目的所有按钮有关的scss文件。</font><font style="vertical-align: inherit;">（这是自定义的scss，而不是供应商/外部的）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它看起来像这样： </font></font></p>

<pre><code>//this actually works but it is a code smell : what if the current file moves ?<font></font>
@import "../../stylesheets/_common-btn-styles.scss";<font></font>
<font></font>
.my-admin-btn {<font></font>
    // here I can use a shared mixin defined in _common-btn-styles.scss<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这听起来不好，因为如果我的scss文件移动了，那么所有内容都将损坏。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢你的帮助</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3347篇《当使用react + webpack时如何使用绝对路径导入自定义scss？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到了。</font><font style="vertical-align: inherit;">实际上，您可以在webpack.config.json中配置sass-loader，如此处所述：</font><a href="https://github.com/jtangelder/sass-loader"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/jtangelder/sass-loader"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/jtangelder/sass-loader</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是相关的部分：</font></font></p>

<pre><code>sassLoader: {<font></font>
   includePaths: [path.resolve(__dirname, "./some-folder")]<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
