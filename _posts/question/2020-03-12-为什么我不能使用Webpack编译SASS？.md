---
layout: question
title:  为什么我不能使用Webpack编译SASS？
date:   2020-03-12T07:58:41.000Z
description: 我的Webpack配置中包含以下模块：module  {    preLoaders  \[      {        test  /\.vue...
img: 
author: 逆天蛋蛋
category: question
answer: 0
tags: webpack Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的Webpack配置中包含以下模块：</font></font></p>

<pre><code>module: {<font></font>
    preLoaders: [<font></font>
      {<font></font>
        test: /\.vue$/,<font></font>
        loader: 'eslint',<font></font>
        include: projectRoot,<font></font>
        exclude: /node_modules/<font></font>
      },<font></font>
      {<font></font>
        test: /\.js$/,<font></font>
        loader: 'eslint',<font></font>
        include: projectRoot,<font></font>
        exclude: /node_modules/<font></font>
      }<font></font>
    ],<font></font>
    loaders: [<font></font>
      {<font></font>
        test: /\.vue$/,<font></font>
        loader: 'vue'<font></font>
      },<font></font>
      {<font></font>
        test: /\.js$/,<font></font>
        loader: 'babel',<font></font>
        include: projectRoot,<font></font>
        exclude: /node_modules/<font></font>
      },<font></font>
      {<font></font>
        test: /\.json$/,<font></font>
        loader: 'json'<font></font>
      },<font></font>
      {<font></font>
        test: /\.html$/,<font></font>
        loader: 'vue-html'<font></font>
      },<font></font>
      {<font></font>
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,<font></font>
        loader: 'url',<font></font>
        query: {<font></font>
          limit: 10000,<font></font>
          name: utils.assetsPath('img/[name].[hash:7].[ext]')<font></font>
        }<font></font>
      },<font></font>
      {<font></font>
        test: /\.scss$/,<font></font>
        loaders: ['style', 'css', 'sass']<font></font>
      },<font></font>
      {<font></font>
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,<font></font>
        loader: 'url',<font></font>
        query: {<font></font>
          limit: 10000,<font></font>
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')<font></font>
        }<font></font>
      }<font></font>
    ]<font></font>
  },<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您会看到我正在使用sass-loader，对于* .scss文件，我正在定义以下管道：</font></font><code>['style', 'css', 'sass']</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后我有我的scss文件：</font></font></p>

<pre><code>html {<font></font>
  height: 100%;<font></font>
}<font></font>
<font></font>
body {<font></font>
  display: flex;<font></font>
  align-items: center;<font></font>
  justify-content: center;<font></font>
  height: 100%;<font></font>
}<font></font>
<font></font>
(...)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，我有HTML页面（位于vue.js的VUE文件中），该页面导入了该scss文件：</font></font></p>

<pre><code>&lt;script&gt;<font></font>
<font></font>
require('./styles/main.scss')<font></font>
<font></font>
(...)<font></font>
<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是以某种方式在启动项目时出现此错误：</font></font></strong></p>

<pre><code>ERROR in ./~/css-loader!./~/sass-loader!./~/style-loader!./~/css-loader!./~/sass-loader!./src/styles/main.scss<font></font>
Module build failed:<font></font>
html {<font></font>
^<font></font>
      Invalid CSS after "...load the styles": expected 1 selector or at-rule, was "var content = requi"<font></font>
      in /Users/td/uprank/src/styles/main.scss (line 1, column 1)<font></font>
 @ ./src/styles/main.scss 4:14-247 13:2-17:4 14:20-253<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么会弄错管道？</font><font style="vertical-align: inherit;">（似乎webpack正在尝试处理</font></font><code>['css', 'sass', 'style', 'css', 'sass']</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>['style', 'css', 'sass']</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按照模块中的配置进行处理。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我究竟做错了什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢！</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接到完整的示例项目：</font><a href="https://dl.dropboxusercontent.com/u/1066659/dummy.zip"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://dl.dropboxusercontent.com/u/1066659/dummy.zip"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//dl.dropboxusercontent.com/u/1066659/dummy.zip</font></font></a></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1105篇《为什么我不能使用Webpack编译SASS？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
