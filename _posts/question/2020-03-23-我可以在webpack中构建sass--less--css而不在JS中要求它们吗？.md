---
layout: question
title:  我可以在webpack中构建sass / less / css而不在JS中要求它们吗？
date:   2020-03-23T03:47:38.000Z
description: 我目前有一些用webpack成功构建的react组件和sass。我也有一个主要的sass文件，该文件使用gulp任务构建为CSS。我只想使用这些技术中...
img: 
author: Mandy
category: question
answer: 0
tags: JavaScript CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我目前有一些用webpack成功构建的react组件和sass。</font><font style="vertical-align: inherit;">我也有一个主要的sass文件，该文件使用gulp任务构建为CSS。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只想使用这些技术中的一种，是否有可能仅将sass编译为css，而没有对入口文件中sass的相关要求？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个尝试使用WebpackExtractTextPlugin的示例</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack.config.js</font></font></p>

<pre><code>entry_object[build_css + "style.css"] = static_scss + "style.scss";<font></font>
module.exports = {<font></font>
  entry: entry_object,<font></font>
  output: {<font></font>
    path: './',<font></font>
    filename: '[name]'<font></font>
  },<font></font>
{<font></font>
  test: /\.scss$/,<font></font>
  include: /.scss$/,<font></font>
  loader: ExtractTextPlugin.extract("style-loader", "css!sass")<font></font>
}<font></font>
  plugins: [<font></font>
    new ExtractTextPlugin("[name]")<font></font>
  ]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行webpack之后，style.css资产如下所示：</font></font></p>

<pre><code>/******/ (function(modules) { // webpackBootstrap<font></font>
/******/    // The module cache<font></font>
/******/    var installedModules = {};<font></font>
/******/<font></font>
/******/    // The require function<font></font>
/******/    function __webpack_require__(moduleId) {<font></font>
<font></font>
...<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
