---
layout: question
title:  使用多个入口点包含babel polyfill的最佳方法是什么
date:   2020-03-23T07:46:16.000Z
description: 我正在使用使用多个入口点的webpack配置：var fs = require('fs');var webpack = require('webpa...
img: 
author: 十三
category: question
answer: 0
tags: webpack Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用使用多个入口点的webpack配置：</font></font></p>

<pre><code>var fs = require('fs');<font></font>
var webpack = require('webpack');<font></font>
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.[hash].js');<font></font>
<font></font>
module.exports = {<font></font>
    cache: true,<font></font>
    entry: {<font></font>
        main: './resources/assets/js/main.js',<font></font>
        services: './resources/assets/js/services.js'<font></font>
    },<font></font>
    output: {<font></font>
        path: './public/assets/web/js',<font></font>
        filename: '[name].[hash].js',<font></font>
        publicPath: '/assets/web/js/',<font></font>
        chunkFilename: '[id].[chunkhash].js'<font></font>
    },<font></font>
    resolve: {<font></font>
        modulesDirectories: ['node_modules', 'web_modules', 'modules']<font></font>
    },<font></font>
    module: {<font></font>
        loaders: [{<font></font>
            test: /\.js$/,<font></font>
            exclude: [/node_modules/, /web_modules/],<font></font>
            loader: 'babel-loader',<font></font>
            query: {<font></font>
                stage: 0<font></font>
            }<font></font>
        }]<font></font>
    },<font></font>
    plugins: [commonsPlugin,<font></font>
        new webpack.ProvidePlugin({<font></font>
            jQuery: 'jquery',<font></font>
            $: 'jquery',<font></font>
            'window.jQuery': 'jquery'<font></font>
        }),<font></font>
        function() {<font></font>
            this.plugin('done', function(stats) {<font></font>
                fs.writeFile('./cache.json', JSON.stringify({<font></font>
                    hash: stats.hash<font></font>
                }));<font></font>
            });<font></font>
        }<font></font>
    ]<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么办法</font></font><strong><a href="http://babeljs.io/docs/usage/polyfill/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的webpack配置中</font><font style="vertical-align: inherit;">包含</font><strong><a href="http://babeljs.io/docs/usage/polyfill/" rel="noreferrer"><font style="vertical-align: inherit;">babel</font></a></strong><font style="vertical-align: inherit;"> polyfill。</font><font style="vertical-align: inherit;">或将其包括在我的设置中的最佳方法是什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是否必须在所有模块中都包含它？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提前非常感谢您！</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2935篇《使用多个入口点包含babel polyfill的最佳方法是什么》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
