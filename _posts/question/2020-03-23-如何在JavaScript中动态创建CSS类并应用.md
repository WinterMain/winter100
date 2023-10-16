---
layout: question
title:  如何在JavaScript中动态创建CSS类并应用？
date:   2020-03-23T13:21:47.000Z
description: 我需要在JavaScript中动态创建CSS样式表类，并将其分配给一些HTML元素（例如div，table，span，tr等）以及一些控件（例如asp：T...
img: 
author: 斯丁
category: question
answer: 1
tags: JavaScript CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要在JavaScript中动态创建CSS样式表类，并将其分配给一些HTML元素（例如div，table，span，tr等）以及一些控件（例如asp：Textbox，Dropdownlist和datalist）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个样本很好。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3062篇《如何在JavaScript中动态创建CSS类并应用？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个简单的jQuery插件，可以生成CSS声明：</font></font><a href="https://github.com/kajic/jquery-injectCSS" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery-injectCSS</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，它使用</font></font><a href="http://jss-lang.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（JSON描述的CSS），但是为了生成动态CSS样式表，它很容易处理。</font></font></p>

<pre><code>$.injectCSS({<font></font>
    "#test": {<font></font>
        height: 123<font></font>
    }<font></font>
});<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
