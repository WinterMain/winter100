---
layout: question
title:  webpack-dev-server找不到模块“ webpack”
date:   2020-03-24T09:23:30.000Z
description: 我正在尝试使用webpack-dev-server运行一个简单的程序，但出现此错误：module.js 471    throw err;    ...
img: 
author: LGil
category: question
answer: 2
tags: node.js Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用webpack-dev-server运行一个简单的程序，但出现此错误：</font></font></p>

<pre><code>module.js:471<font></font>
    throw err;<font></font>
    ^<font></font>
<font></font>
Error: Cannot find module 'webpack'<font></font>
    at Function.Module._resolveFilename (module.js:469:15)<font></font>
    at Function.Module._load (module.js:417:25)<font></font>
    at Module.require (module.js:497:17)<font></font>
    at require (internal/module.js:20:19)<font></font>
    at Object.&lt;anonymous&gt; <font></font>
    at Module._compile (module.js:570:32)<font></font>
    at Object.Module._extensions..js (module.js:579:10)<font></font>
    at Module.load (module.js:487:32)<font></font>
    at tryModuleLoad (module.js:446:12)<font></font>
    at Function.Module._load (module.js:438:3)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经使用以下npm命令安装了webpack</font></font></p>

<pre><code>npm install --save-dev webpack
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且我有以下配置：</font></font></p>

<pre><code>(webpack.config.js)<font></font>
var webpack = require('webpack');<font></font>
var path = require('path');<font></font>
<font></font>
var BUILD_DIR = path.resolve(__dirname, 'client/public');<font></font>
var APP_DIR = path.resolve(__dirname, 'client/app');<font></font>
<font></font>
var config = {<font></font>
  entery: APP_DIR + '/index.js',<font></font>
  output: {<font></font>
    path: BUILD_DIR,<font></font>
    filename: 'bundle,js',<font></font>
  },<font></font>
  module: {<font></font>
    loaders: [<font></font>
      {<font></font>
        test: /.jsx?$/,<font></font>
        loader: 'babel-loader',<font></font>
        exclude: /node_modules/,<font></font>
        query: {<font></font>
          presets: ['es2015', 'react']<font></font>
        }<font></font>
      }<font></font>
    ]<font></font>
  }<font></font>
};<font></font>
<font></font>
module.exports = config;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经尝试了一切，但我真的迷路了。</font><font style="vertical-align: inherit;">有人有什么主意吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3552篇《webpack-dev-server找不到模块“ webpack”》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><code>npm install --save-dev webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 是不足够的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还必须安装以下内容： </font></font></p>

<pre><code>npm install --save-dev webpack-dev-server 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，您还可以安装： </font></font></p>

<pre><code>npm install --save-dev webpack-dev-middleware webpack-hot-middleware
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的问题，但是我通过安装其他解决了 </font></font><code>webpack-cli</code></p>

<pre><code>npm install --save-dev webpack-cli
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
