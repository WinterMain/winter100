---
layout: question
title:  Webpack-dev-server提供目录列表而不是应用程序页面
date:   2020-03-12T16:31:15.000Z
description: 我只能在下看到实际的应用/public。的配置webpack.config.js如下：var path    = require('path'...
img: 
author: 梅飞云
category: question
answer: 3
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><a href="https://www.samyoc.com//uploads/users/14045/images/thumbnails/1584030674665.png" data-src="https://www.samyoc.com//uploads/users/14045/images/1584030674665.png"><img src="https://i.stack.imgur.com/RMyUb.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只能在下看到实际的应用</font></font><code>/public</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的配置</font></font><code>webpack.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如下：</font></font></p>

<pre><code>var path    = require('path');<font></font>
var webpack = require('webpack');<font></font>
<font></font>
module.exports = {<font></font>
<font></font>
  entry: [<font></font>
    'webpack-dev-server/client?http://localhost:8080',<font></font>
    'webpack/hot/only-dev-server',<font></font>
    './app/js/App.js'<font></font>
],<font></font>
<font></font>
  output: {<font></font>
    path: path.join(__dirname, 'public'),<font></font>
    filename: 'bundle.js',<font></font>
    publicPath: 'http://localhost:8080'<font></font>
  },<font></font>
<font></font>
  module: {<font></font>
    loaders: [<font></font>
      {<font></font>
        test: /\.js$/,<font></font>
        loaders: ['react-hot', 'babel-loader'],<font></font>
        exclude: /node_modules/<font></font>
      }<font></font>
     ]<font></font>
   },<font></font>
<font></font>
  plugins: [<font></font>
    new webpack.HotModuleReplacementPlugin(),<font></font>
    new webpack.NoErrorsPlugin()<font></font>
  ]<font></font>
<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项目层次结构为：</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程式</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">js</font></font></li>
</ul></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node_modules</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上市</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的CSS</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">img</font></font></p></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bundle.js</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">index.html</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack.config.js</font></font></p></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我如何修改以确保该</font></font><code>http://localhost:8080/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">条目本身是针对应用程序的？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1351篇《Webpack-dev-server提供目录列表而不是应用程序页面》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙村村Pro</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以将</font></font><code>--content-base</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标志</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">到启动脚本中，例如</font></font></p>

<pre><code>    "scripts": {<font></font>
        "start:dev": "webpack-dev-server --inline --content-base ./public"<font></font>
    }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长LA</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是webpack的开发服务器，则可以传入选项以</font></font><code>/public</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用作基本目录。</font></font></p>

<pre><code>devServer: {<font></font>
    publicPath: "/",<font></font>
    contentBase: "./public",<font></font>
    hot: true<font></font>
},<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">更多选项和一般信息</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">请参阅</font></font><a href="https://webpack.js.org/configuration/dev-server/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack配置文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，尤其是</font></font><a href="https://webpack.js.org/configuration/dev-server/#devserver" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack开发服务器文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinTom</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不小心删除了index.html，然后仅得到目录列表。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
