---
layout: question
title:  使用Webpack ExtractTextPlugin获取CSS输出
date:   2020-03-24T07:42:46.000Z
description: 我试图让CSS要求使用ExtractTextPlugin在webpack中工作，但没有成功我想要一个单独的CSS文件，而不是内联任何CSS。 这是...
img: 
author: 小宇宙猴子
category: question
answer: 2
tags: 网络包 Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图让CSS要求使用ExtractTextPlugin在webpack中工作，但没有成功</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想要一个单独的CSS文件，而不是内联任何CSS。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的webpack配置：</font></font></p>

<pre><code>var path = require('path');<font></font>
var webpack = require('webpack');<font></font>
var ExtractTextPlugin = require('extract-text-webpack-plugin');<font></font>
<font></font>
module.exports = {<font></font>
  devtool: 'eval',<font></font>
  entry: [<font></font>
    'webpack-dev-server/client?http://localhost:3000',<font></font>
    'webpack/hot/only-dev-server',<font></font>
    './scripts/index'<font></font>
  ],<font></font>
  output: {<font></font>
    path: path.join(__dirname, 'build'),<font></font>
    filename: 'bundle.js',<font></font>
    publicPath: '/scripts/'<font></font>
  },<font></font>
  plugins: [<font></font>
    new webpack.HotModuleReplacementPlugin(),<font></font>
    new webpack.NoErrorsPlugin(),<font></font>
    new ExtractTextPlugin('styles/styles.css', {<font></font>
      allChunks: true<font></font>
    })<font></font>
  ],<font></font>
  resolve: {<font></font>
    extensions: ['', '.js', '.jsx']<font></font>
  },<font></font>
  module: {<font></font>
    loaders: [{<font></font>
      test: /\.jsx?$/,<font></font>
      loaders: ['react-hot', 'babel'],<font></font>
      include: path.join(__dirname, 'scripts')<font></font>
    },<font></font>
    {<font></font>
        test: /\.css$/,<font></font>
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')<font></font>
    }]<font></font>
  }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">index.js：</font></font></p>

<pre><code>import React from 'react';<font></font>
import App from './App';<font></font>
<font></font>
React.render(&lt;App /&gt;, document.getElementById('root'));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">App.js：</font></font></p>

<pre><code>import React from 'react';<font></font>
<font></font>
require('../styles/app.css');<font></font>
<font></font>
export default class App extends React.Component {<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;h1&gt;Hello, world.&lt;/h1&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">index.html：</font></font></p>

<pre><code>&lt;html&gt;<font></font>
  &lt;head&gt;<font></font>
    &lt;link rel="stylesheet" href="/styles/styles.css"&gt;<font></font>
  &lt;/head&gt;<font></font>
  &lt;body&gt;<font></font>
    &lt;div id='root'&gt;&lt;/div&gt;<font></font>
  &lt;/body&gt;<font></font>
  &lt;script src="/scripts/bundle.js"&gt;&lt;/script&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">styles.css返回404</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">知道这里可能出什么问题了。</font><font style="vertical-align: inherit;">如果我不使用ExtractTextPlugin，而只需在config中执行此操作：</font></font></p>

<pre><code>module: {<font></font>
        loaders: [<font></font>
            { test: /\.css$/, loader: "style-loader!css-loader" }<font></font>
        ]<font></font>
    }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后我正确地将css应用于页面，但是显然这不是来自css文件</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我第一次尝试使用webpack，因此可能会出现一些菜鸟错误</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有任何想法吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3460篇《使用Webpack ExtractTextPlugin获取CSS输出》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><code>ExtractTextPlugin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要在两个位置添加：在Loader中，以及作为插件。</font><font style="vertical-align: inherit;">这是从</font></font><a href="http://webpack.github.io/docs/stylesheets.html#separate-css-bundle" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">样式表文档中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提取的示例</font><font style="vertical-align: inherit;">。</font></font></p>

<pre class="lang-js prettyprint-override"><code>// webpack.config.js<font></font>
var ExtractTextPlugin = require("extract-text-webpack-plugin");<font></font>
module.exports = {<font></font>
    // The standard entry point and output config<font></font>
    entry: {<font></font>
        posts: "./posts",<font></font>
        post: "./post",<font></font>
        about: "./about"<font></font>
    },<font></font>
    output: {<font></font>
        filename: "[name].js",<font></font>
        chunkFilename: "[id].js"<font></font>
    },<font></font>
    module: {<font></font>
        loaders: [<font></font>
            // Extract css files<font></font>
            {<font></font>
                test: /\.css$/,<font></font>
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")<font></font>
            },<font></font>
            // Optionally extract less files<font></font>
            // or any other compile-to-css language<font></font>
            {<font></font>
                test: /\.less$/,<font></font>
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")<font></font>
            }<font></font>
            // You could also use other loaders the same way. I. e. the autoprefixer-loader<font></font>
        ]<font></font>
    },<font></font>
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)<font></font>
    plugins: [<font></font>
        new ExtractTextPlugin("[name].css")<font></font>
    ]<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一起</font><font style="vertical-align: inherit;">使用</font></font><code>css-loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>style-loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一起解析CSS，然后将其转换为样式节点，可以像代码一样将其导入Webpack。</font><font style="vertical-align: inherit;">我不明白您为什么要在JavaScript和CSS之间建立这种人为的关系。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，以上方法再次发出CSS。</font><font style="vertical-align: inherit;">为什么要像这样往返进行代码？</font><font style="vertical-align: inherit;">使用</font></font><a href="https://github.com/webpack-contrib/raw-loader" rel="nofollow noreferrer"><code>raw-loader</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主CSS文件并将其添加到入口点。</font><font style="vertical-align: inherit;">您会丢失</font></font><code>css-loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行的</font><font style="vertical-align: inherit;">所有错误检查</font><font style="vertical-align: inherit;">，但是编译会快得多。</font><font style="vertical-align: inherit;">但是，如果您使用</font></font><code>sass-loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则仍然会得到所有错误检查。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
