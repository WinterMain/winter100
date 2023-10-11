---
layout: question
title:  我该如何在webpack中使用moment-timezone？
date:   2020-03-24T01:58:27.000Z
description: 在使用webpack构建项目时，我通常需要npm模块中的CommonJS中的模块。我在我的项目中需要moment-timezone，但是在构建包时，您还必...
img: 
author: 凯西里
category: question
answer: 1
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在使用webpack构建项目时，我通常需要npm模块中的CommonJS中的模块。</font><font style="vertical-align: inherit;">我在我的项目中需要moment-timezone，但是在构建包时，您还必须从moment-timezone构建所有数据，这可能会很多。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，生成失败并出现以下错误：</font></font></p>

<pre><code>ERROR in ./~/moment-timezone/data/packed/latest.json<font></font>
Module parse failed: /site/node_modules/moment-timezone/data/packed/latest.json Line 2: Unexpected token :<font></font>
You may need an appropriate loader to handle this file type.<font></font>
| {<font></font>
|   "version": "2015a",<font></font>
|   "zones": [<font></font>
|       "Africa/Abidjan|LMT GMT|g.8 0|01|-2ldXH.Q",<font></font>
@ ./~/moment-timezone/index.js 4:15-51<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这一点上，我对构建失败的担心程度不高，如果构建成功，我将关注构建的大小。</font><font style="vertical-align: inherit;">虽然，显然失败的构建也需要在某个时候解决。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将不胜感激如何处理此问题的任何指针，尤其是如果你们中的任何一个在使用webpack时也遇到了同样的问题（或者也可能是browserify）。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3197篇《我该如何在webpack中使用moment-timezone？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是webpack 2.x（当前为Beta）</font></font></strong>  </p>

<pre><code>npm install json-loader
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在你的 </font></font><code>rules</code></p>

<pre><code>{<font></font>
    test: /\.json$/,<font></font>
    loader: "json-loader"<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
