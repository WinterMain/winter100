---
layout: question
title:  Webpack-extract-text-webpack-plugin找不到模块
date:   2020-03-24T01:57:05.000Z
description: webpack.config.jsvar ExtractTextPlugin = require("extract-text-webpack-plug...
img: 
author: JimGO
category: question
answer: 6
tags: JavaScript CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack.config.js</font></font></strong></p>

<pre><code>var ExtractTextPlugin = require("extract-text-webpack-plugin");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我只是实现插件，我会立即收到此错误：</font></font></p>

<pre><code>module.js:339<font></font>
    throw err;<font></font>
    ^<font></font>
<font></font>
Error: Cannot find module 'webpack/lib/ConcatSource'<font></font>
    at Function.Module._resolveFilename (module.js:337:15)<font></font>
    at Function.Module._load (module.js:287:25)<font></font>
    at Module.require (module.js:366:17)<font></font>
    at require (module.js:385:17)<font></font>
    at Object.&lt;anonymous&gt; (/Users/lucamormile/Documents/Lavori/Webapps/React/webpack_test/node_modules/extract-text-webpack-plugin/index.js:5:20)<font></font>
    at Module._compile (module.js:425:26)<font></font>
    at Object.Module._extensions..js (module.js:432:10)<font></font>
    at Module.load (module.js:356:32)<font></font>
    at Function.Module._load (module.js:311:12)<font></font>
    at Module.require (module.js:366:17)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我忘了什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3193篇《Webpack-extract-text-webpack-plugin找不到模块》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Eva</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跑步</font></font><code>npm i node-sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能会解决您的问题</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>$ npm i -D extract-text-webpack-plugin@next</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这将解决您的问题</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我知道这是否有效。</font></font></p>

<p><a href="https://github.com/webpack/webpack/issues/6568" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/webpack/webpack/issues/6568</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以尝试在</font><a href="https://www.npmjs.com/package/extract-text-webpack-plugin" rel="noreferrer"><font style="vertical-align: inherit;">https://www.npmjs.com/package/extract-text-webpack-plugin上</font></a><font style="vertical-align: inherit;">找到的此命令</font></font><a href="https://www.npmjs.com/package/extract-text-webpack-plugin" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<pre><code>npm i extract-text-webpack-plugin
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单修复</font></font></strong> </p>

<pre><code>npm install extract-text-webpack-plugin --save-dev
</code></pre>

<p><a href="https://www.npmjs.com/package/extract-text-webpack-plugin" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.npmjs.com/package/extract-text-webpack-plugin</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimAGil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用使用解决</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install extract-text-webpack-plugin --save-dev</font></font></h3></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的项目中</font><font style="vertical-align: inherit;">有</font><font style="vertical-align: inherit;">模块吗？</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
如果不是，请在本地安装（不是全局安装）：</font></font></p>

<pre><code>$ npm install webpack [--save-dev]
</code></pre>

<p><code>extract-text-webpack-plugin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要</font></font><code>webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为对等方依赖项，但是npm 3不会自动安装对等方依赖项。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
