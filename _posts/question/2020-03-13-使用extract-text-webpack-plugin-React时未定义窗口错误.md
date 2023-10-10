---
layout: question
title:  使用extract-text-webpack-plugin React时未定义窗口错误
date:   2020-03-13T07:33:08.000Z
description: 我正在使用webpack构建我的react组件，并且试图使用extract-text-webpack-plugin来将css与生成的js文件分开。但是，当...
img: 
author: 卡卡西西里
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用webpack构建我的react组件，并且试图使用</font></font><code>extract-text-webpack-plugin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来将css与生成的js文件分开。</font><font style="vertical-align: inherit;">但是，当我尝试构建组件时，出现以下错误：
 </font></font><code>Module build failed: ReferenceError: window is not defined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的webpack.config.js文件如下所示：</font></font></p>

<pre class="lang-js prettyprint-override"><code>var webpack = require('webpack');<font></font>
var ExtractTextPlugin = require('extract-text-webpack-plugin');<font></font>
<font></font>
module.exports = {<font></font>
  entry: {<font></font>
    MainComponent: './src/main.js'<font></font>
  },<font></font>
  output: {<font></font>
    libraryTarget: 'var',<font></font>
    library: 'MainComponent',<font></font>
    path: './build',<font></font>
    filename: '[name].js'<font></font>
  },<font></font>
  module: {<font></font>
    loaders: [{<font></font>
      test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader!css-loader')<font></font>
    }]<font></font>
  },<font></font>
  plugins: [<font></font>
    new ExtractTextPlugin('styles.css')<font></font>
  ]<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1388篇《使用extract-text-webpack-plugin React时未定义窗口错误》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom西里</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有找到原因的解释，所以我在这里发布了此答案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自</font></font><a href="https://github.com/webpack/extract-text-webpack-plugin#api"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/webpack/extract-text-webpack-plugin#api</font></font></a></p>

<blockquote>
  <p><code>ExtractTextPlugin.extract([notExtractLoader], loader, [options])</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  从现有加载器创建提取加载器。</font></font></p>
  
  <p><code>notExtractLoader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> （可选）未提取css时应使用的加载器（即，在allChunks：false时在&gt;附加块中）</font></font></p>
  
  <p><code>loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 应该用于将资源转换为CSS导出模块的加载器。</font></font></p>
  
  <p><code>options</code></p>
  
  <p><code>publicPath</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 覆盖此加载程序的publicPath设置。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>#extract</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法应接收输出的加载程序</font></font><code>css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">发生的事情是，它接收到一个</font></font><code>style-loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">javascript代码的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，该</font><em><font style="vertical-align: inherit;">代码</font></em><font style="vertical-align: inherit;">打算注入到网页中。</font><font style="vertical-align: inherit;">此代码将尝试访问</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不应将loader字符串传递</font></font><code>style</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给</font></font><code>#extract</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是...如果您设置</font></font><code>allChunks=false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，那么它将不会为非初始块构建CSS文件。</font><font style="vertical-align: inherit;">因此，它需要知道要使用哪种加载器来注入页面。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提示：Webpack是真正需要深入了解的工具，否则您可能会遇到很多奇怪的问题。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
