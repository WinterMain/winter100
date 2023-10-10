---
layout: question
title:  如何指定webpack-dev-server webpack.config.js文件位置
date:   2020-03-24T11:17:55.000Z
description: 我从webpack开始。我已经能够像这样指定webpack的位置webpack.config.js："webpack --config ./App...
img: 
author: 小卤蛋理查德Tony
category: question
answer: 2
tags: webpack Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我从webpack开始。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经能够像这样指定webpack的位置webpack.config.js：</font></font></p>

<pre><code>"webpack --config ./App/webpack.config.js"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我也尝试将webpack-dev-server与该文件一起使用，但找不到如何为其指定webpack.config.js位置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的package.json的相关部分</font></font></p>

<pre><code>"scripts": {<font></font>
  "start": "webpack-dev-server --config ./App/webpack.config.js --progress --colors",<font></font>
  "build": "webpack --config ./App/webpack.config.js --progress --colors"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何将./App/目录传递到webpack-dev-server？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3727篇《如何指定webpack-dev-server webpack.config.js文件位置》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱Sam</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于像我这样的新手：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在package.json中提及配置路径，如下所示：</font></font></p>

<pre><code>{<font></font>
  "name": "abc",<font></font>
<font></font>
  "version": "0.0.1",<font></font>
<font></font>
  "description": "description",<font></font>
<font></font>
  "main": "index.js",<font></font>
<font></font>
  "scripts": {<font></font>
    "dev": "webpack-dev-server --config ./client/webpack.config.js",<font></font>
    "build": "webpack --config ./client/webpack.config.js"<font></font>
   }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">刚遇到这个问题。</font><font style="vertical-align: inherit;">正如spacek33z所说，</font></font><code>--config</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是正确的。</font><font style="vertical-align: inherit;">我在webpack文档或webpack-dev-server文档中找不到此文件，因此我遇到了这个问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如 </font></font></p>

<p><code>webpack-dev-server --config demo/webpack.config.js</code></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
