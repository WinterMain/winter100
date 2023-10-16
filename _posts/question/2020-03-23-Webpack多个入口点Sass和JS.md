---
layout: question
title:  Webpack，多个入口点Sass和JS
date:   2020-03-23T07:40:06.000Z
description: 以下是我的webpack配置。目前文件加载了这个main.js入口点import './resources/assets/js/app.js';im...
img: 
author: 神奇神乐GO
category: question
answer: 0
tags: JavaScript CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是我的webpack配置。</font><font style="vertical-align: inherit;">目前文件加载了这个main.js入口点</font></font></p>

<pre><code>import './resources/assets/js/app.js';<font></font>
import './resources/assets/sass/main.scss';<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以在public / js文件中同时获取这两个文件，但是我想在自己的文件夹中获取css和js。</font><font style="vertical-align: inherit;">这可能吗？</font></font></p>

<pre><code>var webpack = require('webpack');<font></font>
var path = require('path');<font></font>
let ExtractTextPlugin = require("extract-text-webpack-plugin");<font></font>
var WebpackNotifierPlugin = require('webpack-notifier');<font></font>
<font></font>
module.exports = {<font></font>
<font></font>
    resolve: {<font></font>
    alias: {<font></font>
      'masonry': 'masonry-layout',<font></font>
      'isotope': 'isotope-layout'<font></font>
    }<font></font>
  },<font></font>
<font></font>
    entry: './main.js',<font></font>
    devtool: 'source-map',<font></font>
    output: {<font></font>
        path: path.resolve(__dirname, './public'),<font></font>
        filename: 'bundle.js'<font></font>
    },<font></font>
<font></font>
    module: {<font></font>
        rules: [<font></font>
<font></font>
         {  test: /\.js$/, <font></font>
                exclude: /node_modules/, <font></font>
                loader: "babel-loader?presets[]=es2015",<font></font>
<font></font>
             },<font></font>
<font></font>
            {<font></font>
                test:/\.scss$/,<font></font>
                use: ExtractTextPlugin.extract({<font></font>
                    use: [{loader:'css-loader?sourceMap'}, {loader:'sass-loader', options: {<font></font>
                    sourceMap: true<font></font>
                }}],<font></font>
<font></font>
                })<font></font>
            },<font></font>
<font></font>
            /*{<font></font>
        test    : /\.(png|jpg|svg)$/,<font></font>
        include : path.join(__dirname, '/dist/'),<font></font>
        loader  : 'url-loader?limit=30000&amp;name=images/[name].[ext]'<font></font>
    }, */<font></font>
<font></font>
            {<font></font>
                 test: /\.vue$/,<font></font>
        loader: 'vue-loader',<font></font>
        options: {<font></font>
          loaders: {<font></font>
          }<font></font>
          // other vue-loader options go here<font></font>
        }<font></font>
      },<font></font>
<font></font>
<font></font>
<font></font>
        ]<font></font>
    },<font></font>
<font></font>
    plugins: [<font></font>
<font></font>
        //new webpack.optimize.UglifyJsPlugin(),<font></font>
        new ExtractTextPlugin('app.css'),<font></font>
        new WebpackNotifierPlugin(),<font></font>
<font></font>
    ]<font></font>
<font></font>
};<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2919篇《Webpack，多个入口点Sass和JS》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
