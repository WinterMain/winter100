---
layout: question
title:  为什么Webpack的DefinePlugin要求我们将所有内容包装在JSON.stringify中？
date:   2020-04-07T03:45:53.000Z
description: new webpack.DefinePlugin({    PRODUCTION  JSON.stringify(true),    VERSION ...
img: 
author: 达蒙
category: question
answer: 0
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><pre><code>new webpack.DefinePlugin({<font></font>
    PRODUCTION: JSON.stringify(true),<font></font>
    VERSION: JSON.stringify("5fa3b9"),<font></font>
    BROWSER_SUPPORTS_HTML5: true,<font></font>
    TWO: "1+1",<font></font>
    "typeof window": JSON.stringify("object")<font></font>
})<font></font>
</code></pre>

<p><a href="https://github.com/webpack/docs/wiki/list-of-plugins#defineplugin" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/webpack/docs/wiki/list-of-plugins#defineplugin</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这似乎非常不寻常，不必要和“容易出错”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是类型检查问题吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4109篇《为什么Webpack的DefinePlugin要求我们将所有内容包装在JSON.stringify中？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
