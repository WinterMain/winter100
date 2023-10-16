---
layout: question
title:  webpack sass-loader不生成CSS文件
date:   2020-03-19T06:22:45.000Z
description: 我不知道如何使用webpack sass-loader渲染CSS文件。这是我的webpackconfig.js的样子：module.exports...
img: 
author: 
category: question
answer: 0
tags: 上海社会科学院 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道如何使用webpack sass-loader渲染CSS文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的webpackconfig.js的样子：</font></font></p>

<pre><code>module.exports = {<font></font>
  context: __dirname + "/app",<font></font>
  entry: {<font></font>
    javascript: "./app.js",<font></font>
    html: "./index.html"<font></font>
  },<font></font>
<font></font>
<font></font>
  output: {<font></font>
    filename: "app.js",<font></font>
    path: __dirname + "/dist"<font></font>
  },<font></font>
<font></font>
<font></font>
  module: {<font></font>
    loaders: [<font></font>
      //JAVASCRIPT<font></font>
      {<font></font>
        test: /\.js$/,<font></font>
        exclude: /node_modules/,<font></font>
        loaders: ["babel-loader"],<font></font>
      },<font></font>
<font></font>
      //Index HMTML<font></font>
      {<font></font>
        test: /\.html$/,<font></font>
        loader: "file?name=[name].[ext]",<font></font>
      },<font></font>
      //Hotloader<font></font>
      {<font></font>
        test: /\.js$/,<font></font>
        exclude: /node_modules/,<font></font>
        loaders: ["react-hot", "babel-loader"],<font></font>
      },<font></font>
<font></font>
      // SASS<font></font>
      {<font></font>
        test: /\.scss$/,<font></font>
        loader: 'style!css!sass'<font></font>
      }<font></font>
<font></font>
    ],<font></font>
  }<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如您所见，我正在使用文档中指定的sass-loader模块加载器。</font></font></p>

<pre><code>  {<font></font>
    test: /\.scss$/,<font></font>
    loader: 'style!css!sass'<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的根看起来像这样：</font></font></p>

<pre><code>Project Root:<font></font>
  app:<font></font>
    style.scss<font></font>
  dist:<font></font>
   ?????? WTF is my css file??<font></font>
  webpack.config.js<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以使其他所有工作正常进行，例如html和jsx babble加载程序。</font><font style="vertical-align: inherit;">我只是在命令行中输入webpack，事情就发生了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在使用sass加载程序时出了点问题。</font><font style="vertical-align: inherit;">它是什么？</font><font style="vertical-align: inherit;">请帮忙。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2388篇《webpack sass-loader不生成CSS文件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
