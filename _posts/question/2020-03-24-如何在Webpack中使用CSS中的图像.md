---
layout: question
title:  如何在Webpack中使用CSS中的图像
date:   2020-03-24T07:45:20.000Z
description: 我正在做一个带有Webpack设置的React，并且正在努力做应该看起来很简单的事情。我希望webpack包含图像，并像使用gulp一样将其最小化，但我无...
img: 
author: 番长
category: question
answer: 0
tags: css Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在做一个带有Webpack设置的React，并且正在努力做应该看起来很简单的事情。</font><font style="vertical-align: inherit;">我希望webpack包含图像，并像使用gulp一样将其最小化，但我无法弄清楚。</font><font style="vertical-align: inherit;">我只希望能够像这样在我的CSS中链接图像：</font></font></p>

<pre><code>/* ./src/img/background.jpg */<font></font>
<font></font>
body { background: url('./img/background.jpg'); }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我所有的css / js / img文件夹都放在src文件夹中。</font><font style="vertical-align: inherit;">Webpack输出到dist文件夹，但是我不知道如何在那里获取图像。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的webpack设置：</font></font></p>

<pre><code> var path = require('path');<font></font>
 var webpack = require('webpack');<font></font>
 var HtmlWebpackPlugin = require('html-webpack-plugin');<font></font>
<font></font>
 module.exports = {<font></font>
  devtool: 'cheap-eval-source-map',<font></font>
  entry: [<font></font>
   'webpack-dev-server/client?http://localhost:8080',<font></font>
   'webpack/hot/dev-server',<font></font>
   './src/index.js'<font></font>
  ],<font></font>
  output: {<font></font>
  path: path.join(__dirname, 'dist'),<font></font>
  //  publicPath: './dist',<font></font>
  filename: 'bundle.js'<font></font>
  },<font></font>
  plugins: [<font></font>
  new webpack.HotModuleReplacementPlugin(),<font></font>
  new HtmlWebpackPlugin({<font></font>
  template: './src/index.html'<font></font>
   })<font></font>
  ],<font></font>
  module: {<font></font>
  loaders: [{<font></font>
   exclude: /node_modules/,<font></font>
   test: /\.js?$/,<font></font>
   loader: 'babel'<font></font>
   }, {<font></font>
  test: /\.scss$/,<font></font>
  loader: 'style!css!sass'<font></font>
    }, {<font></font>
  test: /\.(png|jpg)$/,<font></font>
  loader: 'file-loader'<font></font>
  }]<font></font>
 },<font></font>
<font></font>
 devServer: {<font></font>
  historyApiFallback: true,<font></font>
  contentBase: './dist',<font></font>
  hot: true<font></font>
  }<font></font>
};<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3464篇《如何在Webpack中使用CSS中的图像》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
