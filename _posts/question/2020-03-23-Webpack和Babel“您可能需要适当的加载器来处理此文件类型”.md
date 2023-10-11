---
layout: question
title:  Webpack和Babel“您可能需要适当的加载器来处理此文件类型”
date:   2020-03-23T02:46:06.000Z
description: 我正在尝试将Webpack与Babel一起使用来编译ES6资产，但是却收到以下错误消息：You may need an appropriate loa...
img: 
author: Tony凯
category: question
answer: 0
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试将Webpack与Babel一起使用来编译ES6资产，但是却收到以下错误消息：</font></font></p>

<pre><code>You may need an appropriate loader to handle this file type.<font></font>
| import React from 'react';<font></font>
| /*<font></font>
| import { render } from 'react-dom'<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的Webpack配置的样子：</font></font></p>

<pre><code>var path = require('path');<font></font>
var webpack = require('webpack');<font></font>
<font></font>
module.exports = {<font></font>
  entry: './index',<font></font>
  output: {<font></font>
    path: path.join(__dirname, 'dist'),<font></font>
    filename: 'bundle.js',<font></font>
    publicPath: '/dist/'<font></font>
  },<font></font>
  module: {<font></font>
    loaders: [<font></font>
      {<font></font>
        test: /\.jsx?$/,<font></font>
        loader: 'babel-loader',<font></font>
        exclude: /node_modules/<font></font>
      }<font></font>
    ]<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是利用Webpack的中间件步骤：</font></font></p>

<pre><code>var webpack = require('webpack');<font></font>
var webpackDevMiddleware = require('webpack-dev-middleware');<font></font>
var config = require('./webpack.config');<font></font>
<font></font>
var express = require('express');<font></font>
var app = express();<font></font>
var port = 3000;<font></font>
<font></font>
var compiler = webpack(config);<font></font>
app.use(webpackDevMiddleware(compiler, {<font></font>
  noInfo: true,<font></font>
  publicPath: config.output.publicPath<font></font>
}));<font></font>
<font></font>
app.get('/', function(req, res) {<font></font>
  res.sendFile(__dirname + '/index.html');<font></font>
});<font></font>
<font></font>
app.listen(port, function(err) {<font></font>
  console.log('Server started on http://localhost:%s', port);<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我所有的index.js文件正在做的事情是导入react，但是似乎“ babel-loader”无法正常工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用'babel-loader'6.0.0。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2679篇《Webpack和Babel“您可能需要适当的加载器来处理此文件类型”》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
